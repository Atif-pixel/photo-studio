import StoriesHero from "./StoriesHero";
import NavBar from "@/components/Navbar";
import Story from "./Story";

export default function StoriesPage() {
  return (
    <main>
      <NavBar />
      <StoriesHero />
      <Story />
    </main>
  );
}