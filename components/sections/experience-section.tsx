'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { experienceData } from '@/lib/data';

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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
      id="experience"
      ref={sectionRef}
      className="py-24"
    >
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={isInView ? { opacity: 1, width: '6rem' } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mt-4 mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            My professional journey and experience in the tech industry.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative space-y-12"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 top-0 h-full w-0.5 bg-border" />

          {experienceData.map((experience, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-8 sm:gap-0`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 sm:left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
              
              {/* Date on one side */}
              <div className="sm:w-1/2 sm:pr-10 sm:pl-10 flex items-start justify-start sm:justify-end">
                <div className={`text-sm font-medium text-muted-foreground px-3 py-1 rounded-full bg-muted inline-block ${index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
                  {experience.period}
                </div>
              </div>
              
              {/* Content on the other side */}
              <div className="sm:w-1/2 sm:pl-10 sm:pr-10">
                <Card className="overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="p-6 pb-4">
                    <div className="space-y-1.5">
                      <CardTitle className="text-lg">{experience.role}</CardTitle>
                      <CardDescription>
                        <span className="font-medium">{experience.company}</span> - {experience.location}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <ul className="list-disc ml-4 space-y-1 text-sm text-muted-foreground">
                      {experience.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}