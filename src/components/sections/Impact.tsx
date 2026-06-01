'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import SectionWrapper from '../SectionWrapper';

function AnimCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const inc = end / 120;
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 50000, suffix: '+', label: 'Students Impacted', icon: '🎓' },
  { value: 1200, suffix: '+', label: 'Schools Onboarded', icon: '🏫' },
  { value: 28, suffix: '', label: 'States Covered', icon: '🗺️' },
  { value: 95, suffix: '%', label: 'Satisfaction Rate', icon: '⭐' },
];

const comparisons = [
  {
    category: 'Learning Outcomes',
    before: { value: '45%', desc: 'Students meeting grade-level expectations' },
    after: { value: '82%', desc: 'Students meeting grade-level expectations' },
  },
  {
    category: 'Teacher Productivity',
    before: { value: '3hrs', desc: 'Daily time spent on admin tasks' },
    after: { value: '45min', desc: 'Daily time spent on admin tasks' },
  },
  {
    category: 'Student Engagement',
    before: { value: '52%', desc: 'Average daily active learning time' },
    after: { value: '89%', desc: 'Average daily active learning time' },
  },
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="impact">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron font-semibold text-sm rounded-full mb-4"
        >
          OUR IMPACT
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4"
        >
          Real Results,{' '}
          <span className="gradient-text">Real Impact</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-charcoal-light text-lg max-w-2xl mx-auto"
        >
          Measurable improvements across every metric that matters in education.
        </motion.p>
      </div>

      {/* Stats */}
      <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl bg-gradient-to-br from-saffron/5 to-royal/5 border border-saffron/10"
          >
            <span className="text-3xl mb-3 block">{stat.icon}</span>
            <div className="text-3xl sm:text-4xl font-bold text-charcoal mb-1">
              <AnimCounter end={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-charcoal-light">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Before vs After */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-charcoal text-center mb-8">
          Before vs After <span className="text-saffron">EduSpark</span>
        </h3>
        <div className="space-y-6">
          {comparisons.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="text-sm font-semibold text-royal mb-4 uppercase tracking-wide">
                {item.category}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-50 border border-red-100">
                  <div className="text-xs font-semibold text-red-400 mb-2 uppercase">Before</div>
                  <div className="text-2xl font-bold text-red-600 mb-1">{item.before.value}</div>
                  <div className="text-sm text-charcoal-light">{item.before.desc}</div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <div className="text-xs font-semibold text-emerald-500 mb-2 uppercase">After</div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">{item.after.value}</div>
                  <div className="text-sm text-charcoal-light">{item.after.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
