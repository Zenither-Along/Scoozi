"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, StaggerContainer, StaggerItem } from "@/components/ui/Section";
import { menuItems, MenuItem } from "@/lib/menu-data";

// Categories to show on homepage with their data IDs
const homeCategories = [
  { display: "All", id: "all" },
  { display: "Coffee & Tea", id: "coffee-tea" },
  { display: "Light Bites", id: "light-bites" },
  { display: "Traditional", id: "traditional" },
];

// Get items for homepage - either all featured or by category
const getHomeItems = (categoryId: string): MenuItem[] => {
  if (categoryId === "all") {
    // Show 6 popular items when "All" is selected
    return menuItems.filter((item) => item.popular).slice(0, 6);
  }
  // Show items from that category (max 6)
  return menuItems.filter((item) => item.category === categoryId).slice(0, 6);
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayItems = getHomeItems(activeCategory);

  return (
    <Section id="menu" className="py-24 md:py-32 bg-sand/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sage-dark font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Our Offerings
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-mocha"
          >
            Our Signature Selections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-mocha-light mt-4 max-w-xl mx-auto"
          >
            A curated selection of our most beloved dishes
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {homeCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-mocha text-cream shadow-md"
                  : "bg-cream text-mocha hover:bg-mocha/10"
              }`}
            >
              {category.display}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayItems.map((item: MenuItem, index: number) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-cream rounded-2xl overflow-hidden shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-linear-to-br from-sand to-blush/50 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.popular && (
                      <span className="bg-sage text-white text-xs font-medium px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  {/* Tags */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {item.vegetarian && (
                      <span className="bg-cream/90 text-sage-dark p-1.5 rounded-full" title="Vegetarian">
                        <Leaf size={14} />
                      </span>
                    )}
                    {item.spicy && (
                      <span className="bg-cream/90 text-terracotta p-1.5 rounded-full" title="Spicy">
                        <Flame size={14} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl text-mocha">{item.name}</h3>
                    <span className="font-medium text-sage-dark">{item.price}</span>
                  </div>
                  <p className="text-mocha-light text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {displayItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-mocha-light">No items in this category yet.</p>
          </div>
        )}

        {/* View Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-mocha text-cream px-8 py-3 rounded-full font-medium hover:bg-mocha-light transition-colors group"
          >
            View Full Menu
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
