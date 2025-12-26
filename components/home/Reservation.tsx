"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, User, Mail, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Toast, ToastType } from "@/components/ui/Toast";

export function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: ToastType }>({
    show: false,
    message: "",
    type: "success",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setToast({
      show: true,
      message: `Table reserved for ${formData.name} on ${formData.date} at ${formData.time}!`,
      type: "success",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
    });
  };

  return (
    <Section id="reservation" className="py-24 md:py-32 bg-sand/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sage-dark font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Reservations
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-mocha leading-tight mb-6">
                Book Your <br />
                <span className="text-sage-dark">Table Now</span>
              </h2>
              <p className="text-mocha-light text-lg max-w-md">
                Secure your spot for an unforgettable dining experience. 
                Whether it&apos;s a romantic dinner or a family gathering, we&apos;re ready to serve you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block p-8 bg-white/50 rounded-3xl backdrop-blur-sm border border-white/20"
            >
              <h3 className="font-serif text-2xl text-mocha mb-4">Special Requests?</h3>
              <p className="text-mocha-light mb-6">
                Celebrating a birthday or anniversary? Let us know and we&apos;ll make it extra special.
              </p>
              <div className="flex items-center gap-3 text-sage-dark font-medium">
                <Phone size={20} />
                <span>Call us directly: +91 98765 43210</span>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-mocha flex items-center gap-2">
                    <User size={16} className="text-sage-dark" /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sand/10 border border-sand/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-mocha placeholder:text-mocha/30"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-mocha flex items-center gap-2">
                    <Phone size={16} className="text-sage-dark" /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sand/10 border border-sand/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-mocha placeholder:text-mocha/30"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-mocha flex items-center gap-2">
                  <Mail size={16} className="text-sage-dark" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-sand/10 border border-sand/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-mocha placeholder:text-mocha/30"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Date */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-mocha flex items-center gap-2">
                    <Calendar size={16} className="text-sage-dark" /> Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sand/10 border border-sand/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-mocha"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-mocha flex items-center gap-2">
                    <Clock size={16} className="text-sage-dark" /> Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sand/10 border border-sand/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-mocha"
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-mocha flex items-center gap-2">
                    <Users size={16} className="text-sage-dark" /> Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-sand/10 border border-sand/30 focus:border-sage focus:ring-1 focus:ring-sage outline-none transition-all text-mocha"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} People</option>
                    ))}
                    <option value="more">8+ (Call us)</option>
                  </select>
                </div>
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                className="w-full mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Confirming..." : "Confirm Reservation"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <Toast 
        isVisible={toast.show} 
        message={toast.message} 
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, show: false }))} 
      />
    </Section>
  );
}
