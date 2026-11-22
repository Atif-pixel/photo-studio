import { FormEvent, useEffect, useMemo, useState } from "react";
import YouTubeHeroSlider from "./components/YouTubeHeroSlider";

type Page = "home" | "stories" | "album" | "about" | "services" | "contact";
type CloudinaryPhoto = {
  publicId: string;
  url: string;
  category: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
};

type GalleryPhoto = {
  src: string;
  category: string;
  alt: string;
};

type TeamMember = {
  name: string;
  role: string;
};

const teamMembers: TeamMember[] = [
  { name: "Yogesh Bharati", role: "FOUNDER · PHOTOGRAPHER" },
  { name: "Yogesh Bharati", role: "CREATIVE DIRECTOR" },
  { name: "Yogesh Bharati", role: "LEAD FILMMAKER" },
];

const local = {
  palace: "/assets/Rohit-Lucy.jpg",
  bride: "/assets/Colin-Vaidehi.jpg",
  ritual: "/assets/Pratik-Tana.jpg",
  rituals: "/assets/wedding_rituals.jpg",
  couple4: "/assets/Tushar-Nidhi.jpg",
  couple5: "/assets/Chirag-Angel.jpg",
  couple6: "/assets/Parth-Shradha.jpg",
  couple7: "/assets/Akshay-Eesha.JPG",
  couple8: "/assets/Varun-Rutuja.jpg",
};


const stories = [
  {
    slug: "rohit-lucy",
    names: "Rohit & Lucy",
    place: "Samode Palace, Jaipur",
    year: "2024",
    image: local.palace,
  },
  {
    slug: "colin-vaidehi",
    names: "Colin & Vaidehi",
    place: "The Oberoi Udaivilas, Udaipur",
    year: "2024",
    image: local.bride,
  },
  {
    slug: "pratik-tana",
    names: "Pratik & Tana",
    place: "Suryagarh, Jaisalmer",
    year: "2023",
    image: local.ritual,
  },
  {
    slug: "tushar-nidhi",
    names: "Tushar & Nidhi",
    place: "Rambagh Palace, Jaipur",
    year: "2023",
    image: local.couple4,
  },
  {
    slug: "chirag-angel",
    names: "Chirag & Angel",
    place: "Alila Fort Bishangarh",
    year: "2022",
    image: local.couple5,
  },
  {
    slug: "parth-shraddha",
    names: "Parth & Shradha",
    place: "Taj Falaknuma, Hyderabad",
    year: "2022",
    image: local.couple6,
  },
  {
    slug: "akshay-eesha",
    names: "Akshay & Eesha",
    place: "Taj Falaknuma, Hyderabad",
    year: "2022",
    image: local.couple7,
  },
  {
    slug: "varun-rutuja",
    names: "Varun & Rutuja",
    place: "Taj Falaknuma, Hyderabad",
    year: "2022",
    image: local.couple8,
  },
];

function routeFromPath(): { page: Page; slug?: string } {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path.startsWith("/stories/")) return { page: "album", slug: path.split("/")[2] };
  if (path === "/stories") return { page: "stories" };
  if (path === "/about") return { page: "about" };
  if (path === "/services") return { page: "services" };
  if (path === "/contact") return { page: "contact" };
  return { page: "home" };
}

function Link({
  to,
  children,
  className = "",
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        window.history.pushState({}, "", to);
        window.dispatchEvent(new PopStateEvent("popstate"));
        window.scrollTo({ top: 0, behavior: "instant" });
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    
<header className="site-header">
  <Link to="/" className="brand" onClick={close}>
    <img
      src="/assets/logo.png"
      alt="Bharati Film Creation"
      className="brand-logo"
    />
  </Link>

  <button
    className="menu-button"
    aria-expanded={open}
    aria-label="Toggle menu"
    onClick={() => setOpen(!open)}
  >
    <span />
    <span />
  </button>

  <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
    <Link to="/stories" onClick={close}>
      Weddings
    </Link>
    <Link to="/about" onClick={close}>
      Our story
    </Link>
    <Link to="/services" onClick={close}>
      Services
    </Link>
    <Link to="/contact" onClick={close}>
      Inquire
    </Link>
    <Link to="/contact" onClick={close} className="button button-small">
      Tell us your story <span>↗</span>
    </Link>
  </nav>
</header>

  );
}


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="footer-brand">
            Bharati Film Creation
          </Link>
          <p>Indian destination weddings, thoughtfully remembered.</p>
        </div>

        <div className="footer-links">
          <Link to="/stories">Weddings</Link>
          <Link to="/about">Our story</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram ↗
          </a>

          <a href="mailto:bharatifilmcreation@gmail.com">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Email us
          </a>

          <a href="https://wa.me/917447275764" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.1-4.6A8.5 8.5 0 1 1 20.5 11.5Z" />
              <path d="M8.5 8.5c.3 2.4 2.6 4.7 5 5l1.2-1.2 2 1c-.3 1.5-1.4 2.2-2.7 2.1-3.8-.4-7-3.6-7.4-7.4-.1-1.3.6-2.4 2.1-2.7l1 2-1.2 1.2Z" />
            </svg>
            WhatsApp ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2017 BHARATI FILM CREATIONS</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}


function Home() {
  return (
    <>
      <section className="home-hero page-pad">
        <p className="eyebrow">INDIAN DESTINATION WEDDINGS</p>
        <div className="home-title-row">
          <h1>
            Your love.
            <br />
            Forever a story.
          </h1>
          <p>
            The grandeur. The rituals.
            <br />
            The beautifully unscripted.
            <br />
            Your wedding, remembered.
          </p>
        </div>
        <div className="caption-row">
          <span>STORIES WORTH REMEMBERING · WE CAPTURE YOUR MOMENTS</span>
          <Link to="/stories">EXPLORE WEDDINGS ↓</Link>
        </div>
        <div className="hero-image">
          <YouTubeHeroSlider />
        </div>
        <div className="caption-row">
          <span>A celebration of love, in every frame.</span>
          <span>SOME HIGLIGHTS</span>
        </div>
      </section>

      <section className="selected-work page-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / THE WEDDING EDIT</p>
            <h2>Celebrations, remembered.</h2>
          </div>
          <p>
            Intimate moments. Grand celebrations.
            <br />
            An Indian wedding, in all its colour.
          </p>
        </div>
        <div className="editorial-grid">
          <figure className="portrait-feature">
            <img src={local.bride} alt="Indian bride in maroon bridal attire" />
            <figcaption>
              <span className="display-small">Before the forever</span>
              <span>BRIDAL PORTRAITS</span>
            </figcaption>
          </figure>
          <div className="editorial-secondary">
            <figure>
              <img src={local.rituals} alt="Indian bride and groom during a wedding ritual" />
              <figcaption>
                <span className="display-small">A thousand little moments</span>
                <span>WEDDING RITUALS</span>
              </figcaption>
            </figure>
            <h3>
              Some moments
              <br />
              become everything.
            </h3>
            <p className="eyebrow">THE COLOURS, THE CONNECTIONS, THE CELEBRATION</p>
          </div>
        </div>
      </section>

      <section className="maroon-band page-pad">
        <div>
          <p className="eyebrow">02 / OUR STORY</p>
          <h2>
            For the moments
            <br />
            that become legacy.
          </h2>
        </div>
        <div>
          <h3>Bharati Film Creation</h3>
          <p>
            An agency dedicated to Indian destination weddings. From the anticipation before the
            ceremony to the joy that fills the dance floor, the focus is on your people, your
            traditions and your story.
          </p>
          <Link to="/about">OUR PEOPLE. YOUR TRADITIONS. YOUR FOREVER. ↗</Link>
        </div>
      </section>

     
<section className="home-contact page-pad">
  <div className="home-contact-left">
    <p className="eyebrow">03 / YOUR NEXT CHAPTER</p>

    <h2>
      Your forever
      <br />
      starts here<span>.</span>
    </h2>
  </div>

  <div className="home-contact-right">
    <p className="home-contact-description">
      Every beautiful celebration begins with a conversation.
      Tell us your date, your destination, and the story
      you want us to capture.
    </p>

    <div className="home-contact-actions">
      <Link to="/contact" className="button home-contact-button">
        Enquire about your wedding
        <span aria-hidden="true">↗</span>
      </Link>

      <a
        href="https://wa.me/917447275764"
        target="_blank"
        rel="noopener noreferrer"
        className="home-contact-whatsapp"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="23"
          height="23"
          fill="currentColor"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2a9.9 9.9 0 0 0-8.48 15.02L2 22l5.15-1.35A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.06.8.82-2.98-.2-.31a8.2 8.2 0 1 1 6.91 3.81Zm4.5-6.14c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.65.81-.8.98-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.01-.39.11-.52.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.16 1.75 2.67 4.24 3.75.59.25 1.05.41 1.41.53.59.19 1.13.16 1.56.1.47-.07 1.48-.61 1.69-1.2.21-.59.21-1.09.15-1.2-.06-.1-.23-.16-.48-.29Z" />
        </svg>
      </a>
    </div>
  </div>
</section>

    </>
  );
}

function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
}) {
  return (
    <section className="page-intro page-pad">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <>
      <PageIntro
        eyebrow="01 / SELECTED STORIES"
        title={
          <>
            Love, in all
            <br />
            its beautiful forms.
          </>
        }
        text="A collection of celebrations shaped by family, tradition and the wonderfully unexpected."
      />
      <section className="stories-grid page-pad">
        {stories.map((story) => (
          <Link
            to={`/stories/${story.slug}`}
            className="story-card"
            key={story.slug}
          >
            <div className="story-image">
              <img src={story.image} alt={`${story.names} wedding in ${story.place}`} />
            </div>
            <div className="story-meta">
              <h2>{story.names}</h2>
              <div>
                <span>{story.place}</span>
                <span>{story.year}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
      <EditorialCta
        title={
          <>
            Every story is
            <br />
            entirely its own.
          </>
        }
        text="Tell us where yours begins."
      />
    </>
  );
}



function Album({ slug = "aanya-arjun" }: { slug?: string }) {
  const story = stories.find((item) => item.slug === slug) || stories[0];

  const [category, setCategory] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [cloudinaryPhotos, setCloudinaryPhotos] = useState<CloudinaryPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);

  // Load the correct Cloudinary manifest for the selected couple
  useEffect(() => {
    let cancelled = false;

    setCloudinaryPhotos([]);
    setLoading(true);
    setLoadError(false);
    setCategory("All");
    setLightbox(null);

    fetch(`/albums/${story.slug}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load album");
        }

        return response.json();
      })
      .then((data: CloudinaryPhoto[]) => {
        if (!Array.isArray(data)) {
          throw new Error("Invalid album data");
        }

        if (!cancelled) {
          setCloudinaryPhotos(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoadError(true);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [story.slug]);

  // Use Cloudinary photographs for all wedding albums
  const galleryPhotos = useMemo<GalleryPhoto[]>(
    () =>
      cloudinaryPhotos.map((photo: CloudinaryPhoto) => ({
        src: photo.url,
        category: photo.category,
        alt: `${story.names} wedding photograph`,
      })),
    [cloudinaryPhotos, story.names],
  );

  // Automatically create filters from available event categories
  const categories = useMemo<string[]>(
    () => ["All", ...Array.from(new Set(galleryPhotos.map((photo: GalleryPhoto) => photo.category)))],
    [galleryPhotos],
  );

  const filtered = useMemo<GalleryPhoto[]>(
    () =>
      category === "All"
        ? galleryPhotos
        : galleryPhotos.filter((photo) => photo.category === category),
    [category, galleryPhotos],
  );

  // Lightbox keyboard controls
  useEffect(() => {
    if (lightbox === null || filtered.length === 0) return;

    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);

      if (event.key === "ArrowRight") {
        setLightbox((lightbox + 1) % filtered.length);
      }

      if (event.key === "ArrowLeft") {
        setLightbox(
          (lightbox - 1 + filtered.length) % filtered.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", key);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", key);
    };
  }, [lightbox, filtered.length]);

  return (
    <>
      <section className="album-hero">
        <img src={story.image} alt={`${story.names} wedding`} />
        <div className="album-overlay">
          <p className="eyebrow">A WEDDING STORY · {story.year}</p>
          <h1>{story.names}</h1>
          <p>{story.place}</p>
        </div>
      </section>

      <section className="album-intro page-pad">
        <div>
          <p className="eyebrow">THE CELEBRATION</p>
          <h2>
            A day held
            <br />
            close, forever.
          </h2>
        </div>
        <p>
          Two families, one unforgettable gathering, and a celebration alive with colour. From quiet
          morning rituals to a dance floor under the stars, this is their story.
        </p>
      </section>

      <div className="filters page-pad" role="group" aria-label="Filter album by event">
        {categories.map((item: string) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => {
              setCategory(item);
              setLightbox(null);
            }}
          >
            {item}
          </button>
        ))}

        <span>
          {loading
            ? "LOADING..."
            : `${filtered.length} PHOTOGRAPHS`}
        </span>
      </div>

      <section className="masonry page-pad" aria-live="polite">
        {loading ? (
          <p className="album-status" role="status">
            Loading wedding photographs...
          </p>
        ) : loadError ? (
          <p className="album-status" role="alert">
            We couldn’t load this album right now. Please refresh the page and try again.
          </p>
        ) : filtered.length === 0 ? (
          <p className="album-status">
            No photographs found in this category.
          </p>
        ) : (
          filtered.map((photo: GalleryPhoto, index: number) => (
            <button
              className="masonry-item"
              key={`${photo.src}-${index}`}
              onClick={() => setLightbox(index)}
              aria-label={`Open photo ${index + 1}: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index > 5 ? "lazy" : "eager"}
              />
              <span>VIEW</span>
            </button>
          ))
        )}
      </section>

      <div className="album-end page-pad">
        <p className="eyebrow">END OF STORY</p>
        <h2>
          And so, the next
          <br />
          chapter begins.
        </h2>
        <Link to="/stories">Explore more weddings →</Link>
      </div>

      {lightbox !== null && filtered[lightbox] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Wedding photo viewer"
          onClick={() => setLightbox(null)}
        >
          <div className="lightbox-count">
            {String(lightbox + 1).padStart(2, "0")} /{" "}
            {String(filtered.length).padStart(2, "0")}
          </div>

          <button
            className="lightbox-close"
            aria-label="Close photo"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          <button
            className="lightbox-prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + filtered.length) % filtered.length
              );
            }}
          >
            ←
          </button>

          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % filtered.length);
            }}
          >
            →
          </button>

          <p>{filtered[lightbox].category}</p>
        </div>
      )}
    </>
  );
}


const teamPlaceholder = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
    <rect width="800" height="1000" fill="#e9e1d8" />
    <circle cx="400" cy="365" r="115" fill="#c9b9aa" />
    <path d="M180 850c20-190 105-285 220-285s200 95 220 285" fill="#c9b9aa" />
    <text x="400" y="945" text-anchor="middle" fill="#746258" font-family="Arial, sans-serif" font-size="28" letter-spacing="5">PHOTO COMING SOON</text>
  </svg>`
)}`;

function About() {
  return (
    <>
      <PageIntro
        eyebrow="02 / OUR STORY"
        title={
          <>
            Honest moments.
            <br />
            Artfully held.
          </>
        }
        text="We photograph weddings as they feel: full of movement, meaning, colour and all the people you love."
      />
      <section className="wide-image page-pad">
        <img src={local.ritual} alt="A joyful Indian wedding ritual" />
      </section>
      <section className="manifesto page-pad">
        <p className="eyebrow">OUR PHILOSOPHY</p>
        <h2>
          We believe the most meaningful photographs are made when you feel completely present.
        </h2>
        <div>
          <p>
            Our approach is quietly observant and deeply personal. We guide when needed, disappear
            when the moment asks for it, and make room for the celebration to unfold as it should.
          </p>
          <p>
            The result is an honest visual heirloom: refined without feeling arranged, cinematic
            without losing its soul, and unmistakably yours.
          </p>
        </div>
      </section>
      <section className="team-section page-pad">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE PEOPLE BEHIND THE CAMERA</p>
            <h2>Meet the team.</h2>
          </div>
          <p>
            A close-knit collective of photographers,
            <br />
            filmmakers and meticulous storytellers.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <figure key={member.role}>
              <img
                src={teamPlaceholder}
                alt={`${member.name}, ${member.role} — photo coming soon`}
              />
              <figcaption>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <EditorialCta
        title={
          <>
            For everything
            <br />
            you’ll want to remember.
          </>
        }
        text="We would be honoured to tell your story."
      />
    </>
  );
}

const services = [
  {
    number: "01",
    title: "Wedding Photography",
    text: "Complete, thoughtful coverage from the quiet rituals to the wildest dance-floor moments.",
    image: local.bride,
  },
  {
    number: "02",
    title: "Pre-wedding Stories",
    text: "Relaxed portrait sessions designed around a place, pace and feeling that are entirely your own.",
    image: local.couple4,
  },
  {
    number: "03",
    title: "Destination Weddings",
    text: "Seamless multi-day coverage across India and beyond, with an experienced travelling team.",
    image: local.palace,
  },
  {
    number: "04",
    title: "Wedding Films",
    text: "Soulful, cinematic films woven from movement, sound, vows and the voices you hold closest.",
    image: local.ritual,
  },
  {
    number: "05",
    title: "Corporate Events",
    text: "Soulful, cinematic films woven from movement, sound, vows and the voices you hold closest.",
    image: local.couple5,
  },
  {
    number: "06",
    title: "Birthdays & Celebrations",
    text: "Soulful, cinematic films woven from movement, sound, vows and the voices you hold closest.",
    image: local.couple6,
  },
];

function Services() {
  return (
    <>
      <PageIntro
        eyebrow="03 / WHAT WE CREATE"
        title={
          <>
            Stories made
            <br />
            to outlive the day.
          </>
        }
        text="Photography and films that honour the scale of your celebration and the intimacy inside it."
      />
      <section className="services-list page-pad">
        {services.map((service, index: number) => (
          <article className={index % 2 ? "reverse" : ""} key={service.title}>
            <img src={service.image} alt={service.title} />
            <div>
              <p className="eyebrow">{service.number} / SERVICE</p>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <Link to="/contact">ENQUIRE ABOUT THIS SERVICE ↗</Link>
            </div>
          </article>
        ))}
      </section>
      <EditorialCta
        title={
          <>
            Your celebration,
            <br />
            thoughtfully covered.
          </>
        }
        text="Custom collections are created for every wedding."
      />
    </>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };
  return (
    <>
      <PageIntro
        eyebrow="04 / BEGIN YOUR STORY"
        title={
          <>
            Tell us what
            <br />
            you’re dreaming of.
          </>
        }
        text="Share a little about the two of you and the celebration you are planning. We reply within two working days."
      />
      <section className="contact-layout page-pad">
        <aside>
          <p className="eyebrow">DIRECT CONTACT</p>
          <h2>
            We’d love to
            <br />
            hear from you.
          </h2>
          <a href="mailto:bharatifilmcreation@gmail.com">bharatifilmcreation@gmail.com</a>
          <a href="tel:+917447275764">+91 74472 75764</a>
          <a
            className="whatsapp"
            href="https://wa.me/917447275764"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp ↗
          </a>
          <p>
            Based in Mumbai
            <br />
            Photographing celebrations worldwide
          </p>
        </aside>
        <form onSubmit={submit}>
          <label>
            YOUR NAME
            <input name="name" required placeholder="Name" />
          </label>
          <div className="form-row">
            <label>
              EMAIL ADDRESS
              <input type="email" name="email" required placeholder="you@email.com" />
            </label>
            <label>
              PHONE NUMBER
              <input type="tel" name="phone" required placeholder="+91" />
            </label>
          </div>
          <div className="form-row">
            <label>
              EVENT TYPE
              <select name="event" required defaultValue="">
                <option value="" disabled>
                  Select an event
                </option>
                <option>Wedding</option>
                <option>Pre-wedding</option>
                <option>Destination wedding</option>
                <option>Wedding films</option>
                <option>Corporate events</option>
                <option>Birthdays & celebrations</option>
              </select>
            </label>
            <label>
              EVENT DATE
              <input type="date" name="date" required />
            </label>
          </div>
          <label>
            LOCATION
            <input name="location" required placeholder="City or venue" />
          </label>
          <label>
            TELL US ABOUT YOUR CELEBRATION
            <textarea
              name="message"
              required
              rows={5}
              placeholder="A little about the two of you, your plans and what matters most..."
            />
          </label>
          <button className="button" type="submit">
            Send your enquiry <span>↗</span>
          </button>
          {sent && (
            <p className="form-success" role="status">
              Thank you. Your story has reached us, and we’ll be in touch soon.
            </p>
          )}
        </form>
      </section>
    </>
  );
}

function EditorialCta({ title, text }: { title: React.ReactNode; text: string }) {
  return (
    <section className="editorial-cta page-pad">
      <div>
        <p className="eyebrow">YOUR NEXT CHAPTER</p>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{text}</p>
        <Link to="/contact" className="button">
          Tell us your story <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState(routeFromPath);
  useEffect(() => {
    const update = () => setRoute(routeFromPath());
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  return (
    <div className="app">
      <Header />
      <main>
        {route.page === "home" && <Home />}
        {route.page === "stories" && <Stories />}
        {route.page === "album" && <Album slug={route.slug} />}
        {route.page === "about" && <About />}
        {route.page === "services" && <Services />}
        {route.page === "contact" && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
