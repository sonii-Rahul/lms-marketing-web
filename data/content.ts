import { Zap, Heart, ShieldCheck, CalendarCheck, LayoutDashboard, CreditCard, Bell, Users2, BookOpenCheck, BarChart3, PlaySquare } from 'lucide-react';

// --- Global Content ---
export const AppContent = {
    tagline: "Future-Proof Your Campus",
    
    // --- Hero Section ---
    hero: {
        headline: "The AI-Powered Campus OS. Built for Academic Scale.",
        subheadline: "Streamline administration, elevate student engagement, and gain predictive insights with the world’s most advanced multi-tenant LMS solution.",
        ctaPrimary: "Request Live Demo",
        ctaSecondary: "View Core Features",
    },

    // --- Product Overview Section ---
    overview: {
        title: "Unify Your Institution with Intelligent Automation.",
        pillars: [
            "AI Automation",
            "Multi-Tenant Control",
            "Student Lifecycle Management",
            "Personalization at Scale",
            "Real-Time Analytics"
        ],
        description: "The era of siloed school administration is over. LMS SaaS acts as the single operating system for your entire campus network. Our platform leverages enterprise-grade architecture and proprietary AI to manage all aspects of the student lifecycle—from admissions and financial reconciliation to personalized learning paths and final assessments."
    },

    // --- Features Grid Section ---
    features: [
        { 
            title: "Optimized Scheduling", 
            icon: CalendarCheck, 
            description: "Automatically generate complex, conflict-free class schedules and resource allocations in minutes, not weeks." 
        },
        { 
            title: "Intelligent Content Delivery", 
            icon: PlaySquare, 
            description: "Our proprietary video player remembers student progress, offers one-click 10s forward/backward skipping for review, and automatically generates summaries." 
        },
        { 
            title: "Predictive Success Metrics", 
            icon: BarChart3, 
            description: "Utilize machine learning to forecast student performance, identifying trends and generating actionable intervention plans for faculty." 
        },
        { 
            title: "Unified Instructor Control", 
            icon: Users2, 
            description: "Manage faculty workload, assign courses to specific batches, and track instructor efficacy all from one clean interface." 
        },
        { 
            title: "End-to-End Curriculum Control", 
            icon: BookOpenCheck, 
            description: "Design courses, deploy randomized exam modules with built-in proctoring tools, and manage digital assignment submissions." 
        },
        { 
            title: "Global Operational View", 
            icon: LayoutDashboard, 
            description: "A single-pane-of-glass dashboard for group administrators to monitor financial health and regulatory compliance across all managed institutions." 
        },
        { 
            title: "Automated Financial Flow", 
            icon: CreditCard, 
            description: "Integrate with primary Indian payment gateways (Razorpay, Stripe). Automate fee collection, generate digital receipts, and manage late payment alerts." 
        },
        { 
            title: "Granular Security Control", 
            icon: ShieldCheck, 
            description: "Ensure absolute data integrity with fine-grained permissions (RBAC) across student, parent, instructor, and administrative roles." 
        },
    ],

    // --- Pricing Section ---
    pricing: [
        {
            name: "Starter Plan",
            students: "Up to 300 students",
            priceMonthly: 2499,
            priceYearly: 24990,
            support: "Email Support (24hr SLA)",
            features: [ /* list features */ ]
        },
        // ... (Remaining pricing data for Growth/Enterprise)
    ],

    // --- Testimonials Section ---
    testimonials: [
        { role: "Principal", name: "Dr. Aarthi Rao", quote: "LMS SaaS provided the secure, unified control we desperately needed. Enrollment is now seamless and our administrative team saves a full day of work every week." },
        { role: "Dean of Academics", name: "Prof. Vikram Sharma", quote: "The AI analytics module is invaluable. We can proactively identify struggling students and offer immediate faculty support, directly improving our retention rates." },
        { role: "IT Head", name: "Ms. Priyanka Patel", quote: "The multi-tenant architecture made rolling out to our 14 campuses frictionless. Setup was fast, security is top-tier, and the uptime is rock solid." },
        { role: "Teacher Coordinator", name: "Mr. Rohan Verma", quote: "Finally, an LMS that doesn’t fight the user. The mobile experience is smooth, and grading assignments is faster thanks to the integrated tools." },
    ],

    // --- About Us Section ---
    about: {
        mission: "We are committed to revolutionizing education management in India by delivering high-reliability, secure, and intuitive software solutions, grounded in innovation and customer obsession. Our goal is to empower educators to focus on teaching, not administration.",
        focus: [
            { title: "Engineering Excellence", icon: Zap },
            { title: "User-Centric Design", icon: Heart },
            { title: "Data Security", icon: ShieldCheck },
        ]
    },
    
    // --- Why Choose Us Section ---
    chooseUs: [
        "World-Class UI/UX",
        "Enterprise-Grade Security",
        "99.95% Uptime Guarantee",
        "AI-Driven Efficiency",
        "Rapid Deployment (<24 hours)",
        "Trusted by Institutions"
    ]
};
