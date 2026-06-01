'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  Platform: ['Student Learning', 'Teacher Support', 'Inclusive Education', 'School Dashboard', 'AI Features'],
  Resources: ['Documentation', 'API Reference', 'Case Studies', 'Webinars', 'Blog'],
  Company: ['About Us', 'Careers', 'Press', 'Partners', 'Contact'],
};

const socialIcons = [
  { name: 'Twitter', path: 'M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.185S11.97 6.97 12.48 8.49c-3.6-.2-6.8-2-8.9-4.8-.8 1.4-.4 3.1.8 4.1-.7 0-1.3-.2-1.9-.5 0 1.5 1.1 2.8 2.6 3.1-.5.1-1 .2-1.5.1.5 1.4 1.8 2.4 3.4 2.4-1.5 1.2-3.4 1.8-5.2 1.7 1.8 1.1 3.8 1.7 6 1.7 7.2 0 11.1-6 11.1-11.1 0-.2 0-.3 0-.5.8-.6 1.5-1.3 2-2.1Z' },
  { name: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { name: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z' },
  { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-saffron/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-royal-light/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron to-royal flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">
                Edu<span className="text-saffron">Spark</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Transforming school education through AI-powered personalized learning,
              empowering teachers, and creating inclusive classrooms across India.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-saffron/50 transition"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-saffron to-saffron-dark rounded-xl text-sm font-semibold text-white shrink-0"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-saffron/20 transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 fill-current text-gray-400 hover:text-saffron" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-saffron transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 EduSpark. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-saffron transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-saffron transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-saffron transition-colors text-sm">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
