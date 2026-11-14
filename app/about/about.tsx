
"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: "destination",
    number: "01",
    label: "Destination Wedding",
    eyebrow: "Beyond Boundaries",
    headline: "LOVE HAS NO BOUNDARIES. NEITHER SHOULD YOUR STORY.",
    image: "/about/destination-wedding.jpg",
    paragraphs: [
      "Some love stories deserve a setting as extraordinary as the emotions they hold.",
      "At BharatiFilm Creation, we believe destination weddings are more than celebrations in beautiful locations. They are journeys filled with romance, adventure, culture, and unforgettable experiences. From breathtaking beachside ceremonies and royal palace celebrations to intimate mountain escapes, every destination has a story waiting to be told.",
      "We specialize in capturing destination weddings with a refined cinematic approach, blending breathtaking landscapes, artistic compositions, and authentic emotions to create timeless visual stories.",
      "From the smallest details to the grandest celebrations, we thoughtfully document every moment while allowing you to be fully present and enjoy your special day.",
      "We understand that planning a wedding away from home is a beautiful adventure. Our professional and seamless approach ensures your photography and filmmaking experience feels effortless, organized, and stress-free.",
      "For us, it's never just about the destination. It's about the people, the emotions, and the memories created along the way.",
    ],
    closing: [
      "Because the most beautiful journeys deserve to be remembered forever.",
      "You choose the destination. We'll capture the magic.",
    ],
    tagline: "Capturing Love Stories Across Destinations.",
  },
  {
    id: "prewedding",
    number: "02",
    label: "Pre-Wedding",
    eyebrow: "Before The Forever",
    headline: "YOUR LOVE STORY. YOUR ADVENTURE. YOUR FOREVER.",
    image: "/about/pre-wedding.jpg",
    paragraphs: [
      "Every love story has its own magic — the laughter, the little things, the crazy moments, and the way two people just get each other.",
      "At BharatiFilm Creation, we believe pre-wedding shoots should be more than just beautiful pictures. They should be an experience filled with love, laughter, adventure, and memories you’ll never stop smiling about.",
      "Whether it’s dancing in the rain, getting lost in a beautiful destination, sharing a quiet sunset, or simply being your wonderfully crazy selves, we’re here to capture the real chemistry that makes your relationship special.",
      "No awkward poses. No forced smiles. Just genuine emotions, effortless romance, and a little cinematic magic.",
      "Our goal is to turn your moments together into a beautiful visual story — one that feels uniquely yours, looks timeless, and brings butterflies every time you watch it.",
      "Because before the wedding, before the forever begins, there’s a beautiful story of two people falling in love.",
      "And we’re here to make that story unforgettable.",
    ],
    closing: [
      "Your love story. Your adventure. Your forever.",
    ],
    tagline: "Turning Love Stories into Timeless Memories.",
  },
  {
    id: "corporate",
    number: "03",
    label: "Corporate",
    eyebrow: "People & Purpose",
    headline: "VISUAL STORYTELLING FOR BRANDS THAT LEAD.",
    image: "/about/corporate.jpg",
    paragraphs: [
      "At BharatiFilm Creation, we believe every brand has a story worth telling — a story of vision, innovation, people, and purpose.",
      "We specialize in premium corporate photography and filmmaking that goes beyond capturing images. We create compelling visual narratives that communicate your brand’s identity, reflect its values, and leave a lasting impression.",
      "From corporate portraits and executive profiles to business events, product showcases, and brand films, our approach combines creativity, precision, and a refined visual aesthetic to deliver imagery that speaks with confidence and authenticity.",
      "We understand that every frame represents your brand. That’s why we focus on the details, the atmosphere, and the moments that bring your business to life — creating visuals that are both meaningful and strategically impactful.",
      "Our mission is to transform your vision into powerful visual experiences that inspire trust, strengthen brand presence, and connect with your audience.",
    ],
    closing: [
      "Because great brands deserve more than visuals.",
      "They deserve stories that stand out.",
    ],
    tagline: "Crafting Visual Stories. Elevating Brands.",
  },
  {
    id: "birthday",
    number: "04",
    label: "Birthday",
    eyebrow: "Another Year, Another Story",
    headline: "LITTLE MOMENTS. BIG CELEBRATIONS. FOREVER MEMORIES.",
    image: "/about/birthday.jpg",
    paragraphs: [
      "Every birthday is a beautiful milestone — filled with laughter, surprises, happiness, and moments that deserve to be remembered forever.",
      "At BharatiFilm Creation, we believe birthday photography is about capturing more than just a celebration. It’s about preserving the excitement in little eyes, the warmth of family hugs, the joy of blowing out candles, and the priceless smiles that make every birthday special.",
      "From adorable first birthdays and playful kids’ celebrations to grand birthday parties and milestone moments, we capture every occasion with creativity, energy, and a whole lot of love.",
      "Our approach is fun, natural, and full of life. We let the celebrations unfold while capturing genuine emotions, spontaneous laughter, and all the little details that make your day uniquely yours.",
      "Because birthdays come once a year, but the memories deserve to last a lifetime.",
    ],
    closing: [
      "Let’s turn every celebration into a collection of unforgettable moments.",
    ],
    tagline: "Capturing Happiness. Celebrating Memories.",
  },
  {
    id: "film",
    number: "05",
    label: "Wedding Film",
    eyebrow: "Stories In Motion",
    headline: "NOT JUST A FILM. A FEELING YOU CAN RELIVE FOREVER.",
    image: "/about/wedding-film.jpg",
    paragraphs: [
      "Some moments are too precious to simply be photographed. They deserve to move, breathe, and live forever through film.",
      "At BharatiFilm Creation, we believe every wedding is a beautiful story waiting to unfold. A story filled with heartfelt promises, stolen glances, happy tears, uncontrollable laughter, and emotions that words can never fully express.",
      "Our passion lies in transforming these fleeting moments into cinematic experiences. Through thoughtful storytelling, artistic cinematography, beautiful compositions, and carefully crafted sound, we create wedding films that capture not just how your day looked, but exactly how it felt.",
      "From the anticipation of getting ready to the emotions of the ceremony, from the energy of the celebrations to the quiet moments shared between two souls, every detail becomes part of a story uniquely yours.",
      "We don't simply record events. We observe, feel, and tell stories with purpose — creating films that are personal, timeless, and deeply meaningful.",
      "Years may pass, celebrations may fade into memories, but a beautiful film has the power to bring every emotion rushing back.",
    ],
    closing: [
      "Because the best wedding films don't just show you your story.",
      "They make you feel it all over again.",
    ],
    tagline: "Crafting Cinematic Love Stories. Preserving Emotions Forever.",
  },
];

export default function About() {
  const [activeService, setActiveService] = useState("destination");

  const currentService =
    services.find((service) => service.id === activeService) ?? services[0];

  return (
    <main className="relative w-full overflow-hidden bg-[#f2f0eb] text-[#171717]">

      {/* Background Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 flex flex-col justify-center overflow-hidden select-none"
      >
        <div className="whitespace-nowrap font-serif text-[18vw] leading-none tracking-[-0.06em] text-black/[0.025]">
          BHARATI&nbsp;&nbsp;&nbsp;&nbsp; STORIES
        </div>

        <div className="-mt-2 whitespace-nowrap font-serif text-[18vw] italic leading-none tracking-[-0.06em] text-black/[0.025]">
          STORIES&nbsp;&nbsp;&nbsp;&nbsp; BHARATI
        </div>
      </div>

      {/* Main About Us Section */}
      <section className="relative z-10 mx-auto max-w-[1600px] px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32 lg:px-16">

        {/* Section Introduction */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end">

          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em]">
                BharatiFilm Creation
              </span>

              <span className="h-px w-12 bg-black/30" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
                Our Story
              </span>
            </div>

            <h1 className="font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.82] tracking-[-0.055em]">
              A little
              <br />
              <span className="italic">about us.</span>
            </h1>
          </div>

          <p className="max-w-xs text-sm leading-7 text-black/55 md:pb-2">
            A creative team with a passion for preserving emotions, celebrating
            people, and turning fleeting moments into timeless stories.
          </p>
        </div>

        {/* About Us Image and Content */}
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:gap-24">

          {/* About Image */}
          <div className="relative w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e5e1d9]">
              <Image
                src="/about/about-us.jpg"
                alt="BharatiFilm Creation wedding photography"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.3em] text-black/45">
                The Art of Storytelling
              </span>

              <span className="text-[9px] uppercase tracking-[0.3em] text-black/45">
                Since 2026
              </span>
            </div>
          </div>

          {/* About Content */}
          <div className="flex flex-col justify-center md:py-3 lg:py-8">

            <div className="mb-9 flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.3em]">
                01
              </span>

              <span className="h-px w-12 bg-black/30" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
                Who We Are
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.035em]">
              A STORY OF LOVE,
              <br />
              <span className="italic">TOLD FOREVER.</span>
            </h2>

            <div className="my-9 h-px w-full bg-black/15" />

            <div className="space-y-6">
              <p className="text-sm leading-8 text-black/65 md:text-base">
                At BharatiFilm Creation, we believe the most beautiful stories
                are never staged. They are felt, lived, and remembered.
              </p>

              <p className="text-sm leading-8 text-black/65 md:text-base">
                We are storytellers with a passion for capturing the
                extraordinary beauty of ordinary moments — the trembling
                hands, the stolen glances, the tears of joy, and the laughter
                that fills a room with love.
              </p>

              <p className="text-sm leading-8 text-black/65 md:text-base">
                Our approach to wedding photography is deeply personal and
                effortlessly cinematic. We move beyond traditional poses to
                capture the soul of your celebration, preserving every emotion
                with artistry, elegance, and intention.
              </p>

              <p className="text-sm leading-8 text-black/65 md:text-base">
                Every frame is thoughtfully crafted. Every detail holds
                meaning. Every photograph becomes a timeless piece of your
                story.
              </p>

              <p className="text-sm leading-8 text-black/65 md:text-base">
                We believe your wedding photographs should feel just as
                beautiful decades from now as they do today — not simply
                reminding you of how everything looked, but allowing you to
                relive how everything felt.
              </p>
            </div>

            <div className="mt-12 border-l border-black/25 pl-6">
              <p className="mb-3 font-serif text-xl leading-snug md:text-2xl">
                Because your love story deserves more than photographs.
              </p>

              <p className="font-serif text-xl italic leading-snug md:text-2xl">
                It deserves to be remembered as a masterpiece.
              </p>
            </div>

            <div className="mt-12">
              <p className="font-serif text-2xl tracking-[-0.03em]">
                BharatiFilm Creation
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-black/45">
                Where love becomes timeless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 border-t border-black/15">

        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-16">

          {/* Services Heading */}
          <div className="mb-16 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">

            <div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em]">
                  What We Do
                </span>

                <span className="h-px w-12 bg-black/30" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
                  Our Services
                </span>
              </div>

              <h2 className="font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.85] tracking-[-0.055em]">
                Stories for
                <br />
                <span className="italic">every occasion.</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-black/55 md:pb-2">
              Every occasion has its own emotion. Explore the different ways
              we turn those moments into lasting memories.
            </p>
          </div>

          {/* Service Navigation */}
          <div className="mb-14 border-y border-black/15 py-5 md:mb-20">
            <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none md:flex-wrap md:gap-5">
              {services.map((service) => {
                const isActive = activeService === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveService(service.id)}
                    aria-pressed={isActive}
                    className={`flex shrink-0 items-center gap-3 whitespace-nowrap border px-4 py-3 text-[9px] uppercase tracking-[0.2em] transition-all duration-300 md:px-5 ${
                      isActive
                        ? "border-[#171717] bg-[#171717] text-[#f2f0eb]"
                        : "border-black/15 text-black/55 hover:border-black/60 hover:text-black"
                    }`}
                  >
                    <span
                      className={
                        isActive ? "text-white/50" : "text-black/35"
                      }
                    >
                      {service.number}
                    </span>

                    {service.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Service */}
          <div
            key={currentService.id}
            className="grid grid-cols-1 items-start gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:gap-24"
          >

            {/* Service Image */}
            <div className="relative w-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e5e1d9]">
                <Image
                  src={currentService.image}
                  alt={`${currentService.label} by BharatiFilm Creation`}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.3em] text-black/45">
                  {currentService.eyebrow}
                </span>

                <span className="text-[9px] uppercase tracking-[0.3em] text-black/45">
                  {currentService.number} / 05
                </span>
              </div>
            </div>

            {/* Service Content */}
            <div className="flex min-w-0 flex-col justify-center md:py-3 lg:py-8">

              <div className="mb-9 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em]">
                  {currentService.number}
                </span>

                <span className="h-px w-12 bg-black/30" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
                  {currentService.label}
                </span>
              </div>

              <h3 className="max-w-xl font-serif text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.035em]">
                {currentService.headline}
              </h3>

              <div className="my-9 h-px w-full bg-black/15" />

              {/* Full Service Description */}
              <div className="space-y-6">
                {currentService.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="max-w-xl text-sm leading-8 text-black/65 md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Closing Statement */}
              <div className="mt-12 border-l border-black/25 pl-6">
                {currentService.closing.map((line, index) => (
                  <p
                    key={index}
                    className="mb-2 font-serif text-xl leading-snug md:text-2xl"
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Brand Signature */}
              <div className="mt-12">
                <p className="font-serif text-2xl tracking-[-0.03em]">
                  BharatiFilm Creation
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-black/45">
                  {currentService.tagline}
                </p>
              </div>

              {/* Previous / Next */}
              <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-black/15 pt-7">

                <button
                  type="button"
                  onClick={() => {
                    const previousIndex =
                      (services.findIndex(
                        (service) => service.id === activeService
                      ) -
                        1 +
                        services.length) %
                      services.length;

                    setActiveService(services[previousIndex].id);
                  }}
                  className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-black/50 transition-colors hover:text-black"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    ←
                  </span>
                  Previous
                </button>

                <span className="text-[9px] uppercase tracking-[0.25em] text-black/35">
                  {services.findIndex(
                    (service) => service.id === activeService
                  ) + 1}{" "}
                  of 05
                </span>

                <button
                  type="button"
                  onClick={() => {
                    const nextIndex =
                      (services.findIndex(
                        (service) => service.id === activeService
                      ) +
                        1) %
                      services.length;

                    setActiveService(services[nextIndex].id);
                  }}
                  className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-black transition-colors hover:text-black/50"
                >
                  Next
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Brand Statement */}
      <section className="relative z-10 border-t border-black/15">
        <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="font-serif text-2xl leading-tight md:text-4xl">
              Every story is different.
              <span className="italic"> So is every frame.</span>
            </p>

            <span className="text-[9px] uppercase tracking-[0.3em] text-black/40">
              BharatiFilm Creation · Photography · Films
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
