"use client";

import DriftWall from "@/components/DriftWall";

const testimonials = [
  {
    quote:
      "It felt less like a photoshoot and more like having someone quietly preserve every feeling of our day.",
    name: "Riya & Arjun",
    location: "Mumbai",
    date: "2026",
  },
  {
    quote:
      "Every time we watch our wedding film, we notice another little moment we had completely forgotten.",
    name: "Ananya & Karan",
    location: "Pune",
    date: "2026",
  },
  {
    quote:
      "They captured the chaos, the laughter, the tears — everything that made the day ours.",
    name: "Meera & Aditya",
    location: "Delhi",
    date: "2025",
  },
  {
    quote:
      "The photographs don't just show what happened. They bring us right back to how it felt.",
    name: "Ishita & Rohan",
    location: "Jaipur",
    date: "2025",
  },
  {
    quote:
      "From our first conversation to the final film, everything felt thoughtful, personal and effortless.",
    name: "Sneha & Ved",
    location: "Goa",
    date: "2025",
  },
  {
    quote:
      "We wanted something timeless, and somehow they managed to make every frame feel exactly like us.",
    name: "Aisha & Kabir",
    location: "Udaipur",
    date: "2025",
  },
  {
    quote:
      "Our families keep going back to the photographs. That alone tells us how beautifully they captured the day.",
    name: "Naina & Yash",
    location: "Bengaluru",
    date: "2025",
  },
  {
    quote:
      "Nothing felt forced. The moments simply happened, and they were there to catch them.",
    name: "Tara & Dhruv",
    location: "Hyderabad",
    date: "2024",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f2f0eb] px-6 py-24 text-[#171717] md:px-10 md:py-32 lg:px-16 lg:py-40">

      {/* Header */}
      <div className="mx-auto mb-16 max-w-[1500px] md:mb-24">

        <div className="mb-8 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            04
          </span>

          <span className="h-px w-12 bg-black/30" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-black/50">
            Kind Words
          </span>
        </div>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <h2 className="max-w-5xl font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.84] tracking-[-0.055em]">
            Stories
            <br />
            <span className="italic">
              from our couples.
            </span>
          </h2>

          <p className="max-w-sm text-sm leading-7 text-black/55 md:pb-2">
            The photographs matter. The films matter.
            But what stays with us most are the stories
            our couples tell after the day is over.
          </p>

        </div>
      </div>

      {/* Drift Testimonials */}
      <div className="mx-auto h-[650px] w-full max-w-[1600px]">
        <DriftWall
          items={testimonials}
          columns={5}
          tileWidth={280}
          tileHeight={210}
          gap={18}
          tilt={16}
          turn={-14}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.6}
          lift={64}
          fade={0.6}
          dim={0.72}
          overlayColor="transparent"
          radius={4}
          roll={0}
          pauseOnHover={false}
          grayscale={false}
        />
      </div>

      {/* Bottom line */}
      <div className="mx-auto mt-16 flex max-w-[1500px] items-center justify-between border-t border-black/15 pt-6">

        <span className="text-[9px] uppercase tracking-[0.3em] text-black/45">
          Words from the people we photograph
        </span>

        <span className="text-[9px] uppercase tracking-[0.3em] text-black/45">
          04 — 04
        </span>

      </div>

    </section>
  );
}