import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, useSpring } from 'framer-motion';

const FRAME_COUNT = 240;

function currentFrame(index) {
  const num = String(index).padStart(3, '0');
  return `/frames/ezgif-frame-${num}.png`;
}

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  // Track global window scroll
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d', { alpha: false });
    let animationFrameId;
    let lastRenderedIndex = -1;
    let lastValidImg = null;

    // Simple cache to hold recently used images
    const imageCache = new Map();
    const CACHE_SIZE = 80; // Keep roughly 80 frames in memory (bidirectional)

    const render = () => {
      const index = Math.min(Math.max(Math.floor(frameIndex.get()), 0), FRAME_COUNT - 1);
      
      // We only need to redraw if the frame index changed
      if (index !== lastRenderedIndex) {
        
        // Bidirectional preload: preload 10 frames behind and 20 frames ahead
        const startPreload = Math.max(0, index - 10);
        const endPreload = Math.min(FRAME_COUNT, index + 20);

        for (let i = startPreload; i < endPreload; i++) {
          if (!imageCache.has(i)) {
            const img = new Image();
            img.src = currentFrame(i + 1); // 1-indexed
            
            // Use background decoding to prevent main-thread freeze
            img.decode().then(() => {
              imageCache.set(i, img);
              // If this was the exact frame we are currently waiting for, force a redraw
              if (i === lastRenderedIndex) {
                 lastRenderedIndex = -1; 
              }
            }).catch(() => {
              // Ignore decoding errors (e.g. if src is aborted)
            });
          }
        }

        // Clean up old frames to save memory
        if (imageCache.size > CACHE_SIZE) {
          for (const key of imageCache.keys()) {
            if (key < index - 40 || key > index + 40) {
              imageCache.delete(key);
            }
          }
        }

        let img = imageCache.get(index);

        // Sticky Frame Logic: 
        // If the current frame isn't decoded yet, stick to the last valid frame we drew
        // instead of flashing to black or a fallback brain.
        if (!img) {
            img = lastValidImg;
        } else {
            lastValidImg = img;
        }

        if (img) {
          lastRenderedIndex = index;
            
          // Only resize canvas if window size changed
          if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
          }

          const hRatio = canvas.width / img.width;
          const vRatio = canvas.height / img.height;
          const ratio = Math.max(hRatio, vRatio);

          const centerShiftX = (canvas.width - img.width * ratio) / 2;
          const centerShiftY = (canvas.height - img.height * ratio) / 2;

          context.fillStyle = '#050505';
          context.fillRect(0, 0, canvas.width, canvas.height);
          
          context.drawImage(
            img, 
            0, 0, img.width, img.height,
            centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
          );
        } else {
           // We are waiting for the very first frame to load, so just hold
           lastRenderedIndex = index;
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [frameIndex]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      {/* Dark gradient overlay to ensure text on the website is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712]/90 mix-blend-multiply" />
    </div>
  );
}
