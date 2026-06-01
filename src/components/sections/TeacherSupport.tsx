'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper from '../SectionWrapper';

const features = [
  { icon: '📋', title: 'AI Lesson Planning', desc: 'Auto-generate curriculum-aligned lesson plans in minutes, saving hours of preparation time.' },
  { icon: '✅', title: 'Automated Grading', desc: 'Instant grading with detailed feedback for assignments, quizzes, and essays using AI.' },
  { icon: '📊', title: 'Classroom Analytics', desc: 'Real-time insights into student engagement, attendance patterns, and learning progress.' },
  { icon: '💬', title: 'Parent Communication', desc: 'Automated progress reports and communication tools to keep parents informed and engaged.' },
];

const dashboardData = {
  attendance: 92,
  avgScore: 78,
  assignmentsGraded: 156,
  hoursaved: 12,
};

export default function TeacherSupport() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <SectionWrapper id="teachers" dark>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-light/5 rounded-full blur-3xl" />

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-charcoal-light/50 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-white font-bold text-lg">Teacher Dashboard</h4>
                <p className="text-gray-400 text-sm">Welcome back, Priya M.</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron to-saffron-dark flex items-center justify-center text-white font-bold text-sm">
                PM
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Attendance', value: `${dashboardData.attendance}%`, color: 'text-emerald-accent' },
                { label: 'Avg Score', value: `${dashboardData.avgScore}%`, color: 'text-saffron' },
                { label: 'Graded', value: dashboardData.assignmentsGraded.toString(), color: 'text-royal-light' },
                { label: 'Hours Saved', value: `${dashboardData.hoursaved}h`, color: 'text-emerald-light' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 border border-white/5 rounded-xl p-3 text-center">
                  <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Progress Bars */}
            <div className="space-y-3">
              {['Science 10A', 'Math 9B', 'English 8C'].map((subject, i) => (
                <div key={subject}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300">{subject}</span>
                    <span className="text-gray-400">{[85, 72, 91][i]}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${[85, 72, 91][i]}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      className={`h-full rounded-full ${
                        i === 0 ? 'bg-gradient-to-r from-saffron to-saffron-light' :
                        i === 1 ? 'bg-gradient-to-r from-royal to-royal-light' :
                        'bg-gradient-to-r from-emerald-accent to-emerald-light'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating notification */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-4 bg-emerald-accent text-white px-4 py-2.5 rounded-xl shadow-lg shadow-emerald-accent/30 text-sm font-semibold"
          >
            ✨ 3 assignments auto-graded
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <div ref={ref}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-saffron/20 text-saffron font-semibold text-sm rounded-full mb-4"
          >
            FOR TEACHERS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
          >
            Empowering Teachers with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-saffron-light">
              AI Superpowers
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg mb-8 leading-relaxed"
          >
            Give teachers the tools they need to focus on what matters most — teaching.
            Our AI handles the heavy lifting so every classroom can thrive.
          </motion.p>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{feature.icon}</span>
                <div>
                  <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
