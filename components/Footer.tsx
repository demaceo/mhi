'use client';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Github, href: 'https://github.com/demaceo', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/company/milehighinterface', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/milehighinterface', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@milehighinterface.com', label: 'Email' },
];

const footerLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-200/50 mt-20 bg-gradient-to-t from-brand-50/50 to-transparent">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
                <span className="text-xl font-bold text-brand-900">Mile High Interface</span>
              </div>
              <p className="text-brand-600 max-w-md leading-relaxed">
                App & website development for entrepreneurs and startups. 
                Building accessible, delightful interfaces that make a difference.
              </p>
              <div className="flex items-center gap-2 text-sm text-brand-500">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>in Colorado</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-brand-900">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-brand-600 hover:text-cyber-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-brand-900">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-brand-100 hover:bg-gradient-to-br hover:from-cyber-blue hover:to-cyber-purple rounded-xl flex items-center justify-center transition-all duration-300 hover:text-white group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 mt-8 border-t border-brand-200/50 gap-4"
        >
          <p className="text-sm text-brand-500">
            © {new Date().getFullYear()} Mile High Interface LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-brand-500">
            <span>Built with</span>
            <span className="font-mono text-xs bg-brand-100 px-2 py-1 rounded">Next.js</span>
            <span>+</span>
            <span className="font-mono text-xs bg-brand-100 px-2 py-1 rounded">TypeScript</span>
            <span>+</span>
            <span className="font-mono text-xs bg-brand-100 px-2 py-1 rounded">Tailwind</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
