'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { label: 'Students Empowered', value: 50000, suffix: '+', icon: '🎓' },
  { label: 'Schools Connected', value: 1200, suffix: '+', icon: '🏫' },
  { label: 'Qualified Teachers', value: 8500, suffix: '+', icon: '👨‍🏫' },
  { label: 'Success Rate', value: 95, suffix: '%', icon: '📈' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=1920&q=80"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/60 to-charcoal/80" />
        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-soft-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          Transforming School{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-saffron-light">
            Education
          </span>{' '}
          <br className="hidden sm:block" />
          Through{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-accent to-emerald-light">
            AI & Innovation
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Empowering students with personalized learning, supporting teachers with AI tools,
          and enabling schools to make data-driven decisions for a brighter future.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,122,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-saffron to-saffron-dark text-white font-bold rounded-2xl text-lg shadow-xl shadow-saffron/25 transition-all w-full sm:w-auto"
          >
            Get Started Free
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-2xl text-lg hover:bg-white/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Floating Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card rounded-2xl p-5 text-center cursor-default"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl sm:text-3xl font-bold text-charcoal">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-charcoal-light mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
