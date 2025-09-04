import Image from "next/image";

import Wrapper from "../Wrapper/Wrapper";

const featuresData = [
  {
    id: 1,
    image: "/features/desktop/responsive.svg",
    title: "100% Responsive",
    paragraph:
      "No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.",
    width: 72,
    height: 72,
  },
  {
    id: 2,
    image: "/features/desktop/no-limit.svg",
    title: "No Photo Upload Limit",
    paragraph:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    width: 72,
    height: 36,
  },
  {
    id: 3,
    image: "/features/desktop/embed.svg",
    title: "Available to Embed",
    paragraph:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    width: 71,
    height: 72,
  },
  {
    id: 4,
    image: "/features/desktop/custom-domain.svg",
    title: "Custom Domain",
    paragraph:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    width: 81,
    height: 72,
  },
  {
    id: 5,
    image: "/features/desktop/boost-exposure.svg",
    title: "Boost Your Exposure",
    paragraph:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    width: 72,
    height: 72,
  },
  {
    id: 6,
    image: "/features/desktop/drag-drop.svg",
    title: "Drag & Drop Image",
    paragraph:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    width: 91,
    height: 72,
  },
];

interface FeaturesProps {
  limit?: number;
  variant?: "home" | "features";
}

const Features = ({ limit, variant = "features" }: FeaturesProps) => {
  const displayFeatures = limit ? featuresData.slice(0, limit) : featuresData;

  // Dynamic classes based on variant
  const gridClasses =
    variant === "home"
      ? "grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-1 lg:grid-cols-3 lg:justify-between"
      : "grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 md:items-end lg:grid-cols-3 lg:justify-between";

  const cardClasses =
    variant === "home"
      ? "flex w-[310px] flex-col items-center justify-center gap-[48px] md:w-[450px] lg:w-[350px]"
      : "flex w-[310px] flex-col items-center justify-center gap-[48px] md:w-[325px] lg:w-[350px]";

  return (
    <section className="mx-auto flex items-center justify-center py-32">
      <Wrapper className={gridClasses}>
        {displayFeatures.map((feature) => (
          <div className={cardClasses} key={feature.id}>
            <div className="">
              <Image
                src={feature.image}
                width={feature.width}
                height={feature.height}
                alt={feature.title}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-lg leading-6.5 font-bold tracking-normal text-black">
                {feature.title}
              </h2>
              <p className="text-lg leading-6.5 font-normal tracking-normal text-black/80">
                {feature.paragraph}
              </p>
            </div>
          </div>
        ))}
      </Wrapper>
    </section>
  );
};

export default Features;
