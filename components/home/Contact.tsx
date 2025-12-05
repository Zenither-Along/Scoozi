"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sage-dark font-medium tracking-[0.2em] uppercase text-sm mb-4"
              >
                Visit Us
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl text-mocha leading-tight"
              >
                We&apos;d Love to <br />
                <span className="text-sage-dark">See You</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage/10 rounded-full">
                  <MapPin className="w-6 h-6 text-sage-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-mocha mb-1">Address</h3>
                  <p className="text-mocha-light">
                    Kokrajhar Road, Bodoland<br />
                    Assam, India 783370
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage/10 rounded-full">
                  <Clock className="w-6 h-6 text-sage-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-mocha mb-1">Hours</h3>
                  <p className="text-mocha-light">
                    Mon - Fri: 7:00 AM - 9:00 PM<br />
                    Sat - Sun: 8:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-sage/10 rounded-full">
                  <Phone className="w-6 h-6 text-sage-dark" />
                </div>
                <div>
                  <h3 className="font-medium text-mocha mb-1">Phone</h3>
                  <p className="text-mocha-light">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button variant="primary" size="lg">
                Get Directions
              </Button>
            </motion.div>
          </div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden shadow-xl">
              {/* Google Maps Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57272.76297374662!2d90.23727768853758!3d26.405367677862243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3758f6d634265d3b%3A0x6280457632607560!2sKokrajhar%2C%20Assam!5e0!3m2!1sen!2sin!4v1709567890123!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) sepia(0.2)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-terracotta/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-sage/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
