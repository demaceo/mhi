"use client";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import DiscoveryForm from "./components/DiscoveryForm";

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
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        role="banner"
      >
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
                <span className="text-sm font-medium text-brand-700 dark:text-brand-300">
                  App & Website Development
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block">Bring Your</span>
                <span className="block text-gradient">Ideas to Life</span>
              </h1>

              <p className="text-xl md:text-2xl text-brand-600 dark:text-brand-300 max-w-3xl mx-auto leading-relaxed">
                Transform your mobile app or website vision into reality.
                Whether you're starting from scratch or enhancing an existing
                product, we deliver fast, user-friendly solutions that drive
                results.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
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
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
            >
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
      {/* Discovery Form Section */}
      <DiscoveryForm />
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
              Whether you have a startup concept, business improvement idea, or
              investment opportunity, I&apos;ll help you create the perfect
              digital solution to make it a reality.
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
      </section>{" "}
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
                  <div className="w-16 h-16 bg-gradient-to-br from-mountain-teal to-mountain-emerald rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-brand-900 dark:text-brand-100">
                  Ready to Build Something Amazing?
                </h2>

                <p className="text-xl text-brand-600 dark:text-brand-300 max-w-2xl mx-auto">
                  Let&apos;s discuss your vision and create an interface that
                  not only meets your needs but exceeds your users&apos;
                  expectations.
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
