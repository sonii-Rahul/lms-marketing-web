import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | LMS Portal Redirect',
    description: 'Redirecting you to the secure login portal for your institutional LMS SaaS account.',
};

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// This page acts as a bridge to the main LMS application login portal
export default function LoginPage() {
    const lmsLoginUrl = "https://app.lmssaas.com/login"; // Placeholder for actual LMS login URL
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl text-center border border-gray-100">
                <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">
                    Welcome Back
                </h1>
                <p className="text-gray-500 mb-8">
                    You are now being redirected to your institution&apos;s secure login portal.
                </p>

                <Link 
                    href={lmsLoginUrl}
                    className="bg-primary text-white text-lg px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group"
                >
                    Continue to Login Portal
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                    New user? <Link href="/signup" className="text-primary hover:underline">Sign up here</Link>.
                </p>
            </div>
        </div>
    );
}