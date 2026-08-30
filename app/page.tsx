import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FeaturedStories from "@/components/FeaturedStories";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";
// import TargetCursor from "@/components/TargetCursor";

export default function Home() {
  return (
    <main>
      {/* <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#ffffff"
        cursorColorOnTarget="#B497CF"
      /> */}

      <Navbar />
      <Hero />
      <Intro />
      <FeaturedStories />
      <Services />
      <Testimonials />
    </main>
  );
}