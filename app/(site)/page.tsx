'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Rocket, 
  Target, 
  Users, 
  Code2, 
  Palette,
  Brain,
  Shield,
  Globe,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

const features = [
  {
    icon: Code2,
    title: 'Modern Development',
    description: 'React, TypeScript, Next.js, and cutting-edge tools for blazing-fast applications.',
    color: 'from-cyber-blue to-blue-600'
  },
  {
    icon: Palette,
    title: 'Design Excellence',
    description: 'Beautiful, accessible interfaces that users love and stakeholders celebrate.',
    color: 'from-cyber-purple to-purple-600'
  },
  {
    icon: Brain,
    title: 'Smart Solutions',
    description: 'AI-powered insights and data visualization that turns complexity into clarity.',
    color: 'from-cyber-pink to-pink-600'
  },
  {
    icon: Shield,
    title: 'Secure & Scalable',
    description: 'Enterprise-grade security with architecture that grows with your business.',
    color: 'from-cyber-green to-green-600'
  }
];

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '5+', label: 'Years Experience' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        
        <div className="container relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-full px-4 py-2 border border-cyber-blue/20">
                <Sparkles className="w-4 h-4 text-cyber-blue" />
                <span className="text-sm font-medium text-brand-700">Design‑Forward Software Engineering</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block">Interfaces</span>
                <span className="block text-gradient">That Matter</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-600 max-w-3xl mx-auto leading-relaxed">
                We partner with visionary teams to create fast, accessible, and delightful digital experiences — 
                from civic tech and data visualization to developer tooling that makes a difference.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cyber" size="lg" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button variant="ghost" size="lg">
                <Link href="/work" className="flex items-center gap-2">
                  View Our Work
                  <Globe className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-brand-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-brand-900">Why Choose</span>
              <span className="text-gradient"> Mile High Interface</span>
            </h2>
            <p className="text-xl text-brand-600 max-w-3xl mx-auto">
              We combine technical excellence with design thinking to deliver solutions that don't just work — they inspire.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="cyber" className="h-full group hover:scale-105 transition-transform duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-brand-900">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="gradient" className="relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 cyber-grid opacity-20" />
              
              <div className="relative z-10 p-8 lg:p-12 space-y-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-brand-900">
                  Ready to Build Something Amazing?
                </h2>
                
                <p className="text-xl text-brand-600 max-w-2xl mx-auto">
                  Let's discuss your vision and create an interface that not only meets your needs 
                  but exceeds your users' expectations.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button variant="cyber" size="lg">
                    <Link href="/contact" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Let's Work Together
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg">
                    <Link href="/services" className="flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Explore Services
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
