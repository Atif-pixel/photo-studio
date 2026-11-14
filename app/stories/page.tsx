import StoriesHero from "./StoriesHero";
import NavBar from "@/components/Navbar";
import Story from "./Story";
import Footer from "@/components/Footer";

export default function StoriesPage() {
  return (
    <main>
      <NavBar />
      <StoriesHero />
      <Story />
      <Footer />
    </main>
  );
}