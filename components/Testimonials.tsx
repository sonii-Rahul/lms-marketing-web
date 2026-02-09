"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { cn } from '@/utils/cn';

// Simple data for the trust bar
const stats = [
    { value: "99.8%", label: "Uptime Guaranteed" },
    { value: "500+", label: "Institutions Trusted" },
    { value: "4.9/5", label: "Average Review Score" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
};

export function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="max-w-4xl mx-auto text-center mb-16">
                <Quote className="mx-auto mb-4 text-primary" size={48} strokeWidth={1.5} />
                <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-light text-gray-700 leading-snug">
                    “LMS SaaS transformed our enrollment and reduced administrative load by 40%. The AI analytics are game-changing for student success.”
                </motion.p>
                <motion.p variants={itemVariants} className="mt-6 text-lg font-semibold text-gray-900">
                    — Vice Chancellor, Global University Network
                </motion.p>
            </div>
        </motion.div>

        {/* Trust Stats Bar */}
        <motion.div 
            className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                    <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-1">
                        {stat.value}
                    </p>
                    <p className="text-sm uppercase tracking-widest text-gray-600">
                        {stat.label}
                    </p>
                </div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
