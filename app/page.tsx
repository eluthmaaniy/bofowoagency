import { AboutPreview } from "./components/AboutPreview";
import { Hero } from "./components/Hero";
import { ShowcasePreview } from "./components/ShowcasePreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ShowcasePreview />
    </>
  );
}
