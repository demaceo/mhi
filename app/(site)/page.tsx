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
  Brain,
  Shield,
  Globe,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import WhoAreYouForm from '@/components/WhoAreYouForm';

const stats = [
  // Todo: place some of these stats in the About page
  // { value: '2-4x', label: 'ROI for Clients' },
  // { value: '30%', label: 'Faster Time to Market' },
  // { value: '95%', label: 'User Retention Rate' },
  // { value: '24/7', label: 'Support & Monitoring' }
  { value: "$2M+", label: "Client Revenue Generated" },
  { value: "150%", label: "Average User Growth" },
  { value: "8wks", label: "Average MVP Delivery" },
  { value: "100%", label: "On-Time Delivery Rate" },
  // { value: "50+", label: "Successful Launches" },
  // { value: "10+", label: "Industries Served" },
  // { value: "3.5x", label: "Faster Development" },
  // { value: "0", label: "Failed Projects" },
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
      <section className="relative py-20 lg:py-32 overflow-hidden" role="banner">
        {/* Background Elements */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mountain-teal/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mountain-emerald/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        
        <div className="container relative z-10">
          <motion.header
            className="max-w-4xl mx-auto text-center space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mountain-teal/10 to-mountain-emerald/10 rounded-full px-4 py-2 border border-mountain-teal/20">
                <Sparkles className="w-4 h-4 text-mountain-teal" />
                <span className="text-sm font-medium text-brand-700 dark:text-brand-300">App & Website Development</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block">Bring Your</span>
                <span className="block text-gradient">Ideas to Life</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-brand-600 dark:text-brand-300 max-w-3xl mx-auto leading-relaxed">
                Transform your mobile app or website vision into reality. Whether you're starting from scratch 
                or enhancing an existing product, we deliver fast, user-friendly solutions that drive results.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cyber" size="lg" className="group">
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              {/* <Button variant="ghost" size="lg">
                <Link href="/work" className="flex items-center gap-2">
                  View Our Work
                  <Globe className="w-5 h-5" />
                </Link>
              </Button> */}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-brand-600 dark:text-brand-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.header>
        </div>
      </section>

      {/* Who Are You Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-brand-50/30 to-transparent" aria-labelledby="target-audience">
        <div className="container">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <header className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mountain-emerald/10 to-mountain-green/10 rounded-full px-4 py-2 border border-mountain-emerald/20">
                <Users className="w-4 h-4 text-mountain-emerald" />
                <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Find Your Match</span>
              </div>
              
              <h2 id="target-audience" className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-brand-900 dark:text-brand-100">Who Are</span>
                <span className="block text-gradient">You?</span>
              </h2>
              
              <p className="text-xl text-brand-600 dark:text-brand-300 max-w-3xl mx-auto">
                  Whether you&apos;re just starting out or looking to scale, we work with visionaries
                at every stage of their journey.
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Entrepreneurs',
                  description: 'You have a game-changing idea and need to bring it to life quickly.',
                  goals: ['Validate your concept', 'Build an MVP fast', 'Attract investors', 'Scale efficiently'],
                  color: 'from-mountain-teal to-mountain-blue',
                  delay: 0
                },
                {
                  icon: Rocket,
                  title: 'Startup Founders',
                  description: 'You are ready to disrupt an industry with innovative technology.',
                  goals: ['Rapid prototyping', 'Technical co-founder support', 'Product-market fit', 'Growth optimization'],
                  color: 'from-mountain-cyan to-mountain-teal',
                  delay: 0.2
                },
                {
                  icon: Target,
                  title: 'Small Business Owners',
                  description: 'You want to modernize operations and reach more customers online.',
                  goals: ['Professional web presence', 'Process automation', 'Customer engagement', 'Revenue growth'],
                  color: 'from-mountain-emerald to-mountain-green',
                  delay: 0.4
                },
                {
                  icon: Shield,
                  title: 'Investors',
                  description: 'You are backing portfolio companies that need technical execution.',
                  goals: ['Due diligence support', 'Technical roadmaps', 'Portfolio optimization', 'Risk mitigation'],
                  color: 'from-mountain-green to-mountain-forest',
                  delay: 0.6
                },
                {
                  icon: Zap,
                  title: 'Product Managers',
                  description: 'You need to enhance existing products with new features and improvements.',
                  goals: ['Feature development', 'User experience upgrade', 'Performance optimization', 'Technical debt reduction'],
                  color: 'from-orange-500 to-red-500',
                  delay: 0.8
                },
                {
                  icon: Heart,
                  title: 'Visionaries',
                  description: 'You believe technology can make a positive impact on the world.',
                  goals: ['Purpose-driven products', 'Social impact apps', 'Community platforms', 'Sustainable solutions'],
                  color: 'from-purple-500 to-pink-500',
                  delay: 1.0
                }
              ].map((client) => (
                <motion.div
                  key={client.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: client.delay }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                    <div className="p-6 space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <client.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-brand-900 dark:text-brand-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-mountain-teal group-hover:to-mountain-emerald group-hover:bg-clip-text transition-all duration-300">
                            {client.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-brand-600 dark:text-brand-300 leading-relaxed">
                        {client.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-brand-700 dark:text-brand-300 uppercase tracking-wide">
                          Your Goals:
                        </h4>
                        <ul className="space-y-2">
                          {client.goals.map((goal, goalIndex) => (
                            <motion.li
                              key={goal}
                              className="flex items-center space-x-3 text-sm text-brand-600 dark:text-brand-400"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: client.delay + (goalIndex * 0.1) }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-mountain-teal to-mountain-emerald" />
                              <span>{goal}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <motion.div
                        className="pt-4 border-t border-brand-100"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: client.delay + 0.5 }}
                      >
                        <Button variant="ghost" size="sm" className="w-full group-hover:bg-gradient-to-r group-hover:from-mountain-teal/10 group-hover:to-mountain-emerald/10 transition-all duration-300">
                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                            Let&apos;s Talk
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Are You Form Section */}
      <WhoAreYouForm />

      {/* Features Section */}
        <section className="py-12 bg-black/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h2 
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready to Bring Your Idea to Life?
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Whether you have a startup concept, business improvement idea, or investment opportunity, 
                I&apos;ll help you create the perfect digital solution to make it a reality.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
                  >
                    Start Your Project Today
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>      {/* Call to Action Section */}
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
                  <div className="w-16 h-16 bg-gradient-to-br from-mountain-teal to-mountain-emerald rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-brand-100">
                  Ready to Build Something Amazing?
                </h2>
                
                <p className="text-xl text-brand-600 dark:text-brand-300 max-w-2xl mx-auto">
                  Let&apos;s discuss your vision and create an interface that not only meets your needs 
                  but exceeds your users&apos; expectations.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button variant="cyber" size="lg">
                    <Link href="/contact" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Let&apos;s Work Together
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
