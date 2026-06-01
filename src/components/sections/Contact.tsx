'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-b from-soft-white to-white">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron font-semibold text-sm rounded-full mb-4"
        >
          GET IN TOUCH
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4"
        >
          Let&apos;s Build the Future of{' '}
          <span className="gradient-text">Education Together</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-charcoal-light text-lg max-w-2xl mx-auto"
        >
          Have a question or want to partner with us? We&apos;d love to hear from you.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/10 transition text-charcoal"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/10 transition text-charcoal"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-charcoal mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/10 transition text-charcoal"
                placeholder="Partnership Inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/10 transition text-charcoal resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-saffron to-saffron-dark text-white font-bold rounded-xl text-lg shadow-lg shadow-saffron/25 hover:shadow-saffron/40 transition-shadow"
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Column: Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '📍', title: 'Visit Us', info: 'Connaught Place, New Delhi, India 110001' },
              { icon: '📧', title: 'Email Us', info: 'hello@eduspark.in' },
              { icon: '📞', title: 'Call Us', info: '+91 11 2345 6789' },
              { icon: '🕐', title: 'Office Hours', info: 'Mon–Fri, 9:00 AM – 6:00 PM IST' },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-4 flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-charcoal text-sm">{item.title}</div>
                  <div className="text-charcoal-light text-sm">{item.info}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[280px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6743753965635!2d77.21810561508096!3d28.632095882416768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EduSpark Office Location"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-charcoal">Follow us:</span>
            {['Twitter', 'LinkedIn', 'YouTube', 'Instagram'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1.5 rounded-lg bg-charcoal/5 text-charcoal-light hover:bg-saffron/10 hover:text-saffron text-sm font-medium transition-colors"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
