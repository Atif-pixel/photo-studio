
"use client";

import { useEffect, useRef } from "react";
import "./StorySection.css";
import Image from "next/image";

type Story = {
  id: number;
  width: number;
  height: number;
  label: string;
  image: string;
};

const stories: Story[] = [
  { id: 1, width: 1200, height: 800, label: "IMAGE 01", image: "/homestory/storysection/1.jpg" },
  { id: 2, width: 600, height: 800, label: "IMAGE 02", image: "/homestory/storysection/2.jpg" },
  { id: 3, width: 800, height: 1000, label: "IMAGE 03", image: "/homestory/storysection/3.jpg" },
  { id: 4, width: 600, height: 800, label: "IMAGE 04", image: "/homestory/storysection/4.jpg" },
  { id: 5, width: 800, height: 1000, label: "IMAGE 05", image: "/homestory/storysection/5.jpg" },
  { id: 6, width: 1200, height: 800, label: "IMAGE 06", image: "/homestory/storysection/6.jpg" },
  { id: 7, width: 600, height: 800, label: "IMAGE 07", image: "/homestory/storysection/7.jpg" },
  { id: 8, width: 800, height: 1000, label: "IMAGE 08", image: "/homestory/storysection/8.jpg" },
  { id: 9, width: 1200, height: 800, label: "IMAGE 09", image: "/homestory/storysection/9.jpg" },
  { id: 10, width: 600, height: 800, label: "IMAGE 10", image: "/homestory/storysection/10.jpg" },
  { id: 11, width: 800, height: 1000, label: "IMAGE 11", image: "/homestory/storysection/11.jpg" },
  { id: 12, width: 1200, height: 800, label: "IMAGE 12", image: "/homestory/storysection/12.jpg" },
];

/*
 * We render multiple copies of the same
 * stories so the world never visually ends.
 */
const repeatedStories = Array.from(
  { length: 4 },
  (_, group) =>
    stories.map((story) => ({
      ...story,
      uniqueId: `${group}-${story.id}`,
      originalId: story.id,
    }))
).flat();

export default function StorySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const gallery = galleryRef.current;
    const world = worldRef.current;

    if (!gallery || !world) return;

    let animationFrame = 0;

    /*
     * ------------------------------------------------
     * CAMERA
     * ------------------------------------------------
     */

    let cameraZ = 0;

    let cameraX = 0;
    let cameraY = 0;

    let targetCameraX = 0;
    let targetCameraY = 0;

    let lastTime = performance.now();

    /*
     * ------------------------------------------------
     * INFINITE WORLD
     * ------------------------------------------------
     */

    const DEPTH_CYCLE = 7200;

    /*
     * Large spatial layout.
     */

    const positions = repeatedStories.map((_, index) => {
      const originalIndex = index % stories.length;

      const column = originalIndex % 5;
      const row = Math.floor(originalIndex / 5);

      const group = Math.floor(index / stories.length);

      const xPatterns = [
        -620,
        -300,
        40,
        350,
        650,
      ];

      const yPatterns = [
        -300,
        180,
        -100,
        260,
        -250,
      ];

      return {
        x:
          xPatterns[column] +
          Math.sin(index * 1.37) * 100,

        y:
          yPatterns[column] +
          Math.cos(index * 1.21) * 90,

        z:
          group * 1800 +
          originalIndex * 145,

        rotation:
          Math.sin(index * 2.1) * 3,

        originalIndex,
      };
    });

    /*
     * ------------------------------------------------
     * POINTER
     * ------------------------------------------------
     */

    const handlePointerMove = (event: PointerEvent) => {
      const rect = gallery.getBoundingClientRect();

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!inside) {
        targetCameraX = 0;
        targetCameraY = 0;
        return;
      }

      const normalizedX =
        ((event.clientX - rect.left) /
          rect.width -
          0.5) *
        2;

      const normalizedY =
        ((event.clientY - rect.top) /
          rect.height -
          0.5) *
        2;

      targetCameraX = normalizedX * 70;
      targetCameraY = normalizedY * 45;
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    /*
     * ------------------------------------------------
     * AUTOMATIC CINEMATIC ANIMATION
     * ------------------------------------------------
     */

    const update = (time: number) => {
      const delta =
        Math.min(
          32,
          Math.max(0, time - lastTime)
        ) / 16.67;

      lastTime = time;

      /*
       * Camera automatically moves forward.
       * No mouse wheel or manual scrolling required.
       */

      cameraZ -= 1.5 * delta;

      /*
       * Keep cameraZ from growing infinitely.
       */

      if (cameraZ > DEPTH_CYCLE * 100) {
        cameraZ -= DEPTH_CYCLE * 50;
      }

      if (cameraZ < -DEPTH_CYCLE * 100) {
        cameraZ += DEPTH_CYCLE * 50;
      }

      /*
       * Smooth mouse camera movement.
       */

      cameraX +=
        (targetCameraX - cameraX) *
        0.055 *
        delta;

      cameraY +=
        (targetCameraY - cameraY) *
        0.055 *
        delta;

      /*
       * ------------------------------------------------
       * CINEMATIC CAMERA
       * ------------------------------------------------
       */

      const cinematicX =
        Math.sin(cameraZ * 0.0008) * 35;

      const cinematicY =
        Math.cos(cameraZ * 0.0007) * 25;

      const cameraRotate =
        Math.sin(cameraZ * 0.00045) * 1.5;

      world.style.transform = `
        translate3d(
          ${-cameraX - cinematicX}px,
          ${-cameraY - cinematicY}px,
          0
        )
        rotateZ(${cameraRotate}deg)
      `;

      /*
       * ------------------------------------------------
       * CARDS
       * ------------------------------------------------
       */

      cardRefs.current.forEach(
        (card, index) => {
          if (!card) return;

          const position = positions[index];

          /*
           * DEPTH WRAPPING
           */

          let relativeZ =
            position.z - cameraZ;

          relativeZ =
            ((relativeZ +
              DEPTH_CYCLE / 2) %
              DEPTH_CYCLE) -
            DEPTH_CYCLE / 2;

          /*
           * DISTANCE FROM CAMERA
           */

          const distance =
            Math.abs(relativeZ);

          /*
           * APPROACH FACTOR
           */

          const approach =
            Math.max(
              0,
              1 -
                distance /
                  1300
            );

          /*
           * STRONGER DEPTH SCALING
           */

          const scale =
            0.48 +
            approach * 1.05;

          /*
           * OPACITY
           */

          let opacity =
            0.08 +
            approach * 0.95;

          if (relativeZ < -500) {
            opacity *= Math.max(
              0,
              1 +
                relativeZ /
                  500
            );
          }

          if (relativeZ > 1400) {
            opacity *= Math.max(
              0,
              1 -
                (relativeZ - 1400) /
                  900
            );
          }

          /*
           * CINEMATIC DRIFT
           */

          const driftX =
            Math.sin(
              cameraZ * 0.0012 +
                index * 1.73
            ) * 45;

          const driftY =
            Math.cos(
              cameraZ * 0.001 +
                index * 1.31
            ) * 35;

          /*
           * CARDS DON'T TRAVEL PERFECTLY STRAIGHT
           */

          const waveX =
            Math.sin(
              cameraZ * 0.0017 +
                index * 0.85
            ) * 80;

          const waveY =
            Math.cos(
              cameraZ * 0.0013 +
                index * 0.72
            ) * 55;

          /*
           * SLIGHT PERSPECTIVE ROTATION
           */

          const rotateY =
            Math.sin(
              index * 1.7
            ) * 6;

          const rotateX =
            Math.cos(
              index * 1.3
            ) * 5;

          /*
           * FINAL CARD TRANSFORM
           */

          card.style.transform = `
            translate3d(
              ${position.x +
                driftX +
                waveX}px,
              ${position.y +
                driftY +
                waveY}px,
              ${relativeZ}px
            )
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            rotateZ(${position.rotation}deg)
            scale(${scale})
          `;

          card.style.opacity =
            String(
              Math.max(
                0,
                Math.min(1, opacity)
              )
            );

          /*
           * DEPTH SORTING
           */

          card.style.zIndex =
            String(
              Math.round(
                20000 -
                  relativeZ
              )
            );
        }
      );

      animationFrame =
        requestAnimationFrame(update);
    };

    animationFrame =
      requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );
    };
  }, []);

  return (
    <section className="story-section">
      {/* --------------------------------
          HEADER
      -------------------------------- */}

      <div className="story-heading">
        <div className="story-index">
          <span>04</span>

          <span className="story-line" />

          <span>
            Selected Stories
          </span>
        </div>

        <div className="story-heading-content">
          <h2>
            Moments
            <br />
            <span>in motion.</span>
          </h2>

          <p>
            A collection of celebrations,
            quiet moments and unforgettable
            stories we've had the privilege
            to capture.
          </p>
        </div>
      </div>

      {/* --------------------------------
          INFINITE 3D GALLERY
      -------------------------------- */}

      <div
        ref={galleryRef}
        className="story-gallery"
      >
        <div
          ref={worldRef}
          className="story-world"
        >
          {repeatedStories.map(
            (story, index) => (
              <div
                key={story.uniqueId}
                ref={(element) => {
                  cardRefs.current[index] =
                    element;
                }}
                className="story-card"
              >
                <div className="story-card-inner">
                  <div className="story-placeholder">
                    <Image
                      src={story.image}
                      alt={`Wedding story ${story.originalId}`}
                      fill
                      sizes="(max-width: 768px) 80vw, 40vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="story-card-number">
                    {String(
                      story.originalId
                    ).padStart(2, "0")}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="story-gallery-hint">
          <span>
            A continuous journey through our stories
          </span>
        </div>
      </div>

      {/* --------------------------------
          FOOTER
      -------------------------------- */}

      <div className="story-footer">
        <span>
          Every frame has a feeling
        </span>

        <span>
          04 — 05
        </span>
      </div>
    </section>
  );
}
