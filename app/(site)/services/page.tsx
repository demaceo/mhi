'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Clock,
  TrendingUp,
  Users,
  Quote,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { 
  services, 
  additionalServices, 
  processSteps,
  serviceTestimonials,
} from '@/lib/data/services';

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mountain-teal/10 to-mountain-emerald/10 rounded-full px-3 sm:px-4 py-2 border border-mountain-teal/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-mountain-teal" />
              <span className="text-xs sm:text-sm font-medium text-brand-700 dark:text-brand-300">Full-Service Development</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-brand-900 dark:text-brand-100">Services That</span>
              <span className="block text-gradient">Drive Results</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-brand-600 dark:text-brand-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 dark:text-brand-100">
              Core Services
            </h2>
            <p className="text-lg sm:text-xl text-brand-600 dark:text-brand-300 max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive development solutions tailored to your business needs, delivered with precision and expertise.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:scale-[1.02] transition-all duration-300 border-0 shadow-lg hover:shadow-2xl">
                  <div className="p-6 sm:p-8">
                    <CardHeader className="pb-4 sm:pb-6 px-0">
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        {service.metrics && (
                          <div className="text-right">
                            <div className="text-2xl sm:text-3xl font-bold text-gradient">
                              {service.metrics.value}
                            </div>
                            <div className="text-xs text-brand-600 dark:text-brand-400">
                              {service.metrics.label}
                            </div>
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-xl sm:text-2xl font-bold text-brand-900 dark:text-brand-100 mb-3 text-left">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base text-brand-600 dark:text-brand-300 leading-relaxed text-left">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="px-0 space-y-6">
                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-brand-900 dark:text-brand-100 uppercase tracking-wide">
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                            >
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-mountain-emerald flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base text-brand-700 dark:text-brand-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-brand-900 dark:text-brand-100 uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-brand-100 dark:bg-brand-800 text-brand-700 dark:text-brand-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div className="space-y-3 pt-4 border-t border-brand-200 dark:border-brand-700">
                        <h4 className="text-sm font-semibold text-brand-900 dark:text-brand-100 uppercase tracking-wide">
                          Ideal For
                        </h4>
                        <ul className="space-y-2 text-sm text-brand-600 dark:text-brand-400">
                          {service.useCases.slice(0, 2).map((useCase) => (
                            <li key={useCase} className="flex items-start gap-2">
                              <span className="text-mountain-teal mt-1">•</span>
                              <span>{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button variant="outline" size="sm" className="w-full group/btn">
                          <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Metrics Bar */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-mountain-teal via-mountain-blue to-mountain-emerald">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, value: '50+', label: 'Happy Clients' },
              { icon: TrendingUp, value: '100+', label: 'Projects Delivered' },
              { icon: CheckCircle2, value: '95%', label: 'Client Satisfaction' },
              { icon: Clock, value: '98%', label: 'On-Time Delivery' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <metric.icon className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <div className="text-3xl sm:text-4xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm opacity-90">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-900/20">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center space-y-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-900 dark:text-brand-100">
              Additional Services
            </h2>
            <p className="text-base sm:text-lg text-brand-600 dark:text-brand-300 max-w-2xl mx-auto px-4 sm:px-0">
              Specialized services to enhance, secure, and optimize your digital products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full text-center group hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-mountain-teal/50"
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                >
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <CardTitle className="text-base sm:text-lg font-semibold text-brand-900 dark:text-brand-100">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 pt-3 border-t border-brand-200 dark:border-brand-700"
                        >
                          <div className="text-left space-y-2">
                            {service.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-brand-600 dark:text-brand-400">
                                <CheckCircle2 className="w-3 h-3 text-mountain-emerald flex-shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between text-xs pt-2">
                            <span className="text-brand-500 dark:text-brand-400">Timeline:</span>
                            <span className="font-semibold text-mountain-teal">{service.typicalTimeline}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className="pt-2">
                      <ChevronDown 
                        className={`w-4 h-4 mx-auto text-mountain-teal transition-transform duration-300 ${
                          expandedService === service.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center space-y-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-900 dark:text-brand-100">
              Client Success Stories
            </h2>
            <p className="text-base sm:text-lg text-brand-600 dark:text-brand-300 max-w-2xl mx-auto px-4 sm:px-0">
              Hear from clients who have transformed their businesses with our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {serviceTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-brand-100 dark:border-brand-800 hover:border-mountain-teal/50 transition-colors duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <Quote className="w-8 h-8 text-mountain-teal/30 mb-4" />
                    <p className="text-base sm:text-lg text-brand-700 dark:text-brand-300 leading-relaxed mb-6">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-brand-200 dark:border-brand-700">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mountain-teal to-mountain-emerald flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-brand-900 dark:text-brand-100">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-brand-600 dark:text-brand-400">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-900/20">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="text-center space-y-4 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-900 dark:text-brand-100">
              Our Process
            </h2>
            <p className="text-base sm:text-lg text-brand-600 dark:text-brand-300 max-w-2xl mx-auto px-4 sm:px-0">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-mountain-teal to-mountain-emerald flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                        index === 0 ? 'from-mountain-teal to-mountain-blue' :
                        index === 1 ? 'from-mountain-cyan to-mountain-teal' :
                        index === 2 ? 'from-mountain-green to-mountain-emerald' :
                        'from-mountain-emerald to-mountain-forest'
                      } flex items-center justify-center`}>
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-brand-900 dark:text-brand-100 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-brand-600 dark:text-brand-300 leading-relaxed mb-4">
                        {step.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-brand-200 dark:border-brand-700">
                      <div className="flex items-center gap-2 text-xs text-brand-600 dark:text-brand-400">
                        <Clock className="w-4 h-4 text-mountain-teal" />
                        <span className="font-semibold">{step.timeline}</span>
                      </div>
                      
                      <div className="space-y-1.5">
                        <p className="text-xs font-semibold text-brand-700 dark:text-brand-300 uppercase tracking-wide">
                          Key Activities
                        </p>
                        <ul className="space-y-1">
                          {step.substeps.slice(0, 3).map((substep, idx) => (
                            <li key={idx} className="text-xs text-brand-600 dark:text-brand-400 flex items-start gap-2">
                              <span className="text-mountain-teal mt-0.5">•</span>
                              <span>{substep}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-mountain-teal to-mountain-teal/20 transform -translate-y-1/2 translate-x-2" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-mountain-teal/20 to-mountain-emerald/20" />
              <div className="relative p-6 sm:p-8 lg:p-12 space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Ready to Get Started?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                  Let&apos;s discuss your project and explore how we can bring your vision to life 
                  with exceptional design and engineering.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                    <Link href="/contact" className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 w-full sm:w-auto border border-white/20">
                    <Link href="/work" className="flex items-center gap-2">
                      View Our Work
                      <ExternalLink className="w-4 h-4" />
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
