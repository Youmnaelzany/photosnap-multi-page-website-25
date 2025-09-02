import BeautifulStories from "@/components/Home/BeautifulStories";
import CreateShare from "@/components/Home/CreateShare";
import DesignEveryone from "@/components/Home/DesignEveryone";

export default function Home() {
  return (
    <main className="">
      <CreateShare />
      <BeautifulStories />
      <DesignEveryone />
    </main>
  );
}
