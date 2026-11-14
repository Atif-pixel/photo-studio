"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background YouTube Video */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/_xqOAZk6UCI?autoplay=1&mute=1&loop=1&playlist=_xqOAZk6UCI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3&fs=0"
          title="Wedding Hero Video"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[100vw] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 border-0 pointer-events-none"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="max-w-5xl px-6">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 text-[10px] md:text-xs tracking-[0.5em] uppercase"
          >
            Wedding Photography & Films
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.15,
            }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
          >
            Stories
            <br />
            <span className="italic">
              worth remembering.
            </span>
          </motion.h1>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-lg"
        >
          ↓
        </motion.div>
      </motion.div>

    </section>
  );
}