'use client';
import { motion } from 'framer-motion';
import { 
  Target, 
  Heart, 
  Users, 
  Award, 
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Code2,
  Palette
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

const principles = [
  {
    icon: Shield,
    title: 'Accessibility by Default',
    description: 'Every interface we build is designed to be inclusive and usable by everyone, regardless of ability or device.',
    color: 'from-mountain-teal to-mountain-blue'
  },
  {
    icon: Target,
    title: 'Lean, Measurable Outcomes',
    description: 'We focus on delivering value quickly and iterating based on real user feedback and data.',
    color: 'from-mountain-emerald to-mountain-green'
  },
  {
    icon: Heart,
    title: 'Privacy‑Respecting Analytics',
    description: 'User privacy is paramount. We implement analytics that respect user consent and data rights.',
    color: 'from-mountain-cyan to-mountain-teal'
  },
  {
    icon: Zap,
    title: 'Calm, Expressive Motion',
    description: 'Thoughtful animations and micro-interactions that enhance usability without overwhelming users.',
    color: 'from-mountain-green to-mountain-forest'
  }
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay at the forefront of technology to deliver cutting-edge solutions.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Success comes from working closely with our clients as true partners.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never compromise on quality and always strive to exceed expectations.'
  },
  {
    icon: Globe,
    title: 'Impact',
    description: 'We choose projects that make a positive difference in the world.'
  }
];

const team = [
  {
    name: 'Mile High Interface Team',
    role: 'Design & Engineering',
    description: 'A collective of designers, developers, and strategists passionate about creating meaningful digital experiences.',
    image: '/brand/logo.svg'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="container px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 px-4 py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed overflow-visible">
              <span className="text-brand-900">About</span>
              <span className="block text-gradient" style={{ lineHeight: '1.4' }}>Mile High Interface</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-brand-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              We are an app & website development studio in Colorado, creating digital solutions that help 
              entrepreneurs, startups, and small businesses bring their ideas to life and grow their ventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20">
        <div className="container px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              className="space-y-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-900">
                Our Mission
              </h2>
              <div className="prose prose-base sm:prose-lg text-brand-600 max-w-none">
                <p>
                  We believe technology should empower entrepreneurs and help businesses thrive, 
                  creating solutions that drive growth and make meaningful impact. 
                  Every line of code we write and every pixel we place is guided by the 
                  principle that great interfaces can make complex problems accessible 
                  and beautiful.
                </p>
                <p>
                  From civic engagement platforms that connect citizens with their 
                  representatives to data visualizations that reveal insights hidden 
                  in complexity, we choose projects that align with our values and 
                  have the potential to create positive change.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-mountain-teal/10 to-mountain-emerald/10" />
                <div className="relative p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">50+</div>
                      <div className="text-xs sm:text-sm text-brand-600 font-medium">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">5+</div>
                      <div className="text-xs sm:text-sm text-brand-600 font-medium">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">99%</div>
                      <div className="text-xs sm:text-sm text-brand-600 font-medium">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">24/7</div>
                      <div className="text-xs sm:text-sm text-brand-600 font-medium">Support Available</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
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
              Our Principles
            </h2>
            <p className="text-base sm:text-lg text-brand-600 max-w-2xl mx-auto px-4 sm:px-0">
              The core beliefs that guide every decision we make and every project we undertake.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:scale-105 transition-transform duration-300">
                  <CardHeader className="pb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${principle.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <principle.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-semibold text-brand-900">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-base sm:text-lg text-brand-600 max-w-2xl mx-auto px-4 sm:px-0">
              The fundamental values that shape our culture and drive our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center group hover:scale-105 transition-transform duration-300">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-mountain-teal group-hover:to-mountain-emerald transition-all duration-300">
                      <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-base sm:text-lg font-semibold text-brand-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-xs sm:text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
              Technology Stack
            </h2>
            <p className="text-base sm:text-lg text-brand-600 max-w-2xl mx-auto px-4 sm:px-0">
              We use cutting-edge tools and frameworks to build scalable, performant applications.
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
              <div className="relative p-6 sm:p-8">
                <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-mountain-teal" />
                      <h3 className="text-lg sm:text-xl font-semibold text-brand-900">Frontend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'D3.js'].map(tech => (
                        <span key={tech} className="px-2 sm:px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs sm:text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-mountain-emerald" />
                      <h3 className="text-lg sm:text-xl font-semibold text-brand-900">Design & Tools</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Figma', 'Adobe Creative Suite', 'Principle', 'Lottie', 'WebGL', 'Three.js'].map(tech => (
                        <span key={tech} className="px-2 sm:px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs sm:text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
