import Beta from "@/components/Features/Beta";
import Features from "@/components/Features/Features";
import FeaturesIntro from "@/components/Features/FeaturesIntro";

export default function FeaturesPage() {
  return (
    <main className="pt-25">
      <FeaturesIntro />
      <Features variant="features" />
      <Beta />
    </main>
  );
}
