"use client";

import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  // Design tokens for footer (overrides global styles)
  const colors = {
    logo: '#a8bca1',        // Sage - accent for brand
    heading: '#f9f7f4',     // Cream - high visibility
    body: 'rgba(249, 247, 244, 0.8)',      // Cream 80%
    label: '#c4a484',       // Terracotta - warm label
    muted: 'rgba(249, 247, 244, 0.5)',     // Cream 50%
    link: 'rgba(249, 247, 244, 0.75)',     // Cream 75%
    icon: '#a8bca1',        // Sage
    socialBg: 'rgba(168, 188, 161, 0.2)',  // Sage 20%
    border: 'rgba(249, 247, 244, 0.08)',   // Subtle divider
  };

  return (
    <footer style={{ backgroundColor: '#f0ede8' }}>
      {/* Main footer with border frame - border only on md+ screens */}
      <div className="md:mx-8 lg:mx-12 md:my-8">
        <div 
          className="md:rounded-3xl overflow-hidden"
          style={{ 
            backgroundColor: '#4a403a',
            border: 'none',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
              {/* Brand */}
              <div className="lg:col-span-2">
                <h2 
                  className="font-serif text-3xl font-semibold mb-4"
                  style={{ color: colors.logo }}
                >
                  Scoozi
                </h2>
                <p 
                  className="max-w-md leading-relaxed mb-6"
                  style={{ color: colors.body }}
                >
                  A place where warmth meets flavor. We craft each cup and dish with love, 
                  creating moments worth savoring in a calm, welcoming space.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: colors.socialBg, color: colors.heading }}
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: colors.socialBg, color: colors.heading }}
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h3 
                  className="font-serif text-xl font-medium mb-5"
                  style={{ color: colors.heading }}
                >
                  Hours
                </h3>
                <div className="space-y-1">
                  <p style={{ color: colors.label }} className="text-sm font-medium">Monday - Friday</p>
                  <p style={{ color: colors.heading }} className="text-lg">7:00 AM - 9:00 PM</p>
                </div>
                <div className="space-y-1 mt-4">
                  <p style={{ color: colors.label }} className="text-sm font-medium">Saturday - Sunday</p>
                  <p style={{ color: colors.heading }} className="text-lg">8:00 AM - 10:00 PM</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 
                  className="font-serif text-xl font-medium mb-5"
                  style={{ color: colors.heading }}
                >
                  Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-start gap-3 transition-colors hover:opacity-90"
                    style={{ color: colors.link }}
                  >
                    <MapPin size={18} style={{ color: colors.icon }} className="shrink-0 mt-1" />
                    <span>Kokrajhar Road, Bodoland<br />Assam, India 783370</span>
                  </a>
                  <a
                    href="tel:+917007070070"
                    className="flex items-center gap-3 transition-colors hover:opacity-90"
                    style={{ color: colors.link }}
                  >
                    <Phone size={18} style={{ color: colors.icon }} className="shrink-0" />
                    <span>+91 70070 70070</span>
                  </a>
                  <a
                    href="mailto:hello@scoozi.in"
                    className="flex items-center gap-3 transition-colors hover:opacity-90"
                    style={{ color: colors.link }}
                  >
                    <Mail size={18} style={{ color: colors.icon }} className="shrink-0" />
                    <span>hello@scoozi.in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div 
              className="mt-12 md:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
              style={{ borderTop: `1px solid ${colors.border}` }}
            >
              <p style={{ color: colors.muted }} className="text-sm">
                © {new Date().getFullYear()} Scoozi. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a 
                  href="#" 
                  className="transition-colors" 
                  style={{ color: colors.muted }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.heading}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.muted}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="transition-colors" 
                  style={{ color: colors.muted }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.heading}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.muted}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
