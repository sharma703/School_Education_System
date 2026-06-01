'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Mathematics Teacher, DPS Bangalore',
    quote: 'EduSpark has revolutionized how I teach. The AI lesson planner saves me 2 hours daily, and the analytics help me identify struggling students before they fall behind.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'School Principal, KV Delhi',
    quote: 'The school dashboard gave us visibility we never had before. We reduced our dropout rate by 40% in just one academic year using data-driven interventions.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    role: 'Class 10 Student, Mumbai',
    quote: 'The personalized learning path helped me go from scoring 55% to 91% in Science. The gamified modules make studying feel like playing a game!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
  {
    name: 'Dr. Meera Reddy',
    role: 'District Education Officer, Hyderabad',
    quote: 'Implementing EduSpark across 200 schools in our district has been transformative. Teachers are more efficient, students are more engaged, and parents are more involved.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <SectionWrapper id="testimonials" className="bg-gradient-to-b from-soft-white to-white">
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-royal/10 text-royal font-semibold text-sm rounded-full mb-4"
        >
          TESTIMONIALS
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4"
        >
          Voices of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-royal-light">
            Impact
          </span>
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Testimonial Card */}
        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="glass-card rounded-3xl p-8 sm:p-10 text-center w-full absolute"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-saffron" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-lg sm:text-xl text-charcoal leading-relaxed mb-6 italic">
                &ldquo;{testimonials[active].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <img
                  src={testimonials[active].avatar}
                  alt={testimonials[active].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-saffron/20"
                />
                <div className="text-left">
                  <div className="font-bold text-charcoal">{testimonials[active].name}</div>
                  <div className="text-sm text-charcoal-light">{testimonials[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-saffron hover:text-saffron transition-colors shadow-sm"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-saffron' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-saffron hover:text-saffron transition-colors shadow-sm"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
