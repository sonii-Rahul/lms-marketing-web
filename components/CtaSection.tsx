"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CtaSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
        >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Ready to transform your campus?
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 font-light">
                Schedule a personalized demo to see how our AI-powered platform can streamline your administration, drive student success, and ensure security.
            </p>
            
            <Link 
              href="/contact" 
              className="bg-primary text-white text-lg px-10 py-4 rounded-full font-semibold shadow-2xl hover:bg-blue-600 transition-all duration-300 flex items-center justify-center w-fit mx-auto group"
            >
              Get Started Today
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
      </div>
    </section>
  )
}
