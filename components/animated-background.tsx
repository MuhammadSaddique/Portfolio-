'use client';

import { motion } from 'framer-motion';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[length:400%_400%] bg-gradient-to-r from-background via-muted to-background opacity-40 dark:opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl" />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-primary/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAAD8/vz08vT09vT8+vzs7uxH16TeAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAuFJREFUOI0Vk+3NLiEIRG1B8ClAYAsQ2AIEt4D9ePtv5Xp/mZgYJ2fOFJKEfInkVWY2aglmQFkimRTV7MblYyVqD7HXyhKsSuPX12MeDhRHLtGvRG+P+B/S0Vu4OswR9tmvR+mTWHiwBB8lM+s4c/Cd1nCSR+3Gm2crhXz4XILa2qZGbH7yJ7GkZLXFP9qdj3n2wvS8vNTCER3REZiFwZYwatf6J9FEo5QxO3GUPjvT+OEJTn5KpH8TC+9SwEms2vr2+SBZyKaOJF20qcAsiO2nz4TCE3YQ+DGqH1XTCmJJuNbWF7+AB0Lj1nxeXrQn+oYHEvhJ/HBE7VibGAc0hgj+gF8M+wchdOQtzWdfgR0D+jBqv3G6R47HL4k7K3FJr+Qp1RKyXREiG6ObLoYje6YYfE/yNQmGxh+p6OgB6PaMU9BWWDqPtlG0wXl4XrdpuKAD+R1PjFohMDEQjV97yV6yZq11D6Xn6ClFxWjcl5wYOBjpGlGcQ6ySCvQE/BFO7awUiD1yd7YyUgb0Qh6I8QLKCBwW5RnHrcpIHCVEPKpj0hgP5iBx1QyQnwW5Jj4AAHkYqKPGW/on/iGhniV5RkGR4uE8XQjF4X1c9oab3Vj6hiVGlI8tGRhUURrt4qPA+0SyKyXhOGF9EpISJjKvyCnnkYbzQSBgTKE3V24nqxQYbys1p1aQxBPZgKKEdgHSpd2BlBJ8Yg5FeQxPKEdpdRXvQYQKIjjDCjUcXMxPDK+g0YCxrMB7xHLtN2P5CAh9SRCNRK2VGGowH6zlhR4z0UJvZQxGGJIqEZoPvBCJoXk/yKYhGqFkQxh7YBwDz+VkguYB7nYCHhq3Iy+jHdXLCQzB1wPxtc7vCRebwZrI9yD3BNzXvYwAV3pR+vgX6F6HBXr5FG+UCgG8UvwPPBhqL3BtJuUAAAAASUVORK5CYII=")`
        }}
      />
    </div>
  );
}