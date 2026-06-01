'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '../SectionWrapper';

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Analytics',
    description: 'Deep learning algorithms that predict outcomes and personalize every student\'s journey.',
    gradient: 'from-saffron to-saffron-dark',
  },
  {
    icon: '🎮',
    title: 'Gamified Learning',
    description: 'Points, badges, and leaderboards that make learning fun, competitive, and rewarding.',
    gradient: 'from-royal to-royal-light',
  },
  {
    icon: '📱',
    title: 'Mobile-First Platform',
    description: 'Full-featured mobile app that works even on low-bandwidth connections and basic smartphones.',
    gradient: 'from-emerald-accent to-emerald-light',
  },
  {
    icon: '🔒',
    title: 'Data Security',
    description: 'Enterprise-grade encryption and FERPA-compliant data handling to protect student information.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: '🌐',
    title: 'Offline Support',
    description: 'Download lessons and continue learning without internet. Auto-sync when connection is restored.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: '📚',
    title: 'Content Library',
    description: 'Over 50,000 curated learning resources aligned with CBSE, ICSE, and state board curricula.',
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="features" dark>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-saffron/5 rounded-full blur-3xl" />

      <div className="text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-saffron/20 text-saffron font-semibold text-sm rounded-full mb-4"
        >
          PLATFORM FEATURES
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Everything You Need to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-saffron-light">
            Transform Education
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          A comprehensive suite of tools designed to revolutionize how schools teach, learn, and grow.
        </motion.p>
      </div>

      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group cursor-default hover:border-saffron/30 transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            <div className="mt-4 flex items-center text-saffron text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
