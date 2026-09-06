"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import "./Story.css";

/* =========================================================
   COUPLE DATA
   ONE COUPLE PER STORY SECTION
========================================================= */

const couple = {
  number: "01",
  couple: "Aarav & Meera",
  location: "Pune · Maharashtra",
  year: "2026",

  description:
    "Two people, one beautiful beginning, and all the little moments that made it theirs.",

  cover: "/stories/couple-01/cover.jpg",

  images: [
    "/stories/couple-01/01.jpg",
    "/stories/couple-01/02.jpg",
    "/stories/couple-01/03.jpg",
    "/stories/couple-01/04.jpg",
    "/stories/couple-01/05.jpg",
    "/stories/couple-01/06.jpg",
    "/stories/couple-01/07.jpg",
    "/stories/couple-01/08.jpg",
    "/stories/couple-01/01.jpg",
    "/stories/couple-01/02.jpg",
    "/stories/couple-01/03.jpg",
    "/stories/couple-01/04.jpg",
    "/stories/couple-01/05.jpg",
    "/stories/couple-01/06.jpg",
    "/stories/couple-01/07.jpg",
    "/stories/couple-01/08.jpg",
  ],
};


/* =========================================================
   PHOTO SPLASH
========================================================= */

function PhotoSplash({
  images,
}: {
  images: string[];
}) {

  /*
    Each photograph has its own destination.

    The animation is:

    FOLDER
       ↓
    THROW OUT
       ↓
    SCATTER
       ↓
    FLOAT
       ↓
    RETURN
       ↓
    FOLDER
       ↓
    REPEAT
  */

  const throwPositions = [
    {
      x: -300,
      y: -160,
      rotate: -12,
      scale: 1,
    },

    {
      x: -470,
      y: 40,
      rotate: 8,
      scale: 0.9,
    },

    {
      x: -650,
      y: -100,
      rotate: -6,
      scale: 0.82,
    },

    {
      x: -800,
      y: 120,
      rotate: 11,
      scale: 0.95,
    },

    {
      x: -560,
      y: 200,
      rotate: -9,
      scale: 0.78,
    },

    {
      x: -350,
      y: 150,
      rotate: 5,
      scale: 0.88,
    },

    {
      x: -700,
      y: -220,
      rotate: 13,
      scale: 0.82,
    },

    {
      x: -880,
      y: -30,
      rotate: -7,
      scale: 0.75,
    },
  ];


  return (
    <motion.div
      className="story-splash"

      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      exit={{
        opacity: 0,
      }}

      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <div className="story-splash-track">

        {images.map((image, index) => {

          const position =
            throwPositions[
              index % throwPositions.length
            ];

          return (
            <motion.div
              key={`${image}-${index}`}

              className={`story-splash-image story-splash-image-${
                index % 6
              }`}

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
                  position.x,
                  position.x,
                  position.x * 0.94,
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

                opacity: [
                  0,
                  1,
                  1,
                  1,
                  0,
                ],
              }}

              transition={{

                duration:
                  14 + (index % 4) * 2,

                delay:
                  index * 1.2,

                repeat: Infinity,

                repeatDelay: 0.5,

                times: [
                  0,
                  0.22,
                  0.52,
                  0.78,
                  1,
                ],

                ease: [
                  "easeOut",
                  "easeInOut",
                  "easeInOut",
                  "easeIn",
                ],
              }}

              style={{
                zIndex:
                  10 + (index % 8),
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


      {/* ===================================================
          SOFT EDGE FADE
      ==================================================== */}

      <div
        className="
          story-splash-fade
          story-splash-fade-top
        "
      />

      <div
        className="
          story-splash-fade
          story-splash-fade-bottom
        "
      />

    </motion.div>
  );
}


/* =========================================================
   STORY
========================================================= */

export default function Story() {

  const [galleryOpen, setGalleryOpen] =
    useState(false);

  return (
    <section className="story-section">


      {/* ===================================================
          GRAIN
      ==================================================== */}

      <div className="story-noise" />


      {/* ===================================================
          TOP LABEL
      ==================================================== */}

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

        <span>
          {couple.number}
        </span>

        <span>
          STORIES
        </span>

      </motion.div>


      {/* ===================================================
          LEFT SIDE
      ==================================================== */}

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

                <span>
                  behind
                </span>

                <br />

                <em>
                  the photographs.
                </em>

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
            />

          )}

        </AnimatePresence>

      </div>


      {/* ===================================================
          RIGHT SIDE — FIXED FOLDER
      ==================================================== */}

      <motion.div
        className={`story-folder-wrapper ${
          galleryOpen
            ? "story-folder-open"
            : ""
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

          onClick={() =>
            setGalleryOpen(
              !galleryOpen
            )
          }

          whileHover="hover"

          whileTap={{
            scale: 0.985,
          }}
        >

          {/* Folder tab */}

          <motion.div
            className="story-folder-tab"

            variants={{
              hover: {
                y: -5,
              },
            }}
          />


          {/* Couple image */}

          <motion.div
            className="story-folder-image"

            variants={{
              hover: {
                scale: 1.035,
              },
            }}

            transition={{
              duration: 0.8,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >

            <img
              src={couple.cover}
              alt={couple.couple}
            />

          </motion.div>


          {/* Overlay */}

          <div className="story-folder-overlay" />


          {/* Information */}

          <div className="story-folder-info">

            <div className="story-folder-top">

              <span>
                {couple.number}
              </span>

              <span>
                {couple.year}
              </span>

            </div>


            <div className="story-folder-bottom">

              <div>

                <span className="story-folder-label">
                  A STORY OF
                </span>

                <strong>
                  {couple.couple}
                </strong>

                <span>
                  {couple.location}
                </span>

              </div>


              <motion.span
                className="story-folder-open-text"

                variants={{
                  hover: {
                    x: 5,
                  },
                }}
              >

                {galleryOpen
                  ? "CLOSE ×"
                  : "OPEN →"}

              </motion.span>

            </div>

          </div>

        </motion.button>

      </motion.div>


      {/* ===================================================
          BOTTOM
      ==================================================== */}

      <div className="story-bottom">

        <span>
          LOVE STORIES / {couple.year}
        </span>

        <span>

          {galleryOpen
            ? "EXPLORE THEIR STORY"
            : "SELECT THE STORY"}

        </span>

      </div>

    </section>
  );
}