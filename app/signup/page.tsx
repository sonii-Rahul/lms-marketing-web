import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign Up | Institutional Account Creation',
    description: 'Redirecting you to the partner portal to begin the setup for your new institutional LMS SaaS account.',
};

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// This page acts as a bridge to the main LMS application sign-up portal
export default function SignUpPage() {
    const lmsSignUpUrl = "https://app.lmssaas.com/signup"; // Placeholder for actual LMS sign-up URL
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl text-center border border-gray-100">
                <h1 className="text-3xl font-bold tracking-tight mb-4 text-gray-900">
                    Join Our Platform
                </h1>
                <p className="text-gray-500 mb-8">
                    You are now being redirected to our partner portal to set up your institutional account.
                </p>

                <Link 
                    href={lmsSignUpUrl}
                    className="bg-primary text-white text-lg px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center group"
                >
                    Start Institution Setup
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                    Already have an account? <Link href="/login" className="text-primary hover:underline">Log in here</Link>.
                </p>
            </div>
        </div>
    );
}