'use client';

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { FloatingLaptop } from '@/components/3d/floating-laptop';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D Background Element */}
      {/* <div className="absolute inset-0 -z-10">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 2]}
          className="h-full w-full"
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingLaptop position={[0, 0, 0]} />
        </Canvas>
      </div> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background -z-10" />

      {/* Text Content */}
      <div className="container px-4 flex flex-col items-center text-center z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-3xl"
        >
          <motion.h2 
            custom={0}
            variants={textVariants}
            className="text-lg md:text-xl text-primary/80 font-medium"
          >
            Hello, I&apos;m
          </motion.h2>
          
          <motion.h1 
            custom={1}
            variants={textVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Muhammad Saddique Shah
          </motion.h1>
          
          <motion.p 
            custom={2}
            variants={textVariants}
            className="text-xl md:text-2xl text-muted-foreground mt-2"
          >
            Frontend Developer | Web3 Enthusiast | React & Next.js Expert
          </motion.p>
          
          <motion.div 
            custom={3}
            variants={textVariants}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <Button size="lg" className="px-8">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0],
          transition: { 
            opacity: { delay: 1.5, duration: 1 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } 
          }
        }}
        className="absolute bottom-10 flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}