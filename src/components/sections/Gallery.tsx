'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../SectionWrapper';

const galleryItems = [
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop', title: 'Smart Classroom Setup' },
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop', title: 'Students Collaborating' },
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop', title: 'Teacher in Action' },
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop', title: 'Digital Learning Lab' },
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop', title: 'Group Study Session' },
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop', title: 'Library & Resources' },
  { type: 'video' as const, src: 'https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4', poster: 'https://images.unsplash.com/photo-1523050854058-8df90110c7f1?w=600&h=400&fit=crop', title: 'Classroom Experience' },
  { type: 'image' as const, src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop', title: 'Science Lab Activities' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <SectionWrapper id="gallery" dark>
      <div className="text-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-saffron/20 text-saffron font-semibold text-sm rounded-full mb-4"
        >
          GALLERY
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          See EduSpark in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-saffron-light">
            Action
          </span>
        </motion.h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setLightbox(i)}
            className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
              i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            {item.type === 'video' ? (
              <div className="relative">
                <img
                  src={item.poster}
                  alt={item.title}
                  className="w-full h-full min-h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-saffron/80 transition-colors">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full min-h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 text-white">
                <div className="font-semibold text-sm">{item.title}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm flex items-center gap-1"
              >
                Close
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {galleryItems[lightbox].type === 'video' ? (
                <video
                  autoPlay
                  controls
                  className="w-full rounded-2xl"
                  src={galleryItems[lightbox].src}
                />
              ) : (
                <img
                  src={galleryItems[lightbox].src}
                  alt={galleryItems[lightbox].title}
                  className="w-full rounded-2xl"
                />
              )}

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => setLightbox((lightbox - 1 + galleryItems.length) % galleryItems.length)}
                  className="text-white/70 hover:text-white transition flex items-center gap-1 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                <span className="text-white font-semibold">{galleryItems[lightbox].title}</span>
                <button
                  onClick={() => setLightbox((lightbox + 1) % galleryItems.length)}
                  className="text-white/70 hover:text-white transition flex items-center gap-1 text-sm"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
