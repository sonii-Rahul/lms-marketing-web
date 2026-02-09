"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { AppContent } from '@/data/content';
import { Layers, ShieldCheck, LayoutGrid, Sparkles, TrendingUp, Users } from 'lucide-react';
import { cn } from '@/utils/cn';

// Mapping content data to Lucide Icons explicitly (since AppContent doesn't store the component type)
const iconMap: { [key: string]: React.ElementType } = {
    "Optimized Scheduling": LayoutGrid,
    "Intelligent Content Delivery": Sparkles,
    "Predictive Success Metrics": TrendingUp,
    "Unified Instructor Control": Users,
};

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
            "flex flex-col justify-between hover:shadow-medium transition-shadow duration-300",
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
        <p className="text-text-secondary leading-relaxed text-base">{description}</p>
        
        {span === 'col-span-2' && (
            <div className="mt-8 h-40 bg-white rounded-xl shadow-inner border border-gray-100 flex items-center justify-center text-gray-400 text-sm">
                [Visualizer: Multi-Tenant Dashboard Mockup]
            </div>
        )}
    </motion.div>
);

export function FeaturesGrid() {
    const features = AppContent.features.slice(0, 4).map((f, index) => ({
        ...f,
        icon: iconMap[f.title] || LayoutGrid, // Use appropriate icon or default
        span: index === 0 || index === 3 ? 'col-span-2' : 'col-span-1' as 'col-span-1' | 'col-span-2',
        delay: index * 0.1,
    }));

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
                    {features.map((feature) => (
                        <BentoCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            span={feature.span}
                            delay={feature.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}