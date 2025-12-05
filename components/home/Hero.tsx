"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/hero-bg.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.8) contrast(1.2) saturate(0.8) sepia(0.15)',
          }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif italic text-xl md:text-2xl mb-4"
            style={{ color: '#e8ddd0' }}
          >
            A Taste of Goodness
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-normal mb-6"
            style={{ color: '#f5f0e8' }}
          >
            Scoozi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg max-w-md mx-auto mb-8 leading-relaxed"
            style={{ color: '#d4c4b0' }}
          >
            Where flavor meets comfort. <br />
            Experience the warmth of our hospitality in every cup and every bite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/menu">
              <button 
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#3d3430', 
                  color: '#f5f0e8',
                }}
              >
                View Menu
              </button>
            </Link>
            <Link href="#contact">
              <button 
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#d4a942',
                  border: '2px solid #d4a942',
                }}
              >
                Reserve a Table
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          style={{ color: '#d4c4b0' }}
        >
          <ChevronDown size={24} strokeWidth={2} />
        </motion.a>
      </motion.div>
    </section>
  );
}
