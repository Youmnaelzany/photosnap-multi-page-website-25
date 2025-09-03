import BeautifulStories from "@/components/Home/BeautifulStories";
import CreateShare from "@/components/Home/CreateShare";
import DesignEveryone from "@/components/Home/DesignEveryone";
import Pros from "@/components/Home/Pros";

export default function Home() {
  return (
    <main className="">
      <CreateShare />
      <BeautifulStories />
      <DesignEveryone />
      <Pros />
    </main>
  );
}
