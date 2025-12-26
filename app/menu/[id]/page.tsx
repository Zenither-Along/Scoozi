"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Flame, Leaf, Clock, Star, Share2 } from "lucide-react";
import { menuItems, MenuItem } from "@/lib/menu-data";

export default function FoodItemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Unwrap params using React.use()
  const { id } = use(params);

  const item = menuItems.find((p) => p.id === Number(id));

  if (!item) {
    notFound();
  }

  const relatedItems = menuItems
    .filter((p) => p.category === item.category && p.id !== item.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-sand/20 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 text-mocha hover:text-mocha-light transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Menu</span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square lg:aspect-4/3 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-6 left-6 flex gap-3">
              {item.vegetarian && (
                <span className="bg-cream/95 backdrop-blur-sm text-sage-dark px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                  <Leaf className="w-4 h-4" />
                  Vegetarian
                </span>
              )}
              {item.spicy && (
                <span className="bg-cream/95 backdrop-blur-sm text-terracotta px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                  <Flame className="w-4 h-4" />
                  Spicy
                </span>
              )}
            </div>
            {item.popular && (
              <div className="absolute top-6 right-6">
                <span className="bg-sage text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  Popular Choice
                </span>
              </div>
            )}
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-mocha mb-6">
              {item.name}
            </h1>
            <div className="text-3xl font-medium text-sage-dark mb-8">
              {item.price}
            </div>

            <div className="prose prose-lg text-mocha-light mb-8 leading-relaxed">
              <p>{item.description}</p>
              <p className="mt-4">
                Made with the freshest ingredients and prepared with care.{" "}
                {item.name} is a testament to our commitment to quality and
                authentic flavors.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 bg-mocha text-cream text-lg font-medium py-4 rounded-full hover:bg-mocha-light transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                Order Now
              </button>
              <button
                className="p-4 rounded-full border-2 border-mocha/10 text-mocha hover:bg-mocha/5 transition-colors"
                title="Share"
              >
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-mocha/10 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-mocha/60 font-semibold mb-2">
                  Category
                </h3>
                <p className="text-mocha capitalize">
                  {item.category.replace("-", " ")}
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-mocha/60 font-semibold mb-2">
                  Preparation Time
                </h3>
                <p className="text-mocha flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  15-20 Mins
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-mocha/10"
          >
            <h2 className="font-serif text-3xl text-mocha mb-10 text-center">
              You Might Also Like
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedItems.map((relatedItem) => (
                <Link
                  href={`/menu/${relatedItem.id}`}
                  key={relatedItem.id}
                  className="group"
                >
                  <div className="bg-cream rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={relatedItem.image}
                        alt={relatedItem.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-xl text-mocha group-hover:text-sage-dark transition-colors">
                          {relatedItem.name}
                        </h3>
                        <span className="font-medium text-sage-dark">
                          {relatedItem.price}
                        </span>
                      </div>
                      <p className="text-mocha-light text-sm line-clamp-2">
                        {relatedItem.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
