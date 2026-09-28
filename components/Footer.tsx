"use client";

import Stack from "./Stack";
import "./Footer.css";

const images = [
  "/images/footer-01.jpg",
  "/images/footer-02.jpg",
  "/images/footer-03.jpg",
  "/images/footer-04.jpg",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-stack-side">
        <div className="footer-stack-label">
          <span>05</span>
          <span className="footer-line" />
          <span>Frames worth keeping</span>
        </div>

        <div className="footer-stack">
          <Stack
            randomRotation={false}
            sensitivity={120}
            sendToBackOnClick={true}
            cards={images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Wedding frame ${i + 1}`}
                className="footer-stack-image"
              />
            ))}
            autoplay={false}
            autoplayDelay={3000}
            pauseOnHover={false}
          />
        </div>

        <p className="footer-stack-hint">
          Drag to explore
        </p>
      </div>

      <div className="footer-info-side">
        <div className="footer-brand">
          <span>WEDDING STUDIO</span>
        </div>

        <div className="footer-navigation">
          <div>
            <span className="footer-small-label">
              Explore
            </span>

            <a href="#work">Work</a>
            <a href="#stories">Stories</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <span className="footer-small-label">
              Connect
            </span>

            <a href="#">Instagram</a>
            <a href="#">Email</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Pune · India</span>
          <span>© 2026</span>
          <span>Back to top ↑</span>
        </div>
      </div>
    </footer>
  );
}