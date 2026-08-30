"use client";

import FlowingMenu from "@/components/FlowingMenu";

const services = [
  {
    link: "/services/wedding-photography",
    text: "Wedding Photography",
    image: "/services/photography-01.jpg",
  },
  {
    link: "/services/wedding-films",
    text: "Wedding Films",
    image: "/services/films-01.jpg",
  },
  {
    link: "/services/pre-wedding",
    text: "Pre-Wedding",
    image: "/services/prewedding-01.jpg",
  },
  {
    link: "/services/destination-weddings",
    text: "Destination Weddings",
    image: "/services/destination-01.jpg",
  },
];

export default function Services() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f2f0eb] px-6 py-24 text-[#171717] md:px-10 md:py-32 lg:px-16 lg:py-40">

      {/* Header */}
      <div className="mx-auto mb-20 max-w-[1500px] md:mb-28">

        <div className="mb-8 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            03
          </span>

          <span className="h-px w-12 bg-black/30" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
            What We Do
          </span>
        </div>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <h2 className="max-w-5xl font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] tracking-[-0.055em]">
            We capture
            <br />
            <span className="italic">the feeling.</span>
          </h2>

          <p className="max-w-sm text-sm leading-7 text-black/55 md:pb-2">
            Photography, films and stories created with intention —
            preserving the moments that deserve to be remembered.
          </p>

        </div>
      </div>

      {/* Services Menu */}
    <div className="relative left-1/2 h-[650px] w-screen -translate-x-1/2">

    <FlowingMenu
            items={services}
            speed={18}
            textColor="#171717"
            bgColor="transparent"
            marqueeBgColor="#171717"
            marqueeTextColor="#f2f0eb"
            borderColor="rgba(23, 23, 23, 0.18)"
        />
    </div>


      {/* Bottom note */}
      <div className="mx-auto mt-16 flex max-w-screen items-center justify-between">

        <span className="text-[9px] uppercase tracking-[0.3em] text-black/45">
          Crafted around your story
        </span>

        <span className="text-[9px] uppercase tracking-[0.3em] text-black/45">
          03 — 04
        </span>

      </div>

    </section>
  );
}

