'use client';
import { motion } from 'framer-motion';
import { 
  Code2, 
  BarChart3, 
  Globe, 
  Zap, 
  Palette, 
  Database, 
  Shield, 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

const services = [
  {
    icon: Code2,
    title: 'Product & UI Engineering',
    description: 'Full-stack development with React, Next.js, TypeScript, and modern tooling.',
    features: ['Component Libraries', 'Performance Optimization', 'Accessibility Standards', 'Testing & CI/CD'],
    color: 'from-cyber-blue to-blue-600',
    gradient: 'from-cyber-blue/10 to-blue-600/10'
  },
  {
    icon: BarChart3,
    title: 'Data Visualization',
    description: 'Interactive dashboards and story-driven visualizations that make data compelling.',
    features: ['D3.js Implementations', 'Interactive Charts', 'Real-time Dashboards', 'Custom Visualizations'],
    color: 'from-cyber-purple to-purple-600',
    gradient: 'from-cyber-purple/10 to-purple-600/10'
  },
  {
    icon: Globe,
    title: 'Civic & Public-Interest Tech',
    description: 'Technology solutions that serve the public good and create positive social impact.',
    features: ['Open Data APIs', 'Advocacy Tools', 'Privacy-First Architecture', 'Community Platforms'],
    color: 'from-cyber-green to-green-600',
    gradient: 'from-cyber-green/10 to-green-600/10'
  },
  {
    icon: Zap,
    title: 'Prototyping & Experiments',
    description: 'Rapid concept validation with interactive prototypes and user experience research.',
    features: ['Concept Validation', 'UX Research Support', 'Interactive Prototypes', 'Micro-interactions'],
    color: 'from-cyber-pink to-pink-600',
    gradient: 'from-cyber-pink/10 to-pink-600/10'
  }
];

const additionalServices = [
  {
    icon: Palette,
    title: 'Design Systems',
    description: 'Scalable design systems that ensure consistency across your product ecosystem.',
  },
  {
    icon: Database,
    title: 'API Development',
    description: 'Robust, well-documented APIs that power seamless integrations.',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive security reviews to protect your users and data.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Responsive interfaces that work beautifully on every device.',
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your goals, users, and technical requirements to create a solid foundation.',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Interactive prototypes and user testing ensure we\'re building the right solution.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'Agile development with continuous testing and quality assurance throughout.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'Smooth deployment with ongoing support and optimization for long-term success.',
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-full px-3 sm:px-4 py-2 border border-cyber-blue/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyber-blue" />
              <span className="text-xs sm:text-sm font-medium text-brand-700">Full-Service Development</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-brand-900">Services That</span>
              <span className="block text-gradient">Drive Results</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-brand-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              From concept to deployment, we offer comprehensive solutions that transform ideas into 
              exceptional digital experiences your users will love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center space-y-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900">
              Core Services
            </h2>
            <p className="text-lg sm:text-xl text-brand-600 max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive solutions tailored to your unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:scale-105 transition-all duration-300 border-0 shadow-lg">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl`} />
                  <div className="relative p-6 sm:p-8">
                    <CardHeader className="pb-4 sm:pb-6 px-0">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-bold text-brand-900 mb-3 text-left">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base text-brand-600 leading-relaxed text-left">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="px-0">
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                          >
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-green flex-shrink-0" />
                            <span className="text-sm sm:text-base text-brand-700 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center space-y-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-900">
              Additional Expertise
            </h2>
            <p className="text-base sm:text-lg text-brand-600 max-w-2xl mx-auto px-4 sm:px-0">
              Specialized services to enhance and optimize your digital products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center group hover:scale-105 transition-transform duration-300">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-cyber-blue group-hover:to-cyber-purple transition-all duration-300">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-base sm:text-lg font-semibold text-brand-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center space-y-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-900">
              Our Process
            </h2>
            <p className="text-base sm:text-lg text-brand-600 max-w-2xl mx-auto px-4 sm:px-0">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-white font-bold text-base sm:text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-900 px-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-600 text-sm sm:text-base leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-7 sm:top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyber-blue/30 to-transparent -translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-800 border-0 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20" />
              <div className="relative p-6 sm:p-8 lg:p-12 space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Ready to Get Started?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                  Let's discuss your project and explore how we can bring your vision to life 
                  with exceptional design and engineering.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                    <Link href="/contact" className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 w-full sm:w-auto">
                    <Link href="/work">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
