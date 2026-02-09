import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Our Mission & Story | LMS SaaS',
    description: 'Learn about the LMS SaaS mission: to empower institutions through scalable, secure, and AI-driven campus management. View our company milestones and commitment to excellence.',
};

import { motion } from 'framer-motion';
import { Briefcase, Zap, Heart, Users } from 'lucide-react';
import { cn } from '@/utils/cn';

const milestones = [
    { year: 2024, description: "Founded in Noida with a mission to simplify campus administration using modern technology." },
    { year: 2025, description: "Secured seed funding and launched the initial secure multi-tenant architecture with core LMS features." },
    { year: 2026, description: "Integrated proprietary AI analytics module for predictive student success and automated faculty assistance." },
    { year: 2027, description: "Expanded to support over 500 institutions globally, achieving SOC 2 Type II compliance." },
];

const teamFocus = [
    { title: "Engineering Excellence", icon: Zap, description: "Building scalable, robust, and clean backend systems using TypeScript and Node.js." },
    { title: "User-Centric Design", icon: Heart, description: "Obsessed with creating an intuitive, seamless UI/UX that feels effortless for students and staff." },
    { title: "Data Security", icon: ShieldCheck, description: "Ensuring every piece of data is protected with military-grade encryption and compliance adherence." },
];


export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-50 text-center border-b border-gray-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto px-4"
                >
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                        Our Mission: Scaling Education.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                        We empower institutions to manage complexity, drive engagement, and focus on what matters most: learning.
                    </p>
                </motion.div>
            </section>

            {/* Company Story & Milestones */}
            <section className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center text-primary">
                        Our Journey So Far
                    </h2>
                    
                    <div className="relative">
                        {/* Timeline Connector Line */}
                        <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gray-200 hidden md:block"></div>
                        
                        {milestones.map((item, index) => (
                            <motion.div 
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-150px" }}
                                transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                                className={cn(
                                    "mb-16 flex relative",
                                    index % 2 === 0 ? "justify-start md:pr-40" : "justify-start md:justify-end md:pl-40"
                                )}
                            >
                                {/* Year Display */}
                                <div className={cn("text-5xl font-extrabold tracking-tighter w-full md:w-1/2", index % 2 === 0 ? "md:text-right md:mr-10" : "md:text-left md:ml-10")}>
                                    {item.year}
                                </div>
                                
                                {/* Connector Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-4 hidden md:flex items-center justify-center">
                                    <div className="w-3 h-3 bg-primary rounded-full ring-4 ring-white shadow-md"></div>
                                </div>

                                {/* Description */}
                                <div className="w-full md:w-1/2 text-left bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-soft">
                                    <p className="text-lg text-gray-700 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Focus */}
            <section className="py-20 md:py-24 bg-gray-100">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight mb-16">
                        Our Commitment to Quality
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamFocus.map((focus, index) => (
                            <motion.div
                                key={focus.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-lg"
                            >
                                <focus.icon size={40} strokeWidth={1.5} className="text-primary mx-auto mb-4" />
                                <h3 className="text-xl font-semibold tracking-tight mb-2">{focus.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{focus.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}