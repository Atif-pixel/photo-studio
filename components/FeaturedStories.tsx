
"use client";

import Image from "next/image";
import Link from "next/link";
import InfiniteSpiral from "@/components/InfiniteSpiral";
import { useEffect, useState } from "react";

const videos = [
  "rhHyl_0VjkQ",
  "u03MsuIcepc",
  "6qZK-DiuZa8",
  "2IvsPd-OgXQ",
  "yV6y5nMfCQA",
];

const stories = [
  {
    id: "01",
    couple: "Arjun × Diya",
    location: "Udaipur · 2026",
    image: "/stories/story-01.jpg",
    size: "large",
  },
  {
    id: "02",
    couple: "Colin × Vaidehi",
    location: "Goa · 2026",
    image: "/homestory/couple%201/ColixVaidehi01.jpg",
    size: "medium",
  },
  {
    id: "03",
    couple: "Pratik × Tana",
    location: "Jaipur · 2026",
    image: "/homestory/couple-2/PratikxTana01.jpg",
    size: "medium",
  },
];

const kabirSaraPhotos = [
  {
    src: "/homestory/couple%201/haldi1.jpg",
    alt: "Kabir and Sara wedding moment",
  },
  {
    src: "/homestory/couple%201/wedding1.jpg",
    alt: "Kabir and Sara wedding celebration",
  },
  {
    src: "/homestory/couple%201/haldi2.jpg",
    alt: "Kabir and Sara wedding portrait",
  },
  {
    src: "/homestory/couple%201/sangeet1.jpg",
    alt: "Kabir and Sara wedding ceremony",
  },
  {
    src: "/homestory/couple%201/wedding2.jpg",
    alt: "Kabir and Sara wedding details",
  },
  {
    src: "/homestory/couple%201/sangit2.jpg",
    alt: "Kabir and Sara wedding dance",
  },
];

const rahulRiyaPhotos = [
  {
    src: "/homestory/couple-2/eng1.jpg",
    alt: "Rahul and Riya wedding moment",
  },
  {
    src: "/homestory/couple-2/wedding1.jpg",
    alt: "Rahul and Riya wedding celebration",
  },
  {
    src: "/homestory/couple-2/eng2.jpg",
    alt: "Rahul and Riya wedding portrait",
  },
  {
    src: "/homestory/couple-2/sangeet1.jpg",
    alt: "Rahul and Riya wedding ceremony",
  },
  {
    src: "/homestory/couple-2/wedding2.jpg",
    alt: "Rahul and Riya wedding details",
  },
  {
    src: "/homestory/couple-2/sangeet2.jpg",
    alt: "Rahul and Riya wedding dance",
  },
];

export default function FeaturedStories() {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((current) => (current + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#f2f0eb] px-6 py-24 text-[#171717] md:px-10 md:py-32 lg:px-16 lg:py-40">

      {/* Header */}
      <div className="mx-auto mb-20 max-w-[1400px] md:mb-28">

        <div className="mb-8 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            02
          </span>

          <span className="h-px w-12 bg-black/30" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
            Selected Stories
          </span>
        </div>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <h2 className="max-w-4xl font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.88] tracking-[-0.05em]">
            Stories
            <br />
            <span className="italic">worth keeping.</span>
          </h2>

          <p className="max-w-xs text-sm leading-7 text-black/60 md:pb-2">
            A collection of celebrations, quiet moments, wild dances,
            happy tears and everything in between.
          </p>

        </div>
      </div>

      {/* Stories */}
      <div className="mx-auto max-w-[1400px]">

        {/* Story 01 — Large */}
        <Link
          href="/stories/arjun-diya"
          className="group block cursor-target"
        >
          <article>

            <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[16/9]">

              {/* YouTube Video Morph Slider — Arjun × Diya */}
              {videos.map((video, index) => (
                <iframe
                  key={video}
                  src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&loop=1&playlist=${video}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3&fs=0`}
                  title={`Arjun and Diya wedding video ${index + 1}`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen={false}
                  className={`absolute left-1/2 top-1/2 h-[120%] w-[215%] -translate-x-1/2 -translate-y-1/2 border-0 transition-all duration-[1100ms] ease-in-out ${
                    index === activeVideo
                      ? "scale-100 opacity-100 blur-0"
                      : "scale-[1.08] opacity-0 blur-[8px]"
                  }`}
                  style={{
                    pointerEvents: "none",
                  }}
                />
              ))}

              {/* Image overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

              {/* View story */}
              <div className="absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[9px] uppercase tracking-[0.15em] opacity-0 transition-all duration-500 group-hover:opacity-100 md:bottom-8 md:right-8 md:h-20 md:w-20">
                View
              </div>
            </div>

            <div className="mt-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <h3 className="font-serif text-3xl md:text-4xl">
                {stories[0].couple}
              </h3>

              <div className="flex items-center gap-4">
                <span className="text-[9px] uppercase tracking-[0.25em] text-black/50">
                  {stories[0].id}
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-black/60">
                  {stories[0].location}
                </span>
              </div>
            </div>

          </article>
        </Link>

        {/* Story 02 — Spiral + Offset Story */}
        <div className="mt-28 md:mt-40">

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[42%_58%] lg:gap-12">

            {/* Infinite Spiral — Desktop only */}
            <div className="relative hidden h-[560px] w-full md:block">
              <InfiniteSpiral
                items={kabirSaraPhotos}
                animationMode="auto"
                speed={0.30}
                radius={145}
                cardWidth={105}
                cardHeight={150}
                verticalSpacing={90}
                perspective={900}
                cardRadius={10}
                centerScale={1.15}
                edgeBlur={4}
                cardsPerTurn={7}
                pauseOnHover
                direction="up"
                rotation={0}
                cardTilt={0}
                edgeFade={0.4}
                imageFit="cover"
                grayscale={0}
              />
            </div>

            {/* Story 02 */}
            <Link
              href="/stories/kabir-sara"
              className="group block w-full cursor-target md:ml-auto md:w-[82%] lg:w-[78%]"
            >
              <article>

                <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
                  <Image
                    src={stories[1].image}
                    alt={`${stories[1].couple} wedding`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  <div className="absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[9px] uppercase tracking-[0.15em] opacity-0 transition-all duration-500 group-hover:opacity-100 md:bottom-8 md:right-8 md:h-20 md:w-20">
                    View
                  </div>
                </div>

                <div className="mt-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <h3 className="font-serif text-3xl md:text-4xl">
                    {stories[1].couple}
                  </h3>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-black/60">
                    {stories[1].location}
                  </span>
                </div>

              </article>
            </Link>

          </div>

        </div>

        {/* Story 03 — Same proportions as Story 02 */}
        <div className="mt-28 md:mt-40">

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[58%_42%] lg:gap-12">

            {/* Story 03 */}
            <Link
              href="/stories/rahul-riya"
              className="group block w-full cursor-target md:w-[82%] lg:w-[78%]"
            >
              <article>

                <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
                  <Image
                    src={stories[2].image}
                    alt={`${stories[2].couple} wedding`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

                  <div className="absolute bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[9px] uppercase tracking-[0.15em] opacity-0 transition-all duration-500 group-hover:opacity-100 md:bottom-8 md:right-8 md:h-20 md:w-20">
                    View
                  </div>
                </div>

                <div className="mt-5 flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <h3 className="font-serif text-3xl md:text-4xl">
                    {stories[2].couple}
                  </h3>

                  <span className="text-[10px] uppercase tracking-[0.25em] text-black/60">
                    {stories[2].location}
                  </span>
                </div>

              </article>
            </Link>

            {/* Infinite Spiral — Desktop only */}
            <div className="relative hidden h-[560px] w-full md:block">
              <InfiniteSpiral
                items={rahulRiyaPhotos}
                animationMode="auto"
                speed={0.30}
                radius={145}
                cardWidth={105}
                cardHeight={150}
                verticalSpacing={90}
                perspective={900}
                cardRadius={10}
                centerScale={1.15}
                edgeBlur={4}
                cardsPerTurn={7}
                pauseOnHover
                direction="down"
                rotation={0}
                cardTilt={0}
                edgeFade={0.4}
                imageFit="cover"
                grayscale={0}
              />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom CTA */}
      <div className="mx-auto mt-28 max-w-[1400px] border-t border-black/15 pt-8 md:mt-40 md:flex md:items-center md:justify-between">

        <p className="text-[10px] uppercase tracking-[0.3em] text-black/50">
          More stories
        </p>

        <Link
          href="/stories"
          className="cursor-target mt-5 inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] md:mt-0"
        >
          Explore all stories
          <span className="text-lg">→</span>
        </Link>

      </div>

    </section>
  );
}
