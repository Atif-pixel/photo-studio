"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import "./Story.css";
import Image from "next/image";

/* =========================================================
   COUPLE DATA
   8 COUPLES / 8 STORY BLOCKS
========================================================= */

const couples = [
  {
    number: "01",
    couple: "Colin & Vaidehi",
    location: "Pune · Maharashtra",
    year: "2026",
    description:
      "Two people, one beautiful beginning, and all the little moments that made it theirs.",
    cover: "/storypage/couple1/cover.jpg",
    images: [
      "/storypage/couple1/6.jpg",
      "/storypage/couple1/2.jpg",
      "/storypage/couple1/3.jpg",
      "/storypage/couple1/4.jpg",
      "/storypage/couple1/5.jpg",
      "/storypage/couple1/1.jpg",
      "/storypage/couple1/7.jpg",
      "/storypage/couple1/8.jpg",
      "/storypage/couple1/9.jpg",
      "/storypage/couple1/10.jpg",
      "/storypage/couple1/11.jpg",
      "/storypage/couple1/12.jpg",
      "/storypage/couple1/13.jpg",
      "/storypage/couple1/14.jpg",
      "/storypage/couple1/15.jpg",
      "/storypage/couple1/16.jpg",
    ],
  },
  {
    number: "02",
    couple: "Pratik & Tana",
    location: "Goa · Maharashtra",
    year: "2026",
    description:
      "A celebration filled with sunlight, laughter, music, and two people completely lost in each other.",
    cover: "/storypage/couple2/cover.jpg",
    images: [
      "/storypage/couple2/1.jpg",
      "/storypage/couple2/2.jpg",
      "/storypage/couple2/3.jpg",
      "/storypage/couple2/4.jpg",
      "/storypage/couple2/5.jpg",
      "/storypage/couple2/6.jpg",
      "/storypage/couple2/7.jpg",
      "/storypage/couple2/8.jpg",
      "/storypage/couple2/9.jpg",
      "/storypage/couple2/10.jpg",
      "/storypage/couple2/11.jpg",
      "/storypage/couple2/12.jpg",
      "/storypage/couple2/13.jpg",
      "/storypage/couple2/14.jpg",
      "/storypage/couple2/15.jpg",
      "/storypage/couple2/16.jpg",
    ],
  },
  {
    number: "03",
    couple: "Rohit & Lucy",
    location: "Jaipur · Rajasthan",
    year: "2026",
    description:
      "A day of colour, emotion, quiet glances, and memories that deserved to be remembered exactly as they happened.",
    cover: "/storypage/couple3/cover.jpg",
    images: [
      "/storypage/couple3/1.jpg",
      "/storypage/couple3/2.jpg",
      "/storypage/couple3/3.jpg",
      "/storypage/couple3/4.jpg",
      "/storypage/couple3/5.jpg",
      "/storypage/couple3/6.jpg",
      "/storypage/couple3/7.jpg",
      "/storypage/couple3/8.jpg",
      "/storypage/couple3/9.jpg",
      "/storypage/couple3/10.jpg",
      "/storypage/couple3/11.jpg",
      "/storypage/couple3/12.jpg",
      "/storypage/couple3/13.jpg",
      "/storypage/couple3/14.jpg",
      "/storypage/couple3/15.jpg",
      "/storypage/couple3/16.jpg",
    ],
  },
  {
    number: "04",
    couple: "Tushar & Nidhi",
    location: "Mumbai · Maharashtra",
    year: "2026",
    description:
      "Some stories are loud. Some are quiet. Theirs was made of all the beautiful moments in between.",
    cover: "/storypage/couple4/cover.jpg",
    images: [
      "/storypage/couple4/1.jpg",
      "/storypage/couple4/2.jpg",
      "/storypage/couple4/3.jpg",
      "/storypage/couple4/4.jpg",
      "/storypage/couple4/5.jpg",
      "/storypage/couple4/6.jpg",
      "/storypage/couple4/7.jpg",
      "/storypage/couple4/8.jpg",
      "/storypage/couple4/9.jpg",
      "/storypage/couple4/10.jpg",
      "/storypage/couple4/11.jpg",
      "/storypage/couple4/12.jpg",
      "/storypage/couple4/13.jpg",
      "/storypage/couple4/14.jpg",
      "/storypage/couple4/15.jpg",
      "/storypage/couple4/16.jpg",
    ],
  },
  {
    number: "05",
    couple: "Chirag & Angel",
    location: "Udaipur · Rajasthan",
    year: "2026",
    description:
      "A beautiful gathering of families, old friends, new beginnings, and one unforgettable promise.",
    cover: "/storypage/couple5/cover.jpg",
    images: [
      "/storypage/couple5/1.jpg",
      "/storypage/couple5/2.jpg",
      "/storypage/couple5/3.jpg",
      "/storypage/couple5/4.jpg",
      "/storypage/couple5/5.jpg",
      "/storypage/couple5/6.jpg",
      "/storypage/couple5/7.jpg",
      "/storypage/couple5/8.jpg",
      "/storypage/couple5/9.jpg",
      "/storypage/couple5/10.jpg",
      "/storypage/couple5/11.jpg",
      "/storypage/couple5/12.jpg",
      "/storypage/couple5/13.jpg",
      "/storypage/couple5/14.jpg",
      "/storypage/couple5/15.jpg",
      "/storypage/couple5/16.jpg",
    ],
  },
  {
    number: "06",
    couple: "Parth & Shradha",
    location: "Delhi · India",
    year: "2026",
    description:
      "From nervous smiles to wild celebrations, every frame became a small piece of their beginning.",
    cover: "/storypage/couple6/cover.jpg",
    images: [
      "/storypage/couple6/1.jpg",
      "/storypage/couple6/2.jpg",
      "/storypage/couple6/3.jpg",
      "/storypage/couple6/4.jpg",
      "/storypage/couple6/5.jpg",
      "/storypage/couple6/6.jpg",
      "/storypage/couple6/7.jpg",
      "/storypage/couple6/8.jpg",
      "/storypage/couple6/9.jpg",
      "/storypage/couple6/10.jpg",
      "/storypage/couple6/11.jpg",
      "/storypage/couple6/12.jpg",
      "/storypage/couple6/13.jpg",
      "/storypage/couple6/14.jpg",
      "/storypage/couple6/15.jpg",
    ],
  },
  {
    number: "07",
    couple: "Akshay & Eesha",
    location: "Bangalore · Karnataka",
    year: "2026",
    description:
      "A story of two people, surrounded by the people they love, making memories without even trying.",
    cover: "/storypage/couple7/1.jpg",
    images: [
      "/storypage/couple7/cover.jpg",
      "/storypage/couple7/2.jpg",
      "/storypage/couple7/3.jpg",
      "/storypage/couple7/4.jpg",
      "/storypage/couple7/5.jpg",
      "/storypage/couple7/6.jpg",
      "/storypage/couple7/7.jpg",
      "/storypage/couple7/8.jpg",
      "/storypage/couple7/9.jpg",
      "/storypage/couple7/10.jpg",
    ],
  },
  {
    number: "08",
    couple: "Varun & Rutuja",
    location: "Jodhpur · Rajasthan",
    year: "2026",
    description:
      "One last dance, a thousand little memories, and a beginning that felt like it had always been waiting for them.",
    cover: "/storypage/couple8/cover.jpg",
    images: [
      "/storypage/couple8/1.jpg",
      "/storypage/couple8/2.jpg",
      "/storypage/couple8/3.jpg",
      "/storypage/couple8/4.jpg",
      "/storypage/couple8/5.jpg",
      "/storypage/couple8/6.jpg",
      "/storypage/couple8/7.jpg",
      "/storypage/couple8/8.jpg",
      "/storypage/couple8/9.jpg",
      "/storypage/couple8/10.jpg",
    ],
  },
];

/* =========================================================
   PHOTO SPLASH
========================================================= */

function PhotoSplash({
  images,
  reversed,
}: {
  images: string[];
  reversed: boolean;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const updateScreenSize = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateScreenSize();

    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  const desktopThrowPositions = [
    { x: -300, y: -160, rotate: -12, scale: 1 },
    { x: -470, y: 40, rotate: 8, scale: 0.9 },
    { x: -650, y: -100, rotate: -6, scale: 0.82 },
    { x: -800, y: 120, rotate: 11, scale: 0.95 },
    { x: -560, y: 200, rotate: -9, scale: 0.78 },
    { x: -350, y: 150, rotate: 5, scale: 0.88 },
    { x: -700, y: -220, rotate: 13, scale: 0.82 },
    { x: -880, y: -30, rotate: -7, scale: 0.75 },
  ];

  const mobileThrowPositions = [
    { x: -35, y: -45, rotate: -8, scale: 0.9 },
    { x: -55, y: 25, rotate: 6, scale: 0.82 },
    { x: -75, y: -25, rotate: -5, scale: 0.78 },
    { x: -95, y: 45, rotate: 8, scale: 0.85 },
    { x: -65, y: 55, rotate: -7, scale: 0.76 },
    { x: -40, y: 35, rotate: 4, scale: 0.82 },
    { x: -85, y: -55, rotate: 9, scale: 0.78 },
    { x: -100, y: -10, rotate: -6, scale: 0.72 },
  ];

  const throwPositions = isMobile
    ? mobileThrowPositions
    : desktopThrowPositions;

  return (
    <motion.div
      className="story-splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="story-splash-track">
        {images.map((image, index) => {
          const position =
            throwPositions[index % throwPositions.length];

          const direction = reversed ? -1 : 1;

          return (
            <motion.div
              key={`${image}-${index}`}
              className={`story-splash-image story-splash-image-${index % 6}`}
              initial={{
                x: 0,
                y: 0,
                scale: 0.18,
                rotate: 0,
                opacity: 0,
              }}
              animate={{
                x: [
                  0,
                  position.x * direction,
                  position.x * direction,
                  position.x * 0.94 * direction,
                  0,
                ],
                y: [
                  0,
                  position.y,
                  position.y,
                  position.y * 0.94,
                  0,
                ],
                rotate: [
                  0,
                  position.rotate,
                  position.rotate,
                  position.rotate * 0.7,
                  0,
                ],
                scale: [
                  0.18,
                  position.scale,
                  position.scale,
                  position.scale * 0.92,
                  0.18,
                ],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 14 + (index % 4) * 2,
                delay: index * 1.2,
                repeat: Infinity,
                repeatDelay: 0.5,
                times: [0, 0.22, 0.52, 0.78, 1],
                ease: [
                  "easeOut",
                  "easeInOut",
                  "easeInOut",
                  "easeIn",
                ],
              }}
              style={{
                zIndex: 10 + (index % 8),
              }}
            >
              <img
                src={image}
                alt=""
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="story-splash-fade story-splash-fade-top" />
      <div className="story-splash-fade story-splash-fade-bottom" />
    </motion.div>
  );
}

/* =========================================================
   SINGLE STORY
========================================================= */

function StoryItem({
  couple,
  index,
}: {
  couple: (typeof couples)[number];
  index: number;
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);

  const reversed = index % 2 !== 0;

  return (
    <section
      className={`story-section ${
        reversed ? "story-section-reversed" : ""
      }`}
    >
      <div className="story-noise" />

      <motion.div
        className="story-label"
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <span>{couple.number}</span>
        <span>STORIES</span>
      </motion.div>

      <div className="story-left">
        <AnimatePresence mode="wait">
          {!galleryOpen ? (
            <motion.div
              key="story-copy"
              className="story-copy"
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -80,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="story-kicker">
                A collection of moments
              </p>

              <h2>
                The people
                <br />
                <span>behind</span>
                <br />
                <em>the photographs.</em>
              </h2>

              <p className="story-description">
                Every celebration has
                its own rhythm.
                <br />
                This is the story we were
                lucky enough to witness.
              </p>
            </motion.div>
          ) : (
            <PhotoSplash
              key="photo-splash"
              images={couple.images}
              reversed={reversed}
            />
          )}
        </AnimatePresence>
      </div>

      <motion.div
        className={`story-folder-wrapper ${
          galleryOpen ? "story-folder-open" : ""
        }`}
        initial={{
          opacity: 0,
          x: 60,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.button
          type="button"
          className="story-folder"
          onClick={() => setGalleryOpen(!galleryOpen)}
          whileHover="hover"
          whileTap={{
            scale: 0.985,
          }}
        >
          <motion.div
            className="story-folder-tab"
            variants={{
              hover: {
                y: -5,
              },
            }}
          />

          <motion.div
            className="story-folder-image"
            variants={{
              hover: {
                scale: 1.035,
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <img
              src={couple.cover}
              alt={couple.couple}
            />
          </motion.div>

          <div className="story-folder-overlay" />

          <div className="story-folder-info">
            <div className="story-folder-top">
              <span>{couple.number}</span>
              <span>{couple.year}</span>
            </div>

            <div className="story-folder-bottom">
              <div>
                <span className="story-folder-label">
                  A STORY OF
                </span>

                <strong>{couple.couple}</strong>

                <span>{couple.location}</span>
              </div>

              <motion.span
                className="story-folder-open-text"
                variants={{
                  hover: {
                    x: 5,
                  },
                }}
              >
                {galleryOpen ? "CLOSE ×" : "OPEN →"}
              </motion.span>
            </div>
          </div>
        </motion.button>
      </motion.div>

      {/* <div className="story-bottom">
        <span>LOVE STORIES / {couple.year}</span>

        <span>
          {galleryOpen
            ? "EXPLORE THEIR STORY"
            : "SELECT THE STORY"}
        </span>
      </div> */}
    </section>
  );
}

/* =========================================================
   ALL STORIES
========================================================= */

export default function Story() {
  return (
    <div className="stories-container">
      {couples.map((couple, index) => (
        <StoryItem
          key={couple.number}
          couple={couple}
          index={index}
        />
      ))}
    </div>
  );
}