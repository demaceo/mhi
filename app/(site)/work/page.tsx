'use client';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { caseStudies } from '@/lib/data/case-studies';

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

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 rounded-full px-4 py-2 border border-cyber-blue/20">
              <Sparkles className="w-4 h-4 text-cyber-blue" />
              <span className="text-sm font-medium text-brand-700">Featured Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-brand-900">Our</span>
              <span className="block text-gradient">Work</span>
            </h1>
            
            <p className="text-xl text-brand-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative projects that demonstrate our commitment to 
              creating meaningful digital experiences that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                variants={itemVariants}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 overflow-hidden">
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                          <div className="w-6 h-6 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* View Project Button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button variant="gradient" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {study.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-brand-900 group-hover:text-cyber-blue transition-colors duration-300">
                      {study.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pb-6">
                    <CardDescription className="text-base leading-relaxed mb-6">
                      {study.summary}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/work/${study.slug}`}
                        className="inline-flex items-center gap-2 text-cyber-blue hover:text-cyber-purple font-medium transition-colors group/link"
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-lg bg-brand-100 hover:bg-cyber-blue hover:text-white flex items-center justify-center transition-all duration-200">
                          <Github className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-brand-100 hover:bg-cyber-purple hover:text-white flex items-center justify-center transition-all duration-200">
                          <Globe className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container">
          <motion.div
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-brand-900">
              Technologies We Love
            </h2>
            <p className="text-lg text-brand-600 max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver exceptional results.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-20" />
              <div className="relative p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'D3.js',
                    'Figma', 'Tailwind', 'PostgreSQL', 'AWS', 'Vercel', 'GraphQL'
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="text-center p-4 rounded-xl bg-white/50 hover:bg-gradient-to-br hover:from-cyber-blue/10 hover:to-cyber-purple/10 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-brand-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-cyber-blue group-hover:to-cyber-purple transition-all duration-300">
                        <div className="w-6 h-6 bg-brand-600 rounded group-hover:bg-white transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-medium text-brand-700 group-hover:text-cyber-blue transition-colors duration-300">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-800 border-0 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20" />
              <div className="relative p-8 lg:p-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Create Something Amazing?
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Let's collaborate to bring your vision to life with innovative design 
                  and cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button variant="gradient" size="lg">
                    <Link href="/contact" className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                    <Link href="/services">
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
