"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/ui/Section";

const testimonials = [
  {
    id: 1,
    text: "Scoozi is my sanctuary. The moment I walk in, the aroma of fresh coffee and the warm ambiance just melts away the stress of the day.",
    author: "Sarah M.",
    role: "Regular Guest",
  },
  {
    id: 2,
    text: "The Masor Tenga here reminds me of my grandmother&apos;s cooking. Authentic Assamese flavors that you rarely find anywhere else.",
    author: "Rajib B.",
    role: "Food Enthusiast",
  },
  {
    id: 3,
    text: "The attention to detail in every dish is remarkable. The Bodo cuisine here is a beautiful tribute to our tribal heritage.",
    author: "Ranjita D.",
    role: "Local Resident",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section className="py-24 md:py-32 bg-sand/30 overflow-hidden">
      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto px-6"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sage-dark font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            What They Say
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-mocha"
          >
            Guest Stories
          </motion.h2>
        </div>

        {/* Testimonial Card - Clickable */}
        <div className="relative">
          <Quote className="absolute -top-4 -left-4 w-16 h-16 text-sage/20 z-10" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={nextTestimonial}
              className="bg-cream rounded-3xl p-8 md:p-12 shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow duration-300 select-none"
            >
              <p className="text-xl md:text-2xl text-mocha leading-relaxed font-serif italic mb-8">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>
              <div>
                <p className="font-medium text-mocha text-lg">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-mocha-light text-sm">
                  {testimonials[activeIndex].role}
                </p>
              </div>
              
              {/* Tap hint */}
              <p className="text-mocha-light/50 text-xs mt-6">
                Tap to see next story
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows (desktop) */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none px-4">
            <button
              onClick={(e) => { e.stopPropagation(); prevTestimonial(); }}
              className="pointer-events-auto p-3 rounded-full bg-cream shadow-lg text-mocha hover:text-sage-dark hover:scale-110 transition-all duration-300 -translate-x-16"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextTestimonial(); }}
              className="pointer-events-auto p-3 rounded-full bg-cream shadow-lg text-mocha hover:text-sage-dark hover:scale-110 transition-all duration-300 translate-x-16"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-sage w-8"
                    : "bg-sand w-3 hover:bg-mocha-light"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
