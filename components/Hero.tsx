"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/cn';

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
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

export function Hero() {
  return (
    <section className="relative pt-24 pb-32 md:pt-40 md:pb-48 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        
        {/* Main Content (Title/Subtitle/CTA) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          {/* Tagline (Subtle) */}
          <motion.p variants={itemVariants} className="text-sm md:text-base font-semibold uppercase tracking-widest text-primary mb-4">
            Future-Proof Your Campus
          </motion.p>

          {/* Large Title (Apple-Inspired Typography) */}
          <motion.h1 
            variants={itemVariants} 
            className={cn(
              "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight",
              "bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600"
            )}
          >
            The Campus OS. <br className="hidden lg:block"/>
            Powered by <span className="text-primary inline-block">AI.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 font-light">
            A secure, multi-tenant Learning Management System designed for the scale and complexity of modern education ecosystems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact" 
              className="bg-primary text-white text-base md:text-lg px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group"
            >
              Request Live Demo
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-700 bg-gray-100 text-base md:text-lg px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              View Pricing
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Placeholder for Freepik Image (MacBook/iPad Mockup) */}
        <motion.div variants={itemVariants} className="mt-20 px-4">
          <div className="relative w-full max-w-6xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-primary/30 border border-gray-100 bg-gray-50 flex items-center justify-center">
            <span className="text-gray-400 text-lg font-medium">
              [Freepik Mockup Placeholder: MacBook/iPad Dashboard View]
            </span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
