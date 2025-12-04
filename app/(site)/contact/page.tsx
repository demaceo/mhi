"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import {
  Send,
  Mail,
  MessageSquare,
  User,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@milehighinterface.com",
    description: "Send us a direct message",
    color: "from-mountain-teal to-mountain-blue",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Colorado, USA",
    description: "Mountain timezone (MST/MDT)",
    color: "from-mountain-emerald to-mountain-green",
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "1-2 business days",
    description: "We reply quickly",
    color: "from-mountain-cyan to-mountain-teal",
  },
];

export default function ContactPage() {
  const [state, setState] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setGeneralError(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form) as Record<string, string>;
    const parse = schema.safeParse(payload);

    if (!parse.success) {
      const fieldErrors: Record<string, string> = {};
      parse.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parse.data),
      });

      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.error("Failed to parse response JSON:", parseError);
        throw new Error("Invalid server response");
      }

      console.log("Contact form response:", { status: res.status, data });

      if (!res.ok) {
        throw new Error(data.error || `Server error: ${res.status}`);
      }

      // Check if the backend actually reports success
      if (data.success) {
        console.log("Contact form submitted successfully");
        setState("sent");
        (e.currentTarget as HTMLFormElement).reset();

        // Reset to idle after 5 seconds
        setTimeout(() => setState("idle"), 5000);
      } else {
        throw new Error(data.error || "Email sending failed");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setState("error");
      setGeneralError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again later."
      );
    }
  }

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
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-mountain-teal/10 to-mountain-emerald/10 rounded-full px-4 py-2 border border-mountain-teal/20">
              <Sparkles className="w-4 h-4 text-mountain-teal" />
              <span className="text-sm font-medium text-brand-700">
                Let's Work Together
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-brand-900">Get In</span>
              <span className="block text-gradient">Touch</span>
            </h1>

            <p className="text-xl text-brand-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Tell us about your project and
              let&apos;s create something amazing together. We typically respond
              within 1-2 business days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-brand-900 mb-2">
                    Contact Information
                  </h2>
                  <p className="text-brand-600">
                    Multiple ways to reach us for your convenience.
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="group hover:scale-105 transition-transform duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-brand-900 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-brand-800 font-medium mb-1">
                              {info.details}
                            </p>
                            <p className="text-sm text-brand-600">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-mountain-teal/5 to-mountain-emerald/5" />
                  <div className="relative">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-100 to-brand-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
                        <MessageSquare className="w-6 h-6 text-mountain-teal" />
                      </div>
                      <h2 className="text-2xl font-bold text-brand-900 mb-2">
                        Let&apos;s Work Together
                      </h2>
                      <p className="text-brand-600">
                        Ready to bring your idea to life? Let&apos;s discuss
                        your project.
                      </p>
                    </div>

                    <CardContent className="p-6 pt-0">
                      {state === "sent" ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-12 space-y-4"
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-mountain-emerald to-mountain-green rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-brand-900">
                            Message Sent Successfully!
                          </h3>
                          <p className="text-brand-600 max-w-md mx-auto">
                            Thank you for reaching out. We've received your
                            message and will get back to you within 1-2 business
                            days.
                          </p>
                        </motion.div>
                      ) : (
                        <form onSubmit={onSubmit} className="space-y-6">
                          {/* Name Field */}
                          <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-brand-800">
                              <User className="w-4 h-4 text-brand-600" />
                              Name
                            </label>
                            <input
                              name="name"
                              placeholder="Your full name"
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mountain-teal/20 ${
                                errors["name"]
                                  ? "border-red-300 bg-red-50"
                                  : "border-brand-200 bg-white hover:border-brand-300 focus:border-mountain-teal"
                              }`}
                              required
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
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="your.email@example.com"
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mountain-teal/20 ${
                                errors["email"]
                                  ? "border-red-300 bg-red-50"
                                  : "border-brand-200 bg-white hover:border-brand-300 focus:border-mountain-teal"
                              }`}
                              required
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
                              <MessageSquare className="w-4 h-4 text-brand-600" />
                              Message
                            </label>
                            <textarea
                              name="message"
                              rows={6}
                              placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mountain-teal/20 resize-none ${
                                errors["message"]
                                  ? "border-red-300 bg-red-50"
                                  : "border-brand-200 bg-white hover:border-brand-300 focus:border-mountain-teal"
                              }`}
                              required
                            />
                            {errors["message"] && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-red-600 flex items-center gap-1"
                              >
                                <AlertCircle className="w-4 h-4" />
                                {errors["message"]}
                              </motion.p>
                            )}
                          </div>

                          {/* Submit Button */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                            <Button
                              type="submit"
                              variant="cyber"
                              size="lg"
                              disabled={state === "submitting"}
                              className="w-full sm:w-auto"
                            >
                              {state === "submitting" ? (
                                <>
                                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  <Send className="w-4 h-4 mr-2" />
                                  Send Message
                                </>
                              )}
                            </Button>

                            <p className="text-sm text-brand-600">
                              Usually replied within 1-2 business days
                            </p>
                          </div>

                          {/* Error Message */}
                          {generalError && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3"
                            >
                              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                              <p className="text-sm text-red-800">
                                {generalError}
                              </p>
                            </motion.div>
                          )}
                        </form>
                      )}
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-20 bg-gradient-to-b from-brand-50/50 to-transparent">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-800 border-0 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-mountain-teal/20 to-mountain-emerald/20" />
              <div className="relative p-8 lg:p-12 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Prefer a Different Approach?
                </h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Feel free to reach out directly via email or connect with us
                  on social media. We&apos;re always excited to discuss new
                  projects and collaborations.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    variant="gradient"
                    size="lg"
                    onClick={() =>
                      (window.location.href =
                        "mailto:hello@milehighinterface.com")
                    }
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us Directly
                  </Button>
                  {/* <Button 
                    variant="ghost" 
                    size="lg" 
                    className="text-white hover:bg-white/10"
                    onClick={() => window.open('https://linkedin.com/company/milehighinterface', '_blank')}
                  >
                    Connect on LinkedIn
                  </Button> */}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
