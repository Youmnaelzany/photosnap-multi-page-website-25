import Features from "@/components/Features/Features";
import BeautifulStories from "@/components/Home/BeautifulStories";
import CreateShare from "@/components/Home/CreateShare";
import DesignEveryone from "@/components/Home/DesignEveryone";
import StoryCard from "@/components/Stories/StoryCard";

export default function HomePage() {
  return (
    <main className="pt-25">
      <CreateShare />
      <BeautifulStories />
      <DesignEveryone />
      <StoryCard limit={4} />
      <Features limit={3} variant="home" />
    </main>
  );
}
