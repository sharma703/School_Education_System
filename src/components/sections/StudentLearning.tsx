'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '../SectionWrapper';

const features = [
  {
    icon: '🧠',
    title: 'Personalized AI Learning',
    description: 'Adaptive algorithms that understand each student\'s pace, strengths, and areas for improvement to create tailored learning paths.',
    color: 'bg-saffron/10 border-saffron/20',
    iconBg: 'from-saffron to-saffron-dark',
  },
  {
    icon: '📝',
    title: 'Smart Assessments',
    description: 'AI-powered assessments that go beyond rote memorization, evaluating critical thinking and conceptual understanding.',
    color: 'bg-royal/10 border-royal-light/20',
    iconBg: 'from-royal to-royal-light',
  },
  {
    icon: '🗺️',
    title: 'Interactive Learning Journeys',
    description: 'Gamified learning modules with progress tracking, badges, and interactive content that keeps students engaged and motivated.',
    color: 'bg-emerald-accent/10 border-emerald-accent/20',
    iconBg: 'from-emerald-accent to-emerald-light',
  },
];

export default function StudentLearning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="students" className="bg-gradient-to-b from-soft-white to-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-royal/10 text-royal font-semibold text-sm rounded-full mb-4"
          >
            FOR STUDENTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-5"
          >
            Every Student Learns{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-royal-light">
              Differently
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-charcoal-light text-lg mb-8 leading-relaxed"
          >
            Our AI-powered platform adapts to each student&#39;s unique learning style,
            providing personalized content, pacing, and support to ensure no child is left behind.
          </motion.p>

          <div ref={ref} className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className={`card-hover rounded-2xl p-5 border ${feature.color} flex gap-4 items-start`}
              >
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center text-2xl`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-charcoal mb-1">{feature.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=500&fit=crop"
              alt="Students learning with technology"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-royal/30 to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 shadow-xl max-w-[200px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-accent to-emerald-light flex items-center justify-center text-white text-sm font-bold">
                A+
              </div>
              <div>
                <div className="text-sm font-bold text-charcoal">Performance</div>
                <div className="text-xs text-emerald-accent">↑ 32% improvement</div>
              </div>
            </div>
          </motion.div>

          {/* Decorative blob */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-saffron/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
