'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import {
  Brain,
  Rocket,
  Target,
  Shield,
  Zap,
  Heart,
  ArrowRight,
  ArrowLeft,
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MessageSquare,
  Sparkles,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

// Form data types
interface FormData {
  persona: string;
  goals: string[];
  services: string[];
  timeline: string;
  email: string;
  message: string;
}

// Persona options with their associated goals
const personas = [
  {
    id: 'entrepreneur',
    icon: Brain,
    title: 'Entrepreneur',
    description: 'I have a game-changing idea and need to bring it to life quickly.',
    color: 'from-mountain-teal to-mountain-blue',
    goals: ['Validate my concept', 'Build an MVP fast', 'Attract investors', 'Scale efficiently'],
  },
  {
    id: 'startup-founder',
    icon: Rocket,
    title: 'Startup Founder',
    description: 'I am ready to disrupt an industry with innovative technology.',
    color: 'from-mountain-cyan to-mountain-teal',
    goals: ['Rapid prototyping', 'Technical co-founder support', 'Product-market fit', 'Growth optimization'],
  },
  {
    id: 'small-business',
    icon: Target,
    title: 'Small Business Owner',
    description: 'I want to modernize operations and reach more customers online.',
    color: 'from-mountain-emerald to-mountain-green',
    goals: ['Professional web presence', 'Process automation', 'Customer engagement', 'Revenue growth'],
  },
  {
    id: 'investor',
    icon: Shield,
    title: 'Investor',
    description: 'I am backing portfolio companies that need technical execution.',
    color: 'from-mountain-green to-mountain-forest',
    goals: ['Due diligence support', 'Technical roadmaps', 'Portfolio optimization', 'Risk mitigation'],
  },
  {
    id: 'product-manager',
    icon: Zap,
    title: 'Product Manager',
    description: 'I need to enhance existing products with new features.',
    color: 'from-orange-500 to-red-500',
    goals: ['Feature development', 'User experience upgrade', 'Performance optimization', 'Technical debt reduction'],
  },
  {
    id: 'visionary',
    icon: Heart,
    title: 'Visionary',
    description: 'I believe technology can make a positive impact on the world.',
    color: 'from-purple-500 to-pink-500',
    goals: ['Purpose-driven products', 'Social impact apps', 'Community platforms', 'Sustainable solutions'],
  },
];

// Services options
const services = [
  { id: 'mvp', label: 'MVP Development', description: 'Launch quickly with core features' },
  { id: 'web-app', label: 'Web Application', description: 'Full-featured web platform' },
  { id: 'mobile-app', label: 'Mobile App', description: 'iOS and/or Android app' },
  { id: 'ui-ux', label: 'UI/UX Design', description: 'Beautiful, user-friendly interfaces' },
  { id: 'consulting', label: 'Technical Consulting', description: 'Expert guidance and strategy' },
  { id: 'maintenance', label: 'Maintenance & Support', description: 'Ongoing product support' },
];

// Timeline options
const timelines = [
  { id: 'exploring', label: 'Just Exploring', description: 'Gathering information for now' },
  { id: 'soon', label: 'Ready to Start Soon', description: 'Planning to begin within 1-3 months' },
  { id: 'urgent', label: 'Urgent Need', description: 'Need to start immediately' },
];

// Validation schema for final step
const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  message: z.string().optional(),
});

const TOTAL_STEPS = 5;

export function WhoAreYouForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    persona: '',
    goals: [],
    services: [],
    timeline: '',
    email: '',
    message: '',
  });
  const [state, setState] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedPersona = personas.find((p) => p.id === formData.persona);

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.persona !== '';
      case 2:
        return formData.goals.length > 0;
      case 3:
        return formData.services.length > 0;
      case 4:
        return formData.timeline !== '';
      case 5:
        return formData.email !== '';
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS && canProceed()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
      setState('idle');
    }
  };

  const handlePersonaSelect = (personaId: string) => {
    setFormData((prev) => ({
      ...prev,
      persona: personaId,
      goals: [], // Reset goals when persona changes
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal) ? prev.goals.filter((g) => g !== goal) : [...prev.goals, goal],
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const handleTimelineSelect = (timelineId: string) => {
    setFormData((prev) => ({
      ...prev,
      timeline: timelineId,
    }));
  };

  const handleSubmit = async () => {
    setErrors({});
    const validation = emailSchema.safeParse({ email: formData.email, message: formData.message });

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setState('submitting');

    try {
      const res = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong');
      }

      setState('sent');
    } catch (err) {
      console.error('Form submission error:', err);
      setState('error');
      setErrors({ general: err instanceof Error ? err.message : 'Something went wrong. Please try again.' });
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      persona: '',
      goals: [],
      services: [],
      timeline: '',
      email: '',
      message: '',
    });
    setState('idle');
    setErrors({});
  };

  // Progress bar
  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <section className="py-20 lg:py-32" aria-labelledby="contact-form">
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <header className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mountain-teal/10 to-mountain-emerald/10 rounded-full px-4 py-2 border border-mountain-teal/20">
              <Users className="w-4 h-4 text-mountain-teal" />
              <span className="text-sm font-medium text-brand-700 dark:text-brand-300">Let&apos;s Get Started</span>
            </div>

            <h2 id="contact-form" className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-brand-900 dark:text-brand-100">Tell Us About</span>
              <span className="block text-gradient">Yourself</span>
            </h2>

            <p className="text-xl text-brand-600 dark:text-brand-300 max-w-2xl mx-auto">
              Help us understand your needs so we can provide the best solution for you.
            </p>
          </header>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-brand-600 dark:text-brand-400 mb-2">
              <span>Step {step} of {TOTAL_STEPS}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div
              className="h-2 bg-brand-100 dark:bg-brand-800 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={step}
              aria-valuemin={1}
              aria-valuemax={TOTAL_STEPS}
              aria-label="Form progress"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-mountain-teal to-mountain-emerald"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Card */}
          <Card className="relative overflow-hidden border-0 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-mountain-teal/5 to-mountain-emerald/5" />
            <CardContent className="relative p-8 lg:p-12">
              <AnimatePresence mode="wait">
                {state === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-mountain-emerald to-mountain-green rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-900 dark:text-brand-100">Thank You!</h3>
                    <p className="text-lg text-brand-600 dark:text-brand-300 max-w-md mx-auto">
                      We&apos;ve received your information and will reach out within 1-2 business days to discuss how we can help.
                    </p>
                    <Button variant="ghost" size="lg" onClick={resetForm}>
                      Submit Another Response
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`step-${step}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 1: Who Are You */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-brand-900 dark:text-brand-100 mb-2">Who Are You?</h3>
                          <p className="text-brand-600 dark:text-brand-400">Select the option that best describes you</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4" role="radiogroup" aria-label="Select your role">
                          {personas.map((persona) => (
                            <motion.button
                              key={persona.id}
                              type="button"
                              onClick={() => handlePersonaSelect(persona.id)}
                              role="radio"
                              aria-checked={formData.persona === persona.id}
                              className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
                                formData.persona === persona.id
                                  ? 'border-mountain-teal bg-gradient-to-br from-mountain-teal/10 to-mountain-emerald/10'
                                  : 'border-brand-200 dark:border-brand-700 hover:border-mountain-teal/50 bg-white dark:bg-brand-800/50'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-start gap-4">
                                <div
                                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${persona.color} flex items-center justify-center flex-shrink-0`}
                                >
                                  <persona.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-brand-900 dark:text-brand-100 mb-1">{persona.title}</h4>
                                  <p className="text-sm text-brand-600 dark:text-brand-400">{persona.description}</p>
                                </div>
                              </div>
                              {formData.persona === persona.id && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="absolute top-4 right-4 w-6 h-6 bg-mountain-teal rounded-full flex items-center justify-center"
                                >
                                  <div className="w-3 h-3 bg-white rounded-full" />
                                </motion.div>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Goals */}
                    {step === 2 && (
                      <div className="space-y-6">
                        {selectedPersona ? (
                          <>
                            <div className="text-center mb-8">
                              <h3 className="text-2xl font-bold text-brand-900 dark:text-brand-100 mb-2">What Are Your Goals?</h3>
                              <p className="text-brand-600 dark:text-brand-400">Select all that apply to your situation</p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4" role="group" aria-label="Select your goals">
                              {selectedPersona.goals.map((goal) => (
                                <motion.button
                                  key={goal}
                                  type="button"
                                  onClick={() => handleGoalToggle(goal)}
                                  role="checkbox"
                                  aria-checked={formData.goals.includes(goal)}
                                  className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                                    formData.goals.includes(goal)
                                      ? 'border-mountain-teal bg-gradient-to-br from-mountain-teal/10 to-mountain-emerald/10'
                                      : 'border-brand-200 dark:border-brand-700 hover:border-mountain-teal/50 bg-white dark:bg-brand-800/50'
                                  }`}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <div className="flex items-center gap-3">
                                    <div
                                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                        formData.goals.includes(goal)
                                          ? 'border-mountain-teal bg-mountain-teal'
                                          : 'border-brand-300 dark:border-brand-600'
                                      }`}
                                    >
                                      {formData.goals.includes(goal) && <CheckCircle2 className="w-4 h-4 text-white" />}
                                    </div>
                                    <span className="font-medium text-brand-900 dark:text-brand-100">{goal}</span>
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="text-center py-8">
                            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                            <p className="text-brand-600 dark:text-brand-400 mb-4">
                              Something went wrong. Please go back and select your role again.
                            </p>
                            <Button variant="ghost" onClick={() => setStep(1)}>
                              Go Back to Step 1
                            </Button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Step 3: Services */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-brand-900 dark:text-brand-100 mb-2">What Services Interest You?</h3>
                          <p className="text-brand-600 dark:text-brand-400">Select all that you might need</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4" role="group" aria-label="Select services of interest">
                          {services.map((service) => (
                            <motion.button
                              key={service.id}
                              type="button"
                              onClick={() => handleServiceToggle(service.id)}
                              role="checkbox"
                              aria-checked={formData.services.includes(service.id)}
                              className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                                formData.services.includes(service.id)
                                  ? 'border-mountain-teal bg-gradient-to-br from-mountain-teal/10 to-mountain-emerald/10'
                                  : 'border-brand-200 dark:border-brand-700 hover:border-mountain-teal/50 bg-white dark:bg-brand-800/50'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                                    formData.services.includes(service.id)
                                      ? 'border-mountain-teal bg-mountain-teal'
                                      : 'border-brand-300 dark:border-brand-600'
                                  }`}
                                >
                                  {formData.services.includes(service.id) && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <div>
                                  <span className="font-medium text-brand-900 dark:text-brand-100 block">{service.label}</span>
                                  <span className="text-sm text-brand-600 dark:text-brand-400">{service.description}</span>
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 4: Timeline */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-bold text-brand-900 dark:text-brand-100 mb-2">What&apos;s Your Timeline?</h3>
                          <p className="text-brand-600 dark:text-brand-400">When are you looking to get started?</p>
                        </div>

                        <div className="space-y-4" role="radiogroup" aria-label="Select your timeline">
                          {timelines.map((timeline) => (
                            <motion.button
                              key={timeline.id}
                              type="button"
                              onClick={() => handleTimelineSelect(timeline.id)}
                              role="radio"
                              aria-checked={formData.timeline === timeline.id}
                              className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-300 ${
                                formData.timeline === timeline.id
                                  ? 'border-mountain-teal bg-gradient-to-br from-mountain-teal/10 to-mountain-emerald/10'
                                  : 'border-brand-200 dark:border-brand-700 hover:border-mountain-teal/50 bg-white dark:bg-brand-800/50'
                              }`}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                            >
                              <div className="flex items-center gap-4">
                                <div
                                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                                    formData.timeline === timeline.id
                                      ? 'border-mountain-teal bg-mountain-teal'
                                      : 'border-brand-300 dark:border-brand-600'
                                  }`}
                                >
                                  {formData.timeline === timeline.id && (
                                    <div className="w-3 h-3 bg-white rounded-full" />
                                  )}
                                </div>
                                <div>
                                  <span className="font-medium text-brand-900 dark:text-brand-100 block">{timeline.label}</span>
                                  <span className="text-sm text-brand-600 dark:text-brand-400">{timeline.description}</span>
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 5: Contact Info */}
                    {step === 5 && (
                      <div className="space-y-6">
                        <div className="text-center mb-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-mountain-teal to-mountain-emerald rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Sparkles className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-brand-900 dark:text-brand-100 mb-2">Almost Done!</h3>
                          <p className="text-brand-600 dark:text-brand-400">
                            Share your email so we can follow up with you
                          </p>
                        </div>

                        <div className="space-y-4 max-w-md mx-auto">
                          {/* Email Field */}
                          <div className="space-y-2">
                            <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-brand-800 dark:text-brand-200">
                              <Mail className="w-4 h-4 text-brand-600" />
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              id="email"
                              type="email"
                              autoComplete="email"
                              value={formData.email}
                              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                              placeholder="your.email@example.com"
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mountain-teal/20 text-brand-900 dark:text-brand-100 placeholder:text-brand-400 dark:placeholder:text-brand-500 ${
                                errors['email']
                                  ? 'border-red-300 bg-red-50 dark:border-red-500 dark:bg-red-950/30'
                                  : 'border-brand-200 dark:border-brand-700 bg-white dark:bg-brand-800/50 hover:border-brand-300 focus:border-mountain-teal'
                              }`}
                            />
                            {errors['email'] && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1"
                              >
                                <AlertCircle className="w-4 h-4" />
                                {errors['email']}
                              </motion.p>
                            )}
                          </div>

                          {/* Message Field (Optional) */}
                          <div className="space-y-2">
                            <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-brand-800 dark:text-brand-200">
                              <MessageSquare className="w-4 h-4 text-brand-600" />
                              Additional Details <span className="text-brand-400">(optional)</span>
                            </label>
                            <textarea
                              id="message"
                              value={formData.message}
                              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                              rows={4}
                              placeholder="Tell us more about your project, timeline, or any specific requirements..."
                              className="w-full px-4 py-3 rounded-xl border-2 border-brand-200 dark:border-brand-700 bg-white dark:bg-brand-800/50 hover:border-brand-300 focus:border-mountain-teal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mountain-teal/20 resize-none text-brand-900 dark:text-brand-100 placeholder:text-brand-400 dark:placeholder:text-brand-500"
                            />
                          </div>
                        </div>

                        {/* Error Message */}
                        {errors['general'] && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-500 rounded-xl p-4 flex items-center gap-3 max-w-md mx-auto"
                          >
                            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                            <p className="text-sm text-red-800 dark:text-red-300">{errors['general']}</p>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-10 pt-6 border-t border-brand-100 dark:border-brand-800">
                      <Button
                        variant="ghost"
                        size="lg"
                        onClick={handleBack}
                        disabled={step === 1}
                        className={step === 1 ? 'invisible' : ''}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back
                      </Button>

                      {step < TOTAL_STEPS ? (
                        <Button variant="cyber" size="lg" onClick={handleNext} disabled={!canProceed()}>
                          Continue
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button
                          variant="cyber"
                          size="lg"
                          onClick={handleSubmit}
                          disabled={!canProceed() || state === 'submitting'}
                        >
                          {state === 'submitting' ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Submit
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
