import { FormEvent, useEffect, useMemo, useState } from "react";
import YouTubeHeroSlider from "./components/YouTubeHeroSlider";

type Page = "home" | "stories" | "album" | "about" | "services" | "contact";
type Category = "All" | "Haldi" | "Mehendi" | "Wedding" | "Reception";

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

const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=84&w=${width}`;

const photos = [
  unsplash("photo-1639575668910-9a14063add58"),
  unsplash("photo-1639575668832-8991b62831ff"),
  unsplash("photo-1755946684049-03e1ebc67ea7"),
  unsplash("photo-1758467745965-00ca240b1224"),
  unsplash("photo-1639575668825-713895939825"),
  unsplash("photo-1639575668829-c56a82db9f00"),
  unsplash("photo-1639575668834-e0fd81f744ad"),
  unsplash("photo-1639575668829-7e59e0195b06"),
  unsplash("photo-1639575668833-563e2b735e77"),
  unsplash("photo-1584610129029-a2144a29359d"),
  unsplash("photo-1595419293062-457444d419b8"),
  unsplash("photo-1639575667162-3558baf3acf9"),
  unsplash("photo-1650709244939-d9e5cf32ef0a"),
  unsplash("photo-1639575668107-28826c930d9d"),
  unsplash("photo-1650709244890-cc35b30d8036"),
  unsplash("photo-1501144600699-729d204d332b"),
  unsplash("photo-1764796833952-ec9c0517d4a2"),
  unsplash("photo-1717131553880-d9e0af636fd9"),
];

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
    slug: "parth-shradha",
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

const albumPhotos: { src: string; category: Exclude<Category, "All">; alt: string }[] = [
  {
    src: local.palace,
    category: "Wedding",
    alt: "Couple walking through a palace wedding courtyard",
  },
  { src: local.bride, category: "Wedding", alt: "Bridal portrait in deep maroon wedding attire" },
  { src: photos[2], category: "Mehendi", alt: "Wedding guests in colourful traditional attire" },
  { src: local.ritual, category: "Wedding", alt: "Bride and groom during their wedding ceremony" },
  { src: photos[3], category: "Reception", alt: "Wedding party at a grand Indian palace" },
  { src: photos[4], category: "Wedding", alt: "Traditional baraat ceremony details" },
  { src: photos[10], category: "Mehendi", alt: "Guests arriving at a palace celebration" },
  { src: photos[6], category: "Haldi", alt: "Family gathered for a pre-wedding ritual" },
  { src: photos[12], category: "Reception", alt: "A regal Indian wedding procession" },
  { src: photos[8], category: "Haldi", alt: "Friends sharing a candid celebration" },
  { src: photos[14], category: "Wedding", alt: "Family dressed for the wedding ceremony" },
  { src: photos[17], category: "Reception", alt: "Groom arriving in a traditional procession" },
  { src: photos[0], category: "Mehendi", alt: "Loved ones together during wedding festivities" },
  { src: photos[13], category: "Haldi", alt: "A joyful moment during an Indian celebration" },
  { src: photos[1], category: "Wedding", alt: "Family watching the wedding rituals" },
  { src: photos[5], category: "Reception", alt: "Candid portrait from the wedding reception" },
  { src: photos[11], category: "Haldi", alt: "A colourful gathering before the ceremony" },
  { src: photos[15], category: "Mehendi", alt: "Quiet architectural moment between celebrations" },
  { src: photos[7], category: "Wedding", alt: "Wedding guests gathered for the vows" },
  { src: photos[9], category: "Reception", alt: "Portrait in warm evening light" },
  { src: photos[16], category: "Mehendi", alt: "Festive colour at a destination celebration" },
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
        Bharati Film Creation
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
            Instagram ↗
          </a>
          <a href="mailto:hello@bharatifilmcreation.com">Email us</a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
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
        <div>
          <p className="eyebrow">03 / YOUR NEXT CHAPTER</p>
          <h2>
            Your forever
            <br />
            starts here.
          </h2>
        </div>
        <div>
          <p>
            Tell us your date, your destination,
            <br />
            and the celebration you’re dreaming of.
          </p>
          <Link to="/contact" className="button">
            Enquire about your wedding <span>↗</span>
          </Link>
          <a href="https://wa.me/917447275764">WhatsApp · +91 7447275764</a>
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
        {stories.map((story, index) => (
          <Link
            to={`/stories/${story.slug}`}
            className={`story-card story-${index + 1}`}
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
  const [category, setCategory] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = useMemo(
    () =>
      category === "All" ? albumPhotos : albumPhotos.filter((photo) => photo.category === category),
    [category],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((lightbox + 1) % filtered.length);
      if (event.key === "ArrowLeft")
        setLightbox((lightbox - 1 + filtered.length) % filtered.length);
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
        {(["All", "Haldi", "Mehendi", "Wedding", "Reception"] as Category[]).map((item) => (
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
        <span>{filtered.length} PHOTOGRAPHS</span>
      </div>
      <section className="masonry page-pad" aria-live="polite">
        {filtered.map((photo, index) => (
          <button
            className="masonry-item"
            key={`${photo.src}-${index}`}
            onClick={() => setLightbox(index)}
            aria-label={`Open photo ${index + 1}: ${photo.alt}`}
          >
            <img src={photo.src} alt={photo.alt} loading={index > 5 ? "lazy" : "eager"} />
            <span>VIEW</span>
          </button>
        ))}
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
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Wedding photo viewer"
          onClick={() => setLightbox(null)}
        >
          <div className="lightbox-count">
            {String(lightbox + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
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
              setLightbox((lightbox - 1 + filtered.length) % filtered.length);
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
          {[
            ["Yogesh Bharati", "FOUNDER · PHOTOGRAPHER", photos[9]],
            ["Yogesh Bharati", "CREATIVE DIRECTOR", photos[19 % photos.length]],
            ["Yogesh Bharati", "LEAD FILMMAKER", photos[3]],
          ].map(([name, role, image]) => (
            <figure key={name}>
              <img src={image} alt={`${name}, ${role}`} />
              <figcaption>
                <h3>{name}</h3>
                <p>{role}</p>
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
        {services.map((service, index) => (
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
          <a href="mailto:hello@bharatifilmcreation.com">hello@bharatifilmcreation.com</a>
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
