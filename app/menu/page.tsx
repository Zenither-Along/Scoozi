"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Leaf, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { categories, menuItems, getItemsByCategory, MenuItem } from "@/lib/menu-data";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = getItemsByCategory(activeCategory);
  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="relative py-32 bg-linear-to-br from-sand via-cream to-blush/30">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-10 right-20 w-72 h-72 rounded-full bg-sage/30 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-terracotta/20 blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-mocha-light hover:text-mocha transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-mocha mb-6"
          >
            Our Menu
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-mocha-light text-lg md:text-xl max-w-2xl mx-auto"
          >
            Discover the authentic flavors of our region, crafted with love 
            and generations of culinary tradition
          </motion.p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            {/* Mobile: Horizontal scroll */}
            <div className="flex overflow-x-auto pb-4 gap-3 md:flex-wrap md:justify-center md:overflow-visible scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`shrink-0 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-mocha text-cream shadow-lg scale-105"
                      : "bg-sand/50 text-mocha hover:bg-sand"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Category description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center text-mocha-light mt-6"
              >
                {currentCategory?.description}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Menu Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item: MenuItem, index: number) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-4/3 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-linear-to-br from-sand to-blush/50 group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-mocha/0 group-hover:bg-mocha/10 transition-colors duration-300" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {item.popular && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-sage text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md"
                        >
                          ★ Popular
                        </motion.span>
                      )}
                    </div>
                    
                    {/* Dietary Tags */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      {item.vegetarian && (
                        <span 
                          className="bg-white/95 text-sage-dark p-2 rounded-full shadow-md"
                          title="Vegetarian"
                        >
                          <Leaf size={16} />
                        </span>
                      )}
                      {item.spicy && (
                        <span 
                          className="bg-white/95 text-terracotta p-2 rounded-full shadow-md"
                          title="Spicy"
                        >
                          <Flame size={16} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="font-serif text-2xl text-mocha group-hover:text-sage-dark transition-colors">
                        {item.name}
                      </h3>
                      <span className="shrink-0 font-semibold text-lg text-sage-dark bg-sage/10 px-3 py-1 rounded-full">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-mocha-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-mocha-light text-lg">
                No items found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-sand/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-mocha mb-4">
            Ready to Experience Our Cuisine?
          </h2>
          <p className="text-mocha-light mb-8">
            Reserve your table and let us take you on a culinary journey through Assam
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-mocha text-cream px-8 py-4 rounded-full font-medium hover:bg-mocha-light transition-colors"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </main>
  );
}
