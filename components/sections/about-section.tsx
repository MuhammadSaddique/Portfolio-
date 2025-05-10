'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-muted/40"
    >
      <div className="container px-4 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Image and Quick Info */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-8">
            <Avatar className="h-40 w-40">
            <AvatarImage src="/profile-pic.jpg" alt="Muhammad Saddique Shah" />
              <AvatarFallback>MSS</AvatarFallback>
            </Avatar>
            
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl font-semibold">Muhammad Saddique Shah</h3>
              <p className="text-muted-foreground">Frontend Developer & Web3 Enthusiast</p>
            </div>
            
            <a href="/saddique-updated.pdf" download>
  <Button variant="outline" className="gap-2">
    <Download size={16} />
    Download Resume
  </Button>
</a>
          </motion.div>
          
          {/* Right Column - About Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <Separator className="w-24 h-1 bg-primary" />
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate frontend developer specializing in creating immersive web experiences using modern technologies like React and Next.js. With a strong focus on user experience and performance, I build applications that are both beautiful and functional.
              </p>
              <p>
                My journey into web development began with a curiosity about how things work on the web, which evolved into a deep passion for creating interactive digital experiences. I'm particularly enthusiastic about Web3 technologies and their potential to reshape the digital landscape.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}