"use client";

import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f2f0eb] text-[#171717]">
      
      {/* Background / Drift Wall */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex flex-col justify-center overflow-hidden select-none"
      >
        <div className="whitespace-nowrap text-[18vw] font-serif leading-none tracking-[-0.06em] text-black/[0.035]">
          MOMENTS&nbsp;&nbsp;&nbsp;&nbsp; BETWEEN
        </div>

        <div className="-mt-2 whitespace-nowrap text-[18vw] font-serif italic leading-none tracking-[-0.06em] text-black/[0.035]">
          BETWEEN&nbsp;&nbsp;&nbsp;&nbsp; MOMENTS
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 md:grid-cols-2">

        {/* IMAGE SIDE */}
        <div className="relative min-h-[65vh] md:min-h-screen">
          <div className="absolute inset-6 md:inset-10 lg:inset-14">
            <Image
              src="/intro.jpg"
              alt="Wedding couple sharing a quiet moment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Image label */}
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-[9px] uppercase tracking-[0.35em]">
                The moments between
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="relative flex items-center px-8 py-20 md:px-12 lg:px-20 xl:px-28">
          
          <div className="max-w-xl">

            {/* Section Number */}
            <div className="mb-14 flex items-center gap-4">
              <span className="text-[10px] tracking-[0.3em] uppercase">
                01
              </span>

              <span className="h-px w-12 bg-black/30" />

              <span className="text-[10px] tracking-[0.3em] uppercase text-black/50">
                Our Philosophy
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.88] tracking-[-0.045em]">
              We don't just
              <br />
              capture
              <br />
              <span className="italic">
                weddings.
              </span>
            </h2>

            {/* Divider */}
            <div className="my-10 h-px w-full bg-black/15" />

            {/* Description */}
            <p className="max-w-md text-sm leading-7 text-black/65 md:text-base md:leading-8">
              We capture the quiet glances, uncontrollable laughter,
              trembling hands, happy tears, and all the little moments
              that make your story uniquely yours.
            </p>

            {/* Bottom statement */}
            <div className="mt-14 flex items-end justify-between gap-8">
              <p className="max-w-[220px] font-serif text-xl leading-tight">
                Because the moments between the moments are the ones
                you'll remember.
              </p>

              <span className="shrink-0 text-[10px] uppercase tracking-[0.3em] text-black/50">
                Since 2026
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}