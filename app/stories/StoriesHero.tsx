"use client";

import { motion } from "motion/react";
import "./StoriesHero.css";

export default function StoriesHero() {
  return (
    <section className="stories-hero">
      {/* Background grain */}
      <div className="stories-hero-noise" />

      {/* Small top label */}
      <motion.div
        className="stories-hero-label"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span>01</span>
        <span>STORIES</span>
      </motion.div>

      {/* Main heading */}
      <div className="stories-hero-heading">
        <motion.p
          className="stories-hero-kicker"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          A collection of moments
        </motion.p>

        <h1>
          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            The moments
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            we keep
          </motion.span>

          <motion.span
            className="stories-hero-outline"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            coming back to.
          </motion.span>
        </h1>
      </div>

      {/* Hero image */}
      <motion.div
        className="stories-hero-image-wrap"
        initial={{ opacity: 0, scale: 1.12, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="stories-hero-image"
          animate={{
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Bottom information */}
      <motion.div
        className="stories-hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <div className="stories-hero-description">
          Celebrations, quiet glances,
          <br />
          and everything in between.
        </div>

        <div className="stories-hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span className="stories-hero-arrow">↓</span>
        </div>
      </motion.div>
    </section>
  );
}