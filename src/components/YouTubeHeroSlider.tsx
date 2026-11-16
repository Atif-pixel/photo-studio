import { useEffect, useState } from "react";
import "./YouTubeHeroSlider.css";

const videos = [
  "rhHyl_0VjkQ",
  "u03MsuIcepc",
  "6qZK-DiuZa8",
  "yV6y5nMfCQA",
  "_xqOAZk6UCI",
  "2IvsPd-OgXQ",
  // Add the remaining YouTube video IDs here
];

export default function YouTubeHeroSlider() {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((current) => (current + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="youtube-hero-slider">
      {videos.map((video, index) => (
        <div
          key={video}
          className={`youtube-hero-slide ${
            activeVideo === index ? "active" : ""
          }`}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video}&playsinline=1&rel=0&modestbranding=1`}
            title={`Wedding film ${index + 1}`}
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      ))}
    </div>
  );
}