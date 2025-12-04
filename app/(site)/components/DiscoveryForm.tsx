"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import {
  ArrowRight,
  ArrowLeft,
  Send,
  Mail,
  User,
  CheckCircle2,
  AlertCircle,
  Brain,
  Rocket,
  Target,
  Shield,
  Zap,
  Heart,
  Code,
  BarChart3,
  Globe,
  Sparkles,
  Lock,
  Smartphone,
  Layers,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

// Form data schema
type FormData = {
  userTypes: string[];
  services: string[];
  timeline?: string;
  name: string;
  email: string;
  message?: string;
};

const userTypeOptions = [
  {
    icon: Brain,
    value: "entrepreneur",
    title: "Entrepreneur",
    description: "I have a game-changing idea",
    color: "from-mountain-teal to-mountain-blue",
  },
  {
    icon: Rocket,
    value: "startup-founder",
    title: "Startup Founder",
    description: "I&apos;m building an innovative product",
    color: "from-mountain-cyan to-mountain-teal",
  },
  {
    icon: Target,
    value: "small-business",
    title: "Small Business Owner",
    description: "I want to modernize my business",
    color: "from-mountain-emerald to-mountain-green",
  },
  {
    icon: Shield,
    value: "investor",
    title: "Investor",
    description: "I&apos;m backing companies that need tech",
    color: "from-mountain-green to-mountain-forest",
  },
  {
    icon: Zap,
    value: "product-manager",
    title: "Product Manager",
    description: "I need to enhance existing products",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    value: "visionary",
    title: "Visionary",
    description: "I want tech for positive impact",
    color: "from-purple-500 to-pink-500",
  },
];

const serviceOptions = [
  {
    icon: Sparkles,
    value: "mvp-development",
    title: "MVP Development",
    description: "Quick launch & validation",
  },
  {
    icon: Globe,
    value: "business-website",
    title: "Business Website",
    description: "Professional web presence",
  },
  {
    icon: Code,
    value: "product-ui-engineering",
    title: "Product & UI Engineering",
    description: "Component libraries & optimization",
  },
  {
    icon: BarChart3,
    value: "data-visualization",
    title: "Data Visualization",
    description: "Interactive dashboards & charts",
  },
  {
    icon: Layers,
    value: "design-systems",
    title: "Design Systems",
    description: "Scalable UI frameworks",
  },
  {
    icon: Code,
    value: "api-development",
    title: "API Development",
    description: "Backend & integrations",
  },
  {
    icon: Smartphone,
    value: "mobile-first",
    title: "Mobile-First Design",
    description: "Responsive mobile apps",
  },
  {
    icon: Lock,
    value: "security-audits",
    title: "Security Audits",
    description: "Security & compliance",
  },
];

const timelineOptions = [
  {
    icon: Zap,
    value: "asap",
    label: "ASAP (1-2 weeks)",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Calendar,
    value: "1-2-months",
    label: "1-2 months",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Calendar,
    value: "3-6-months",
    label: "3-6 months",
    color: "from-yellow-500 to-green-500",
  },
  {
    icon: Calendar,
    value: "6-plus-months",
    label: "6+ months",
    color: "from-green-500 to-blue-500",
  },
  {
    icon: Sparkles,
    value: "exploring",
    label: "Just exploring",
    color: "from-purple-500 to-pink-500",
  },
];

export default function DiscoveryForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({
    userTypes: [],
    services: [],
    timeline: "",
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );
  const [generalError, setGeneralError] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("discoveryFormData");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
      } catch (e) {
        console.error("Failed to parse saved form data:", e);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (state !== "sent") {
      localStorage.setItem("discoveryFormData", JSON.stringify(formData));
    }
  }, [formData, state]);

  const toggleArrayValue = (field: "userTypes" | "services", value: string) => {
    const current = formData[field] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFormData({ ...formData, [field]: updated });
    setErrors({ ...errors, [field]: "" });
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.userTypes || formData.userTypes.length === 0) {
          newErrors["userTypes"] = "Please select at least one option";
        }
        break;
      case 2:
        if (!formData.services || formData.services.length === 0) {
          newErrors["services"] = "Please select at least one service";
        }
        break;
      case 3:
        // Timeline is optional
        break;
      case 4:
        if (!formData.name || formData.name.trim().length === 0) {
          newErrors["name"] = "Name is required";
        }
        if (!formData.email || formData.email.trim().length === 0) {
          newErrors["email"] = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors["email"] = "Please enter a valid email";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(4, prev + 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setErrors({});
    setGeneralError(null);
    setState("submitting");

    try {
      const payload = {
        ...formData,
        userTypes: formData.userTypes || [],
        services: formData.services || [],
        timeline: formData.timeline || "Not specified",
        name: formData.name || "",
        email: formData.email || "",
        message: formData.message || "",
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.error("Failed to parse response JSON:", parseError);
        throw new Error("Invalid server response");
      }

      if (!res.ok) {
        throw new Error(data.error || `Server error: ${res.status}`);
      }

      if (data.success) {
        setState("sent");
        localStorage.removeItem("discoveryFormData");

        // Reset form after 5 seconds
        setTimeout(() => {
          setState("idle");
          setCurrentStep(1);
          setFormData({
            userTypes: [],
            services: [],
            timeline: "",
            name: "",
            email: "",
            message: "",
          });
        }, 5000);
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (err) {
      console.error("Discovery form error:", err);
      setState("error");
      setGeneralError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again later."
      );
    }
  };

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-brand-50/30 to-transparent">
      <div className="container">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {state === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 space-y-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-mountain-emerald to-mountain-green rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-brand-900">Thank You!</h2>
              <p className="text-xl text-brand-600 max-w-2xl mx-auto">
                We've received your information and will get back to you within
                1-2 business days with a personalized proposal.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center space-y-6 mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mountain-emerald/10 to-mountain-green/10 rounded-full px-4 py-2 border border-mountain-emerald/20">
                  <Sparkles className="w-4 h-4 text-mountain-emerald" />
                  <span className="text-sm font-medium text-brand-700">
                    Find Your Perfect Match
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-brand-900">Let's Get</span>
                  <span className="block text-gradient">Started</span>
                </h2>

                <p className="text-xl text-brand-600 max-w-3xl mx-auto">
                  Answer a few quick questions so we can understand your needs
                  and provide the best solution.
                </p>

                {/* Progress Bar */}
                <div className="max-w-md mx-auto pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-brand-700">
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span className="text-sm text-brand-600">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="h-2 bg-brand-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-mountain-teal to-mountain-emerald"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Form Steps */}
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-mountain-teal/5 to-mountain-emerald/5" />
                <CardContent className="p-8 lg:p-12 relative">
                  <AnimatePresence mode="wait">
                    {/* Step 1: Who are you? */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="text-center space-y-2">
                          <h3 className="text-2xl font-bold text-brand-900">
                            Who are you?
                          </h3>
                          <p className="text-brand-600">
                            Select all that apply
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {userTypeOptions.map((option) => {
                            const isSelected = formData.userTypes?.includes(
                              option.value
                            );
                            return (
                              <motion.button
                                key={option.value}
                                onClick={() =>
                                  toggleArrayValue("userTypes", option.value)
                                }
                                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                                  isSelected
                                    ? "border-mountain-teal bg-gradient-to-br from-mountain-teal/10 to-mountain-emerald/10"
                                    : "border-brand-200 bg-white hover:border-brand-300 hover:shadow-md"
                                }`}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-4 right-4"
                                  >
                                    <CheckCircle2 className="w-6 h-6 text-mountain-teal" />
                                  </motion.div>
                                )}
                                <div
                                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-4`}
                                >
                                  <option.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-brand-900 mb-2">
                                  {option.title}
                                </h4>
                                <p className="text-sm text-brand-600">
                                  {option.description}
                                </p>
                              </motion.button>
                            );
                          })}
                        </div>

                        {errors["userTypes"] && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-600 flex items-center justify-center gap-2"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors["userTypes"]}
                          </motion.p>
                        )}
                      </motion.div>
                    )}

                    {/* Step 2: What do you need? */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="text-center space-y-2">
                          <h3 className="text-2xl font-bold text-brand-900">
                            What do you need?
                          </h3>
                          <p className="text-brand-600">
                            Select all services that interest you
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {serviceOptions.map((option) => {
                            const isSelected = formData.services?.includes(
                              option.value
                            );
                            return (
                              <motion.button
                                key={option.value}
                                onClick={() =>
                                  toggleArrayValue("services", option.value)
                                }
                                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                                  isSelected
                                    ? "border-mountain-teal bg-gradient-to-br from-mountain-teal/10 to-mountain-emerald/10"
                                    : "border-brand-200 bg-white hover:border-brand-300 hover:shadow-md"
                                }`}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-4 right-4"
                                  >
                                    <CheckCircle2 className="w-5 h-5 text-mountain-teal" />
                                  </motion.div>
                                )}
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mountain-teal to-mountain-emerald flex items-center justify-center mb-3">
                                  <option.icon className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="font-semibold text-brand-900 text-sm mb-1">
                                  {option.title}
                                </h4>
                                <p className="text-xs text-brand-600">
                                  {option.description}
                                </p>
                              </motion.button>
                            );
                          })}
                        </div>

                        {errors["services"] && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-600 flex items-center justify-center gap-2"
                          >
                            <AlertCircle className="w-4 h-4" />
                            {errors["services"]}
                          </motion.p>
                        )}
                      </motion.div>
                    )}

                    {/* Step 3: Timeline */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="text-center space-y-2">
                          <h3 className="text-2xl font-bold text-brand-900">
                            What&apos;s your timeline?
                          </h3>
                          <p className="text-brand-600">
                            Optional - helps us plan better
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                          {timelineOptions.map((option) => {
                            const isSelected =
                              formData.timeline === option.value;
                            return (
                              <motion.button
                                key={option.value}
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    timeline:
                                      formData.timeline === option.value
                                        ? ""
                                        : option.value,
                                  })
                                }
                                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                                  isSelected
                                    ? "border-mountain-teal bg-gradient-to-br from-mountain-teal/10 to-mountain-emerald/10"
                                    : "border-brand-200 bg-white hover:border-brand-300 hover:shadow-md"
                                }`}
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-4 right-4"
                                  >
                                    <CheckCircle2 className="w-6 h-6 text-mountain-teal" />
                                  </motion.div>
                                )}
                                <div
                                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-4`}
                                >
                                  <option.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="font-semibold text-brand-900">
                                  {option.label}
                                </h4>
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Contact Info */}
                    {currentStep === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-8"
                      >
                        <div className="text-center space-y-2">
                          <h3 className="text-2xl font-bold text-brand-900">
                            How can we reach you?
                          </h3>
                          <p className="text-brand-600">
                            We&apos;ll send you a personalized proposal
                          </p>
                        </div>

                        <div className="max-w-2xl mx-auto space-y-6">
                          {/* Name Field */}
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-brand-800">
                              <User className="w-4 h-4 text-brand-600" />
                              Name *
                            </label>
                            <input
                              type="text"
                              value={formData.name || ""}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                });
                                setErrors({ ...errors, name: "" });
                              }}
                              placeholder="Your full name"
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mountain-teal/20 ${
                                errors["name"]
                                  ? "border-red-300 bg-red-50"
                                  : "border-brand-200 bg-white hover:border-brand-300 focus:border-mountain-teal"
                              }`}
                            />
                            {errors["name"] && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-red-600 flex items-center gap-1"
                              >
                                <AlertCircle className="w-4 h-4" />
                                {errors["name"]}
                              </motion.p>
                            )}
                          </div>

                          {/* Email Field */}
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-brand-800">
                              <Mail className="w-4 h-4 text-brand-600" />
                              Email *
                            </label>
                            <input
                              type="email"
                              value={formData.email || ""}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                });
                                setErrors({ ...errors, email: "" });
                              }}
                              placeholder="your.email@example.com"
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mountain-teal/20 ${
                                errors["email"]
                                  ? "border-red-300 bg-red-50"
                                  : "border-brand-200 bg-white hover:border-brand-300 focus:border-mountain-teal"
                              }`}
                            />
                            {errors["email"] && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-red-600 flex items-center gap-1"
                              >
                                <AlertCircle className="w-4 h-4" />
                                {errors["email"]}
                              </motion.p>
                            )}
                          </div>

                          {/* Message Field */}
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-brand-800">
                              <Sparkles className="w-4 h-4 text-brand-600" />
                              Additional Details (Optional)
                            </label>
                            <textarea
                              value={formData.message || ""}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  message: e.target.value,
                                })
                              }
                              rows={4}
                              placeholder="Tell us more about your project, budget, or any specific requirements..."
                              className="w-full px-4 py-3 rounded-xl border-2 border-brand-200 bg-white hover:border-brand-300 focus:border-mountain-teal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mountain-teal/20 resize-none"
                            />
                          </div>
                        </div>

                        {generalError && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 max-w-2xl mx-auto"
                          >
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                            <p className="text-sm text-red-800">
                              {generalError}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-8 mt-8 border-t border-brand-200">
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={prevStep}
                      disabled={currentStep === 1 || state === "submitting"}
                      className="group"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                      Back
                    </Button>

                    {currentStep < 4 ? (
                      <Button
                        variant="cyber"
                        size="lg"
                        onClick={nextStep}
                        className="group"
                      >
                        Next
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <Button
                        variant="cyber"
                        size="lg"
                        onClick={handleSubmit}
                        disabled={state === "submitting"}
                      >
                        {state === "submitting" ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Submit
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
