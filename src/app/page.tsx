import BeautifulStories from "@/components/Home/BeautifulStories";
import CreateShare from "@/components/Home/CreateShare";
import DesignEveryone from "@/components/Home/DesignEveryone";
import Pros from "@/components/Home/Pros";
import StoryCard from "@/components/Stories/StoryCard";

export default function Home() {
  return (
    <main className="pt-25 md:pt-0">
      <CreateShare />
      <BeautifulStories />
      <DesignEveryone />
      <StoryCard limit={4} />
      <Pros />
    </main>
  );
}
