import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us & Request Demo | LMS SaaS',
    description: 'Get in touch to schedule a personalized demo, discuss enterprise integrations, or inquire about technical support for our AI-powered LMS platform.',
};

"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';

// Simple dummy form logic for placeholder
const initialFormState = { name: '', email: '', message: '', topic: '' };

export default function ContactPage() {
    const [form, setForm] = useState(initialFormState);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        // --- Placeholder API Call ---
        // In a production app, this would hit your API endpoint
        setTimeout(() => {
            if (form.topic === 'demo') {
                setStatus('success');
            } else {
                setStatus('error');
            }
            // Reset form after submission (or successful redirect)
            // setForm(initialFormState);
        }, 2000);
    };

    return (
        <div className="min-h-screen">
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4">
                            Let&apos;s Build the Future of Learning.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto">
                            Get in touch to schedule a demo, discuss enterprise integrations, or explore a partnership.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Contact Form (Left Side) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl"
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-8">
                                Request a Demo or Get Support
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                                        I am interested in...
                                    </label>
                                    <select 
                                        id="topic"
                                        name="topic"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary transition-colors"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="demo">Schedule a Demo</option>
                                        <option value="support">Technical Support</option>
                                        <option value="billing">Billing Inquiry</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary transition-colors"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary transition-colors"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-primary focus:border-primary transition-colors resize-none"
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className={cn(
                                        "w-full py-3 rounded-xl text-lg font-semibold transition-colors flex items-center justify-center",
                                        status === 'submitting' ? 'bg-gray-400 text-gray-700' : 'bg-primary text-white hover:bg-blue-600'
                                    )}
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                                    {status === 'success' && <Check size={20} className="ml-2" />}
                                    {status === 'error' && <X size={20} className="ml-2" />}
                                    {status === 'idle' && <ArrowRight size={20} className="ml-2" />}
                                </button>

                                {status === 'success' && (
                                    <p className="text-center text-lg text-green-600 font-medium mt-4">
                                        ✅ Thank you! Your demo request has been sent.
                                    </p>
                                )}
                                {status === 'error' && (
                                    <p className="text-center text-lg text-red-600 font-medium mt-4">
                                        ❌ An error occurred. Please check your inputs or email us directly.
                                    </p>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Info (Right Side) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-10"
                        >
                            <h2 className="text-3xl font-bold tracking-tight mb-4">
                                Connect with Us
                            </h2>

                            {/* Email */}
                            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-100 shadow-soft">
                                <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Email Support</h3>
                                    <p className="text-gray-600">contact@lmssaaS.com</p>
                                </div>
                            </div>
                            
                            {/* Phone */}
                            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-100 shadow-soft">
                                <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Sales & Inquiries</h3>
                                    <p className="text-gray-600">+91-98765-43210</p>
                                </div>
                            </div>

                            {/* Office Location */}
                            <div className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-100 shadow-soft">
                                <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">Global Headquarters</h3>
                                    <p className="text-gray-600">123 Tech Tower, Phase I, Bengaluru, Karnataka, India</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}