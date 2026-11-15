
"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "bharatifilmcreation@gmail.com";
const PHONE_NUMBER = "+91 7447275764";
const WHATSAPP_NUMBER = "917447275764";
const MAP_LOCATION = "BharatiFilm Creations, Pune, Maharashtra, India";

const eventTypes = [
  "Wedding Photography",
  "Destination Wedding",
  "Wedding Film",
  "Pre-Wedding Shoot",
  "Corporate Photography",
  "Birthday Photography",
  "Other",
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const eventType = String(formData.get("eventType") || "");
    const eventDate = String(formData.get("eventDate") || "");
    const location = String(formData.get("location") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(
      `New Enquiry - ${eventType || "BharatiFilm Creation"}`
    );

    const body = encodeURIComponent(
      `Hello BharatiFilm Creation,

I would like to enquire about your services.

Name: ${name}
Email: ${email}
Phone: ${phone}
Event Type: ${eventType}
Event Date: ${eventDate || "Not decided"}
Event Location: ${location || "Not specified"}

Message:
${message}

Looking forward to hearing from you.

Regards,
${name}`
    );

    setIsSubmitting(true);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      form.reset();
    }, 800);
  };

  return (
    <main className="bg-[#f2f0eb] text-[#171717] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="absolute top-24 right-[-30px] md:right-10 pointer-events-none select-none">
          <span className="font-serif italic text-[100px] md:text-[190px] text-black/[0.035] leading-none">
            Connect
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-px bg-black/50" />
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-black/60">
              Let's Create Something Beautiful
            </p>
          </div>

          <h1 className="font-serif text-[48px] sm:text-6xl md:text-7xl lg:text-[100px] leading-[1.05] tracking-[-0.045em] max-w-5xl">
            Every beautiful story
            <br />
            <span className="italic font-normal">begins with a hello.</span>
          </h1>

          <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-xl text-sm md:text-base leading-8 text-black/60">
              Whether you're planning your wedding, dreaming of a destination
              celebration, or looking for a team to capture something special,
              we'd love to hear your story.
            </p>

            <p className="text-[10px] tracking-[0.25em] uppercase text-black/50">
              BharatiFilm Creation
              <br />
              Where love becomes timeless.
            </p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px bg-black/15" />
      </div>

      {/* CONTACT DETAILS */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 md:gap-20">

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-black/50 mb-6">
              Get In Touch
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Let's talk about
              <br />
              <span className="italic">your story.</span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-black/60 max-w-sm">
              Tell us a little about what you're planning. We'll get back to
              you and help you make your memories unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">

            <div className="border-t border-black/20 pt-5">
              <p className="text-[10px] tracking-[0.25em] uppercase text-black/45 mb-5">
                Call Us
              </p>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="font-serif text-xl md:text-2xl hover:opacity-50 transition-opacity"
              >
                {PHONE_NUMBER}
              </a>
              <p className="text-xs text-black/45 mt-3">
                Available for enquiries
              </p>
            </div>

            <div className="border-t border-black/20 pt-5">
              <p className="text-[10px] tracking-[0.25em] uppercase text-black/45 mb-5">
                Email Us
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-serif text-lg md:text-xl break-all hover:opacity-50 transition-opacity"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-xs text-black/45 mt-3">
                Tell us about your plans
              </p>
            </div>

            <div className="border-t border-black/20 pt-5">
              <p className="text-[10px] tracking-[0.25em] uppercase text-black/45 mb-5">
                WhatsApp
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xl md:text-2xl hover:opacity-50 transition-opacity"
              >
                Let's Chat
              </a>
              <p className="text-xs text-black/45 mt-3">
                Start a conversation with us
              </p>
            </div>

            <div className="border-t border-black/20 pt-5">
              <p className="text-[10px] tracking-[0.25em] uppercase text-black/45 mb-5">
                Our Location
              </p>
              <p className="font-serif text-xl md:text-2xl">
                Pune, India
              </p>
              <p className="text-xs text-black/45 mt-3">
                Available for destination projects worldwide
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="bg-[#eae7e0] px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-14 lg:gap-24">

          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-black/50 mb-6">
              Enquiry Form
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              Tell us
              <br />
              <span className="italic">what you're dreaming of.</span>
            </h2>

            <p className="mt-8 text-sm leading-8 text-black/60 max-w-sm">
              Every celebration is different, and so is every story. Share
              your details with us and let's start planning something
              meaningful together.
            </p>

            <div className="mt-12 hidden lg:block">
              <span className="block w-12 h-px bg-black/40 mb-5" />
              <p className="font-serif italic text-2xl text-black/65">
                We can't wait to hear from you.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-9">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-black/55 mb-3">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-transparent border-b border-black/25 py-3 text-sm outline-none placeholder:text-black/30 focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-black/55 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="w-full bg-transparent border-b border-black/25 py-3 text-sm outline-none placeholder:text-black/30 focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-black/55 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your contact number"
                  className="w-full bg-transparent border-b border-black/25 py-3 text-sm outline-none placeholder:text-black/30 focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-black/55 mb-3">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-b border-black/25 py-3 text-sm outline-none focus:border-black transition-colors"
                >
                  <option value="" disabled>
                    Select your event
                  </option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-black/55 mb-3">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  className="w-full bg-transparent border-b border-black/25 py-3 text-sm outline-none focus:border-black transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-black/55 mb-3">
                  Event Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="City or destination"
                  className="w-full bg-transparent border-b border-black/25 py-3 text-sm outline-none placeholder:text-black/30 focus:border-black transition-colors"
                />
              </div>

            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-black/55 mb-3">
                Tell Us More *
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Share your ideas, plans, or anything you'd like us to know..."
                className="w-full resize-y bg-transparent border-b border-black/25 py-3 text-sm outline-none placeholder:text-black/30 focus:border-black transition-colors"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
              <p className="text-xs leading-6 text-black/45 max-w-xs">
                By submitting this enquiry, you agree to be contacted regarding
                your request.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-8 bg-[#171717] text-[#f2f0eb] px-8 py-5 text-[10px] tracking-[0.2em] uppercase hover:bg-black/75 transition-colors disabled:opacity-60"
              >
                {isSubmitting ? "Opening Email..." : "Send Enquiry"}
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

            {submitted && (
              <p className="text-xs text-black/60 leading-6">
                Your email application should open with your enquiry details.
                Please send the prepared email to complete your enquiry.
              </p>
            )}

          </form>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-black/50 mb-5">
                Find Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">
                Come say <span className="italic">hello.</span>
              </h2>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                MAP_LOCATION
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[0.2em] uppercase border-b border-black/40 pb-2 w-fit hover:opacity-50 transition-opacity"
            >
              Open Google Maps →
            </a>
          </div>

          <div className="w-full h-[320px] md:h-[460px] overflow-hidden bg-[#e5e1d9]">
            <iframe
              title="BharatiFilm Creation location on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                MAP_LOCATION
              )}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className="mt-5 text-xs text-black/45">
            Map search: {MAP_LOCATION}. Replace this with your exact studio
            address for a precise location.
          </p>

        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto border-t border-black/15 pt-16 md:pt-20 text-center">

          <p className="text-[10px] tracking-[0.3em] uppercase text-black/50 mb-8">
            BharatiFilm Creation
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight">
            Your story is waiting
            <br />
            <span className="italic">to be told.</span>
          </h2>

          <p className="font-serif italic text-lg md:text-xl text-black/50 mt-8">
            Let's make it timeless.
          </p>

          <div className="mt-14 flex justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="border border-black/30 px-9 py-5 text-[10px] tracking-[0.2em] uppercase hover:bg-[#171717] hover:text-[#f2f0eb] transition-colors"
            >
              Start Your Enquiry
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
