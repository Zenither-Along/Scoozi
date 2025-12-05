"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function About() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <Section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            style={{ y: imageY }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl">
              {/* Placeholder for about image */}
              <div 
                className="absolute inset-0 bg-linear-to-br from-sand to-terracotta/30"
                style={{
                  backgroundImage: `url('/about-image.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage/20 rounded-full blur-2xl" />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-terracotta/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sage-dark font-medium tracking-[0.2em] uppercase text-sm mb-4"
              >
                Our Story
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl text-mocha leading-tight"
              >
                Where Heritage <br />
                <span className="text-sage-dark">Meets Modernity</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-mocha-light"
            >
              <p className="text-lg leading-relaxed">
                Scoozi isn't just a café; it's a celebration of our rich culinary heritage reimagined for the modern palate. 
                We believe in the art of slow living, where every meal is an opportunity to connect with our roots.
              </p>
              <p className="leading-relaxed">
                Our kitchen blends traditional local ingredients—like fresh bamboo shoots, aromatic herbs, and locally sourced rice—with contemporary techniques. 
                Whether it's our signature Ondla curry or a perfectly brewed cappuccino, every dish tells a story of our land.
              </p>
              <p className="leading-relaxed">
                We invite you to pause, breathe, and experience the warmth of true hospitality. 
                Here, strangers become friends, and every visit feels like coming home.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-sand"
            >
              {[
                { number: "100%", label: "Locally Sourced" },
                { number: "20+", label: "Signature Dishes" },
                { number: "∞", label: "Good Vibes" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-3xl md:text-4xl text-mocha font-medium">
                    {stat.number}
                  </p>
                  <p className="text-sm text-mocha-light mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
