"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const galleryImages = [
  { id: 1, src: "/gallery/gallery-1.jpeg", alt: "Cozy interior with warm lighting", size: "large" },
  { id: 2, src: "/gallery/gallery-2.jpeg", alt: "Latte art being poured", size: "small" },
  { id: 3, src: "/gallery/gallery-3.jpeg", alt: "Fresh pastries display", size: "small" },
  { id: 4, src: "/gallery/gallery-4.jpeg", alt: "Barista at work", size: "medium" },
  { id: 5, src: "/gallery/gallery-5.jpeg", alt: "Table setting with coffee and cake", size: "medium" },
  { id: 6, src: "/gallery/gallery-6.jpeg", alt: "Peaceful outdoor seating area", size: "large" },
];

// Duplicate images to create seamless loop
const loopImages = [...galleryImages, ...galleryImages];

export function Gallery() {
  return (
    <Section id="gallery" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sage-dark font-medium tracking-[0.2em] uppercase text-sm mb-4 text-center"
        >
          Our Space
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-mocha text-center"
        >
          A Glimpse Inside
        </motion.h2>
      </div>

      {/* Infinite Marquee Gallery */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-linear-to-r from-cream to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-linear-to-l from-cream to-transparent z-10" />
        
        <motion.div 
          className="flex gap-6 md:gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          {loopImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className={`relative shrink-0 rounded-2xl overflow-hidden shadow-lg group ${
                image.size === "large"
                  ? "w-[300px] md:w-[400px] aspect-4/5"
                  : image.size === "medium"
                  ? "w-[250px] md:w-[300px] aspect-3/4"
                  : "w-[200px] md:w-[250px] aspect-square"
              }`}
            >
              <div 
                className="absolute inset-0 bg-gray-200 group-hover:scale-110 transition-transform duration-700"
                style={{
                  backgroundImage: `url('${image.src}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Instagram CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12 px-6"
      >
        <a
          href="#"
          className="inline-flex items-center gap-3 text-mocha font-medium hover:text-sage-dark transition-colors group"
        >
          <span>Follow us on Instagram</span>
          <span className="text-xl">@scoozi.cafe</span>
          <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
        </a>
      </motion.div>
    </Section>
  );
}
