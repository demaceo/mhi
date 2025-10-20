'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import type { CaseStudy } from '@/lib/data/case-studies';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyContent({ caseStudy: cs }: CaseStudyContentProps) {
  const sections = [
    {
      icon: Target,
      title: 'Problem',
      content: 'Terse description of the problem statement and constraints. We identified key pain points in the existing user experience and technical limitations that were preventing optimal engagement.',
      color: 'from-cyber-blue to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Approach',
      content: 'Key decisions, architecture, and design tradeoffs. Our solution focused on user-centered design principles while implementing modern technical architecture for scalability and performance.',
      color: 'from-cyber-purple to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Outcome',
      content: 'Measurable results, screenshots, and reflections. The project delivered significant improvements in user engagement, performance metrics, and overall satisfaction scores.',
      color: 'from-cyber-green to-green-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Back Navigation */}
      <section className="py-6 sm:py-8">
        <div className="container px-4 sm:px-6">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-cyber-blue transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back to Work</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {cs.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 text-cyber-blue rounded-full text-xs sm:text-sm font-medium border border-cyber-blue/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-900">
                {cs.title}
              </h1>

              {/* Summary */}
              <p className="text-lg sm:text-xl text-brand-600 leading-relaxed max-w-3xl">
                {cs.summary}
              </p>

              {/* Project Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <Button variant="cyber" size="lg" className="group w-full sm:w-auto">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Live Project
                  </Button>
                  <Button variant="outline" size="lg" className="group w-full sm:w-auto">
                    <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Source Code
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {cs.cover && (
        <section className="py-8 sm:py-12">
          <div className="container px-4 sm:px-6">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden border-0 shadow-2xl">
                <div className="relative aspect-[16/10] bg-gradient-to-br from-brand-900 to-brand-800">
                  <div className="absolute inset-0 cyber-grid opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-3xl flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl flex items-center justify-center">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Project Info Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4 sm:p-6">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-blue mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-900 mb-1 text-sm sm:text-base">Timeline</h3>
                  <p className="text-xs sm:text-sm text-brand-600">3 months</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4 sm:p-6">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-purple mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-900 mb-1 text-sm sm:text-base">Team</h3>
                  <p className="text-xs sm:text-sm text-brand-600">2 developers</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4 sm:p-6">
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-green mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-900 mb-1 text-sm sm:text-base">Platform</h3>
                  <p className="text-xs sm:text-sm text-brand-600">Web & Mobile</p>
                </CardContent>
              </Card>
              
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4 sm:p-6">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-pink mx-auto mb-3" />
                  <h3 className="font-semibold text-brand-900 mb-1 text-sm sm:text-base">Impact</h3>
                  <p className="text-xs sm:text-sm text-brand-600">+150% engagement</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Sections */}
            <div className="space-y-8 sm:space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-transparent" />
                    <CardContent className="relative p-6 sm:p-8 lg:p-12">
                      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                        <div className="flex-shrink-0">
                          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                            <section.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">
                            {section.title}
                          </h2>
                          <div className="prose prose-base sm:prose-lg text-brand-600 max-w-none">
                            <p className="leading-relaxed">
                              {section.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-brand-50/50 to-transparent">
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
                  Ready to Start Your Project?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                  Let's create something amazing together. Get in touch to discuss your next project.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                    <Link href="/contact" className="flex items-center gap-2">
                      Start Your Project
                      <ArrowLeft className="w-5 h-5 rotate-180" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 w-full sm:w-auto">
                    <Link href="/work">
                      View More Work
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