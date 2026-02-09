"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Layers, ShieldCheck, TrendingUp, LayoutGrid } from 'lucide-react';
import { cn } from '@/utils/cn';

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  span: 'col-span-1' | 'col-span-2' | 'col-span-3';
  delay: number;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, description, icon: Icon, span, delay }) => (
  <motion.div
    className={cn(
      "p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-soft",
      "flex flex-col justify-between hover:shadow-md transition-shadow duration-300",
      span
    )}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px 0px" }}
    transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    <div className="mb-4 text-primary">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-base">{description}</p>
    
    {span === 'col-span-2' && (
        <div className="mt-8 h-40 bg-white rounded-xl shadow-inner border border-gray-100 flex items-center justify-center text-gray-400 text-sm">
            [Visualizer: Multi-Tenant Dashboard Mockup]
        </div>
    )}
  </motion.div>
);

export function FeaturesGrid() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            Built for Scale. Powered by Intelligence.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AI Analytics (Wide Span) */}
          <BentoCard
            title="Predictive AI Analytics"
            description="Identify at-risk students and automate personalized learning paths using our custom LLM integration layer."
            icon={Sparkles}
            span="col-span-2"
            delay={0.1}
          />

          {/* Card 2: Multi-Tenant Architecture */}
          <BentoCard
            title="Isolated Multi-Tenancy"
            description="Securely manage data for multiple institutions from a single, high-availability SAAS instance."
            icon={Layers}
            span="col-span-1"
            delay={0.2}
          />

          {/* Card 3: Enterprise Security */}
          <BentoCard
            title="Enterprise-Grade Security"
            description="OWASP-compliant security protocols and continuous vulnerability scanning ensure student data integrity."
            icon={ShieldCheck}
            span="col-span-1"
            delay={0.3}
          />

          {/* Card 4: Seamless Management */}
          <BentoCard
            title="End-to-End Management"
            description="From admissions to alumni tracking, streamline every operational workflow into a unified platform."
            icon={LayoutGrid}
            span="col-span-2"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
