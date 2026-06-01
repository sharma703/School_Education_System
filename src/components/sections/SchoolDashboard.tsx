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

const kpis = [
  { label: 'Total Students', value: 12450, suffix: '', icon: '👨‍🎓', change: '+12%', up: true },
  { label: 'Avg Attendance', value: 94, suffix: '%', icon: '📋', change: '+3%', up: true },
  { label: 'Pass Rate', value: 89, suffix: '%', icon: '🏆', change: '+7%', up: true },
  { label: 'Active Teachers', value: 342, suffix: '', icon: '👩‍🏫', change: '+5%', up: true },
];

const performanceData = [
  { subject: 'Mathematics', score: 82, color: 'from-saffron to-saffron-light' },
  { subject: 'Science', score: 88, color: 'from-royal to-royal-light' },
  { subject: 'English', score: 76, color: 'from-emerald-accent to-emerald-light' },
  { subject: 'Hindi', score: 91, color: 'from-purple-500 to-pink-500' },
  { subject: 'Social Studies', score: 84, color: 'from-amber-500 to-orange-500' },
];

export default function SchoolDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="dashboard" className="bg-gradient-to-b from-white to-soft-white">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-royal/10 text-royal font-semibold text-sm rounded-full mb-4"
        >
          SCHOOL DASHBOARD
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4"
        >
          Data-Driven{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-royal-light">
            Decision Making
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-charcoal-light text-lg max-w-2xl mx-auto"
        >
          Give school administrators real-time visibility into performance, attendance, and learning outcomes.
        </motion.p>
      </div>

      <div ref={ref} className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="card-hover glass-card rounded-2xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{kpi.icon}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  kpi.up ? 'bg-emerald-accent/10 text-emerald-accent' : 'bg-red-100 text-red-500'
                }`}>
                  {kpi.change}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-charcoal">
                <AnimCounter end={kpi.value} suffix={kpi.suffix} />
              </div>
              <div className="text-sm text-charcoal-light mt-1">{kpi.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* Performance Chart */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-bold text-charcoal mb-6 text-lg">Subject Performance</h3>
            <div className="space-y-4">
              {performanceData.map((item, i) => (
                <div key={item.subject}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-charcoal">{item.subject}</span>
                    <span className="text-charcoal-light">{item.score}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.score}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + i * 0.15 }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Chart Visual */}
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-bold text-charcoal mb-6 text-lg">Weekly Attendance</h3>
            <div className="flex items-end justify-between gap-2 h-48">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => {
                const heights = [88, 95, 92, 90, 87, 45];
                return (
                  <div key={day} className="flex flex-col items-center flex-1 gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${heights[i]}%` } : {}}
                      transition={{ duration: 0.8, delay: 0.8 + i * 0.1 }}
                      className={`w-full rounded-xl ${
                        i === 5
                          ? 'bg-gray-200'
                          : 'bg-gradient-to-t from-royal to-royal-light'
                      }`}
                      style={{ maxWidth: '48px' }}
                    />
                    <span className="text-xs text-charcoal-light">{day}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
