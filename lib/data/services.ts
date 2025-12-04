import {
    Code2,
    BarChart3,
    Globe,
    Zap,
    Palette,
    Server,
    Shield,
    Smartphone,
    Cloud,
    GitBranch,
    FileCode,
    Layers,
    type LucideIcon,
} from 'lucide-react';

export interface Service {
    id: string;
    slug: string;
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    useCases: string[];
    deliverables: string[];
    color: string; // Tailwind gradient classes
    caseStudySlug?: string;
    metrics?: {
        label: string;
        value: string;
    };
}

export interface AdditionalService {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    details: string[];
    typicalTimeline: string;
    color: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    substeps: string[];
    timeline: string;
    deliverables: string[];
    icon: LucideIcon;
    color: string;
}

export interface ServiceTestimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    serviceId: string;
}

// Main Services
export const services: Service[] = [
    {
        id: 'ui-engineering',
        slug: 'ui-engineering',
        icon: Code2,
        title: 'Product & UI Engineering',
        description:
            'Transform ideas into production-ready interfaces with scalable architectures and modern frameworks that users love.',
        features: [
            'Component-driven architecture with design systems',
            'Performance optimization and Core Web Vitals tuning',
            'Accessibility compliance (WCAG 2.1 AA)',
            'Cross-browser compatibility testing',
            'Progressive enhancement strategies',
            'State management and data flow architecture',
            'Responsive design implementation',
            'Animation and micro-interaction design',
        ],
        technologies: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Radix UI',
            'Zustand',
            'React Query',
        ],
        useCases: [
            'Enterprise SaaS platforms requiring complex UI states',
            'E-commerce sites with dynamic product catalogs',
            'Content management interfaces for editorial teams',
            'Customer portals with personalized dashboards',
        ],
        deliverables: [
            'Production-ready component library',
            'Comprehensive design system documentation',
            'Performance audit report and optimizations',
            'Automated testing suite (unit + E2E)',
            'Deployment and CI/CD pipeline setup',
        ],
        color: 'from-mountain-teal to-mountain-blue',
        metrics: {
            label: 'Avg Performance Score',
            value: '95+',
        },
    },
    {
        id: 'data-visualization',
        slug: 'data-visualization',
        icon: BarChart3,
        title: 'Data Visualization & Analytics',
        description:
            'Turn complex datasets into compelling visual stories that drive insights and enable data-driven decision making.',
        features: [
            'Custom interactive charts and dashboards',
            'Real-time data streaming and updates',
            'Multi-dimensional data exploration interfaces',
            'Export and sharing capabilities (PDF, PNG, CSV)',
            'Responsive chart rendering for all devices',
            'Color-blind friendly palette selection',
            'Drill-down and filtering interactions',
            'Data annotation and storytelling features',
        ],
        technologies: [
            'D3.js',
            'Recharts',
            'Chart.js',
            'Apache ECharts',
            'Plotly',
            'WebGL',
            'Canvas API',
            'WebSockets',
        ],
        useCases: [
            'Business intelligence dashboards for executives',
            'Financial reporting and market analysis tools',
            'Healthcare patient outcome tracking systems',
            'IoT sensor data monitoring interfaces',
        ],
        deliverables: [
            'Interactive dashboard application',
            'Custom visualization component library',
            'Data pipeline integration documentation',
            'User interaction analytics setup',
            'Performance benchmarks and optimization guide',
        ],
        color: 'from-mountain-cyan to-mountain-teal',
        caseStudySlug: 'pinpoint-civic-engagement',
        metrics: {
            label: 'Data Points Handled',
            value: '10M+',
        },
    },
    {
        id: 'business-websites',
        slug: 'business-websites',
        icon: Globe,
        title: 'Business Website Development',
        description:
            'Professional websites that establish credibility, convert visitors, and grow with your business needs.',
        features: [
            'SEO-optimized architecture and content strategy',
            'Content management system integration',
            'Contact forms and lead capture systems',
            'Email marketing integration (Mailchimp, SendGrid)',
            'Analytics and conversion tracking setup',
            'Blog and content publication workflows',
            'Fast page load times (under 2s)',
            'Mobile-first responsive design',
        ],
        technologies: [
            'Next.js',
            'WordPress',
            'Sanity CMS',
            'Contentful',
            'Vercel',
            'Google Analytics',
            'Schema.org',
            'Resend',
        ],
        useCases: [
            'Professional services firms needing credibility',
            'Startups launching with a strong web presence',
            'Small businesses expanding online',
            'Non-profits seeking donor engagement',
        ],
        deliverables: [
            'Fully deployed production website',
            'CMS training and documentation',
            'SEO configuration and sitemap setup',
            'Analytics dashboard configuration',
            'Content editing guide and brand guidelines',
        ],
        color: 'from-mountain-emerald to-mountain-green',
        metrics: {
            label: 'Avg SEO Score',
            value: '90+',
        },
    },
    {
        id: 'mvp-development',
        slug: 'mvp-development',
        icon: Zap,
        title: 'MVP Development & Validation',
        description:
            'Rapidly validate product ideas with functional prototypes that attract users and secure funding.',
        features: [
            'Rapid prototyping with production-grade code',
            'User authentication and authorization',
            'Database design and API development',
            'Payment integration (Stripe, PayPal)',
            'User analytics and behavior tracking',
            'Iterative development with weekly sprints',
            'Technical debt management strategy',
            'Scalability planning and architecture',
        ],
        technologies: [
            'Next.js',
            'Supabase',
            'Prisma',
            'PostgreSQL',
            'Stripe',
            'NextAuth',
            'Vercel',
            'Sentry',
        ],
        useCases: [
            'Startup founders testing product-market fit',
            'Enterprises exploring new business models',
            'Agencies pitching concepts to clients',
            'Product teams validating feature ideas',
        ],
        deliverables: [
            'Functional MVP application deployed',
            'User feedback collection system',
            'Core feature set implementation',
            'Authentication and payment systems',
            'Growth and scaling recommendations',
        ],
        color: 'from-mountain-green to-mountain-forest',
        metrics: {
            label: 'Avg Time to Launch',
            value: '6-8 weeks',
        },
    },
];

// Additional Services
export const additionalServices: AdditionalService[] = [
    {
        id: 'design-systems',
        icon: Palette,
        title: 'Design Systems',
        description: 'Create cohesive, scalable design languages that unify your products.',
        details: [
            'Component library development with Storybook',
            'Design token management and theming',
            'Documentation site and usage guidelines',
            'Figma to code workflow optimization',
            'Brand consistency audits and implementation',
        ],
        typicalTimeline: '4-6 weeks',
        color: 'from-mountain-teal to-mountain-cyan',
    },
    {
        id: 'api-development',
        icon: Server,
        title: 'API Development',
        description: 'Build robust, documented APIs that power your applications reliably.',
        details: [
            'RESTful or GraphQL API architecture',
            'OpenAPI/Swagger documentation generation',
            'Authentication and rate limiting',
            'Webhook and event system design',
            'API versioning and deprecation strategy',
        ],
        typicalTimeline: '3-5 weeks',
        color: 'from-mountain-blue to-mountain-teal',
    },
    {
        id: 'security-audits',
        icon: Shield,
        title: 'Security Audits',
        description: 'Identify vulnerabilities and implement security best practices.',
        details: [
            'OWASP Top 10 vulnerability assessment',
            'Dependency and package security scanning',
            'Authentication and authorization review',
            'Data encryption and privacy compliance',
            'Security hardening recommendations',
        ],
        typicalTimeline: '1-2 weeks',
        color: 'from-mountain-forest to-mountain-emerald',
    },
    {
        id: 'mobile-first',
        icon: Smartphone,
        title: 'Mobile-First Design',
        description: 'Ensure perfect experiences across all devices and screen sizes.',
        details: [
            'Responsive breakpoint strategy',
            'Touch-optimized interaction patterns',
            'Performance optimization for mobile networks',
            'Progressive web app (PWA) implementation',
            'App-like experience on mobile browsers',
        ],
        typicalTimeline: '2-3 weeks',
        color: 'from-mountain-cyan to-mountain-blue',
    },
    {
        id: 'cloud-deployment',
        icon: Cloud,
        title: 'Cloud Deployment & DevOps',
        description: 'Streamline deployments with modern infrastructure and CI/CD.',
        details: [
            'Infrastructure as code with Terraform/Pulumi',
            'CI/CD pipeline setup (GitHub Actions, CircleCI)',
            'Container orchestration with Docker/Kubernetes',
            'Monitoring and logging setup (Datadog, Sentry)',
            'Auto-scaling and cost optimization',
        ],
        typicalTimeline: '2-4 weeks',
        color: 'from-mountain-green to-mountain-teal',
    },
    {
        id: 'code-migration',
        icon: GitBranch,
        title: 'Code Migration & Modernization',
        description: 'Upgrade legacy codebases to modern frameworks and patterns.',
        details: [
            'Framework migration planning and execution',
            'Dependency upgrade and compatibility fixes',
            'Performance profiling and optimization',
            'Code quality improvement and refactoring',
            'Technical debt reduction strategy',
        ],
        typicalTimeline: '4-8 weeks',
        color: 'from-mountain-emerald to-mountain-green',
    },
    {
        id: 'technical-consulting',
        icon: FileCode,
        title: 'Technical Consulting',
        description: 'Get expert guidance on architecture, technology choices, and strategy.',
        details: [
            'Technology stack evaluation and recommendations',
            'Architecture review and optimization',
            'Code review and best practices coaching',
            'Team training and knowledge transfer',
            'Long-term technical roadmap planning',
        ],
        typicalTimeline: 'Ongoing',
        color: 'from-mountain-blue to-mountain-forest',
    },
    {
        id: 'integration',
        icon: Layers,
        title: 'Third-Party Integrations',
        description: 'Connect your application to the tools and services you rely on.',
        details: [
            'CRM integration (Salesforce, HubSpot)',
            'Payment gateway implementation',
            'Email service provider setup',
            'Analytics and tracking integration',
            'Custom API connector development',
        ],
        typicalTimeline: '1-3 weeks',
        color: 'from-mountain-teal to-mountain-emerald',
    },
];

// Process Steps
export const processSteps: ProcessStep[] = [
    {
        step: '01',
        title: 'Discovery & Strategy',
        description:
            'We dive deep into your business goals, user needs, and technical requirements to create a clear roadmap.',
        substeps: [
            'Stakeholder interviews and requirements gathering',
            'Competitive analysis and market research',
            'User persona development and journey mapping',
            'Technical feasibility assessment',
            'Project scope and timeline definition',
        ],
        timeline: '1-2 weeks',
        deliverables: [
            'Project brief and requirements document',
            'User research findings report',
            'Technical architecture proposal',
            'Detailed project timeline and milestones',
        ],
        icon: FileCode,
        color: 'from-mountain-teal to-mountain-blue',
    },
    {
        step: '02',
        title: 'Design & Prototyping',
        description:
            'Transform requirements into interactive prototypes that validate concepts before development begins.',
        substeps: [
            'Wireframing and information architecture',
            'Visual design and brand application',
            'Interactive prototype development',
            'Usability testing with target users',
            'Design system component definition',
        ],
        timeline: '2-3 weeks',
        deliverables: [
            'High-fidelity interactive prototypes',
            'Design system and component library',
            'Usability testing report',
            'Approved final designs and specifications',
        ],
        icon: Palette,
        color: 'from-mountain-cyan to-mountain-teal',
    },
    {
        step: '03',
        title: 'Development & Testing',
        description:
            'Build robust, scalable solutions with continuous testing and quality assurance throughout.',
        substeps: [
            'Sprint-based iterative development',
            'Code review and quality assurance',
            'Unit, integration, and E2E testing',
            'Performance optimization and monitoring',
            'Security scanning and vulnerability fixes',
        ],
        timeline: '4-8 weeks',
        deliverables: [
            'Fully functional application code',
            'Automated test suite',
            'Performance and security audit reports',
            'Technical documentation',
        ],
        icon: Code2,
        color: 'from-mountain-green to-mountain-emerald',
    },
    {
        step: '04',
        title: 'Launch & Support',
        description:
            'Deploy with confidence and ensure smooth operations with ongoing monitoring and support.',
        substeps: [
            'Production deployment and DNS configuration',
            'Monitoring and analytics setup',
            'User training and documentation',
            'Post-launch bug fixes and optimizations',
            'Ongoing maintenance and feature enhancements',
        ],
        timeline: '1-2 weeks + ongoing',
        deliverables: [
            'Deployed production application',
            'Monitoring dashboards and alerts',
            'User and admin documentation',
            'Support and maintenance plan',
        ],
        icon: Zap,
        color: 'from-mountain-emerald to-mountain-forest',
    },
];

// Testimonials
export const serviceTestimonials: ServiceTestimonial[] = [
    {
        quote:
            "The data visualization dashboard transformed how our team makes decisions. What used to take hours of spreadsheet analysis now happens in seconds.",
        author: 'Sarah Chen',
        role: 'VP of Analytics',
        company: 'TechCorp',
        serviceId: 'data-visualization',
    },
    {
        quote:
            'Mountain Heights delivered our MVP in 6 weeks, helping us secure seed funding. The code quality was exceptional for such a rapid timeline.',
        author: 'Marcus Johnson',
        role: 'Founder & CEO',
        company: 'StartupCo',
        serviceId: 'mvp-development',
    },
    {
        quote:
            'Our new website tripled our lead generation in the first quarter. The SEO optimization and conversion-focused design really paid off.',
        author: 'Emily Rodriguez',
        role: 'Marketing Director',
        company: 'Professional Services LLC',
        serviceId: 'business-websites',
    },
    {
        quote:
            'The component library they built has accelerated our development velocity by 40%. Every new feature ships faster and more consistently.',
        author: 'David Park',
        role: 'Engineering Manager',
        company: 'Enterprise Solutions Inc',
        serviceId: 'ui-engineering',
    },
];


