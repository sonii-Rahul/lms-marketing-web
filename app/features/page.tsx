import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, LayoutGrid, Users, DollarSign, Clock, BarChart3, ShieldCheck } from 'lucide-react';
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Features | LMS SaaS',
    description: 'Explore the full suite of features: Multi-Tenant Architecture, AI Analytics, Student 360 Management, and secure payment automation for educational institutions.',
};

const featureModules = [
    { 
        title: "Multi-Tenant Architecture", 
        icon: Layers, 
        description: "Secure, isolated instances for every client. Scalable database schema designed for high-volume data separation and enterprise compliance." 
    },
    { 
        title: "AI-Driven Analytics", 
        icon: BarChart3, 
        description: "Predictive student performance, automated intervention alerts, and real-time faculty feedback powered by custom LLM models." 
    },
    { 
        title: "Student Management 360°", 
        icon: Users, 
        description: "Centralized profiles, enrollment tracking, digital grade books, and secure communication portals for students and parents." 
    },
    { 
        title: "Fees & Payment Automation", 
        icon: DollarSign, 
        description: "Integrate with Razorpay/Stripe, automate recurring fee collection, generate GST-compliant invoices, and manage payment plans." 
    },
    { 
        title: "Real-Time Attendance", 
        icon: Clock, 
        description: "Biometric and geo-fencing attendance options with instant reporting. Automated late/absent notifications to administrative staff." 
    },
    { 
        title: "Modular LMS Hub", 
        icon: LayoutGrid, 
        description: "Fully customizable learning modules, integrated virtual classrooms, assignment management, and automated grading pipelines." 
    },
    { 
        title: "Data Security & Compliance", 
        icon: ShieldCheck, 
        description: "OWASP standards, SOC 2 readiness, and customizable access controls ensure the highest level of data governance and security." 
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function FeaturesPage() {
    return (
        <div className="min-h-screen">
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                            The Platform Built to Scale Education.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto">
                            A unified, secure, and intelligent architecture designed to handle every operational complexity of large educational institutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {featureModules.map((module, index) => (
                            <motion.div
                                key={module.title}
                                variants={itemVariants}
                                transition={{ delay: index * 0.05 }}
                                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-soft hover:shadow-lg transition-shadow duration-300"
                            >
                                <module.icon size={36} strokeWidth={1.5} className="text-primary mb-4" />
                                <h3 className="text-xl font-semibold tracking-tight mb-2">{module.title}</h3>
                                <p className="text-gray-600 text-base leading-relaxed">{module.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            <section className="py-24 text-center">
                <Link 
                    href="/contact" 
                    className="bg-primary text-white text-lg px-10 py-4 rounded-full font-semibold shadow-2xl hover:bg-blue-600 transition-all duration-300 flex items-center justify-center w-fit mx-auto group"
                >
                    See Features in Action
                    <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>
        </div>
    );
}