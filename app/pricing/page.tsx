import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing | LMS SaaS',
    description: 'Find the perfect pricing plan for your school, college, or enterprise. Includes monthly/yearly options and a clear feature comparison.',
};

"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

const pricingTiers = [
    {
        name: "School Tier",
        slug: "school",
        price: { monthly: 99, yearly: 990 },
        description: "Ideal for single primary or secondary schools looking for essential LMS functions.",
        features: [
            { label: "Full Student Management", available: true },
            { label: "Basic Reporting", available: true },
            { label: "100GB Storage", available: true },
            { label: "Multi-Tenant Ready", available: false },
            { label: "AI Grading Assistant", available: false },
            { label: "Dedicated Support", available: false },
            { label: "Custom Domain", available: false },
        ],
    },
    {
        name: "College Tier",
        slug: "college",
        price: { monthly: 299, yearly: 2990 },
        description: "Best for universities requiring advanced student tracking and modular LMS customization.",
        features: [
            { label: "Full Student Management", available: true },
            { label: "Advanced Reporting & Analytics", available: true },
            { label: "1TB Storage", available: true },
            { label: "Multi-Tenant Ready", available: true },
            { label: "AI Grading Assistant", available: true },
            { label: "Dedicated Support", available: false },
            { label: "Custom Domain", available: false },
        ],
    },
    {
        name: "Enterprise",
        slug: "enterprise",
        price: { monthly: 'Custom', yearly: 'Custom' },
        description: "For large institutions or government bodies needing unlimited scale, security, and custom integrations.",
        features: [
            { label: "Full Student Management", available: true },
            { label: "Advanced Reporting & Analytics", available: true },
            { label: "Unlimited Storage", available: true },
            { label: "Multi-Tenant Ready", available: true },
            { label: "AI Grading Assistant", available: true },
            { label: "Dedicated Support (24/7 SLA)", available: true },
            { label: "Custom Domain & Branding", available: true },
        ],
    },
];

const FeatureItem: React.FC<{ label: string, available: boolean }> = ({ label, available }) => (
    <li className="flex items-start py-3 border-b border-gray-100">
        <span className={cn("flex-shrink-0 mr-3 mt-1", available ? "text-primary" : "text-gray-400")}>
            {available ? <Check size={20} /> : <X size={20} />}
        </span>
        <span className={cn("text-base font-light", available ? "text-gray-700" : "text-gray-400")}>
            {label}
        </span>
    </li>
);

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <div className="min-h-screen">
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                        Simple Pricing. Massive Value.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto">
                        Start with a free trial and scale your plan based on your institution&apos;s growth and needs.
                    </p>
                </motion.div>
            </section>

            {/* Pricing Toggle */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-16"
            >
                <div className="flex items-center space-x-2 bg-gray-100 p-1.5 rounded-full">
                    <button
                        onClick={() => setIsYearly(false)}
                        className={cn(
                            "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                            !isYearly ? "bg-white shadow-md text-gray-900" : "text-gray-600 hover:text-gray-900"
                        )}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setIsYearly(true)}
                        className={cn(
                            "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                            isYearly ? "bg-white shadow-md text-gray-900" : "text-gray-600 hover:text-gray-900"
                        )}
                    >
                        Annual (Save 20%)
                    </button>
                </div>
            </motion.div>

            {/* Pricing Cards */}
            <div className="container mx-auto px-4 max-w-7xl pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px 0px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={cn(
                                "p-8 md:p-12 rounded-3xl border shadow-xl flex flex-col",
                                tier.slug === 'college' ? "bg-primary border-primary/50 shadow-primary/30 text-white" : "bg-white border-gray-100 shadow-soft"
                            )}
                        >
                            <h2 className={cn("text-3xl font-bold tracking-tight mb-2", tier.slug === 'college' ? "text-white" : "text-gray-900")}>
                                {tier.name}
                            </h2>
                            <p className={cn("text-base font-light mb-8", tier.slug === 'college' ? "text-blue-200" : "text-gray-500")}>
                                {tier.description}
                            </p>

                            <div className="mb-8">
                                {tier.slug === 'enterprise' ? (
                                    <p className={cn("text-5xl font-extrabold tracking-tighter", tier.slug === 'college' ? "text-white" : "text-gray-900")}>
                                        Custom
                                    </p>
                                ) : (
                                    <p className={cn("text-5xl font-extrabold tracking-tighter", tier.slug === 'college' ? "text-white" : "text-gray-900")}>
                                        ₹{isYearly ? tier.price.yearly : tier.price.monthly}
                                        <span className={cn("text-xl font-medium ml-2", tier.slug === 'college' ? "text-blue-200" : "text-gray-500")}>
                                            / {isYearly ? 'year' : 'month'}
                                        </span>
                                    </p>
                                )}
                            </div>

                            <Link 
                                href={tier.slug === 'enterprise' ? "/contact" : "/signup"}
                                className={cn(
                                    "w-full py-3 rounded-full text-base font-semibold transition-colors flex items-center justify-center group",
                                    tier.slug === 'college' 
                                        ? "bg-white text-primary hover:bg-gray-100" 
                                        : "bg-primary text-white hover:bg-blue-600"
                                )}
                            >
                                {tier.slug === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                            {/* Feature Comparison List */}
                            <ul className={cn("mt-8 pt-6 border-t", tier.slug === 'college' ? "border-blue-300/30" : "border-gray-100")}>
                                {tier.features.map((feature) => (
                                    <FeatureItem key={feature.label} label={feature.label} available={feature.available} />
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
