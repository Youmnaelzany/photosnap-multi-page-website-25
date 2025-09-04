import Link from "next/link";

import { MoveRight } from "lucide-react";

import { Separator } from "../ui/separator";

const stories = [
  {
    id: 1,
    date: "April 16th 2020",
    name: "The Mountains",
    photographer: "by John Appleseed",
    imageMobile: "/stories/mobile/mountains.jpg",
    imageDesktop: "/stories/desktop/mountains.jpg",
  },
  {
    id: 2,
    date: "April 14th 2020",
    name: "Sunset Cityscapes",
    photographer: "by Benjamin Cruz",
    imageMobile: "/stories/mobile/cityscapes.jpg",
    imageDesktop: "/stories/desktop/cityscapes.jpg",
  },
  {
    id: 3,
    date: "April 11th 2020",
    name: "18 Days Voyage",
    photographer: "by Alexei Borodin",
    imageMobile: "/stories/mobile/18-days-voyage.jpg",
    imageDesktop: "/stories/desktop/18-days-voyage.jpg",
  },
  {
    id: 4,
    date: "April 9th 2020",
    name: "Architecturals",
    photographer: "by Samantha Brooke",
    imageMobile: "/stories/mobile/architecturals.jpg",
    imageDesktop: "/stories/desktop/architecturals.jpg",
  },
  {
    id: 5,
    date: "April 7th 2020",
    name: "World Tour 2019",
    photographer: "by Timothy Wagner",
    imageMobile: "/stories/mobile/world-tour.jpg",
    imageDesktop: "/stories/desktop/world-tour.jpg",
  },
  {
    id: 6,
    date: "April 3rd 2020",
    name: "Unforeseen Corners",
    photographer: "by William Malcolm",
    imageMobile: "/stories/mobile/unforeseen-corners.jpg",
    imageDesktop: "/stories/desktop/unforeseen-corners.jpg",
  },
  {
    id: 7,
    date: "March 29th 2020",
    name: "King on Africa: Part II",
    photographer: "by Tim Hillenburg",
    imageMobile: "/stories/mobile/king-on-africa.jpg",
    imageDesktop: "/stories/desktop/king-on-africa.jpg",
  },
  {
    id: 8,
    date: "March 21st 2020",
    name: "The Trip to Nowhere",
    photographer: "by Felicia Rourke",
    imageMobile: "/stories/mobile/trip-to-nowhere.jpg",
    imageDesktop: "/stories/desktop/trip-to-nowhere.jpg",
  },
  {
    id: 9,
    date: "March 19th 2020",
    name: "Rage of The Sea",
    photographer: "by Mohammed Abdul",
    imageMobile: "/stories/mobile/rage-of-the-sea.jpg",
    imageDesktop: "/stories/desktop/rage-of-the-sea.jpg",
  },
  {
    id: 10,
    date: "March 16th 2020",
    name: "Running Free",
    photographer: "by Michelle",
    imageMobile: "/stories/mobile/running-free.jpg",
    imageDesktop: "/stories/desktop/running-free.jpg",
  },
  {
    id: 11,
    date: "March 11th 2020",
    name: "Behind the Waves",
    photographer: "by Lamarr Wilson",
    imageMobile: "/stories/mobile/behind-the-waves.jpg",
    imageDesktop: "/stories/desktop/behind-the-waves.jpg",
  },
  {
    id: 12,
    date: "March 9th 2020",
    name: "Calm Waters",
    photographer: "by Samantha Brooke",
    imageMobile: "/stories/mobile/calm-waters.jpg",
    imageDesktop: "/stories/desktop/calm-waters.jpg",
  },
  {
    id: 13,
    date: "March 5th 2020",
    name: "The Milky Way",
    photographer: "by Benjamin Cruz",
    imageMobile: "/stories/mobile/milky-way.jpg",
    imageDesktop: "/stories/desktop/milky-way.jpg",
  },
  {
    id: 14,
    date: "March 4th 2020",
    name: "Night at The Dark Forest",
    photographer: "by Mohammed Abdul",
    imageMobile: "/stories/mobile/dark-forest.jpg",
    imageDesktop: "/stories/desktop/dark-forest.jpg",
  },
  {
    id: 15,
    date: "March 1st 2020",
    name: "Somwarpet's Beauty",
    photographer: "by Michelle",
    imageMobile: "/stories/mobile/somwarpet.jpg",
    imageDesktop: "/stories/desktop/somwarpet.jpg",
  },
  {
    id: 16,
    date: "February 25th 2020",
    name: "Land of Dreams",
    photographer: "by William Malcolm",
    imageMobile: "/stories/mobile/land-of-dreams.jpg",
    imageDesktop: "/stories/desktop/land-of-dreams.jpg",
  },
];

interface StoryCardProps {
  limit?: number;
}

const StoryCard = ({ limit }: StoryCardProps) => {
  const displayStories = limit ? stories.slice(0, limit) : stories;

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-4">
      {displayStories.map((story) => (
        <div
          key={story.id}
          className="group relative h-[375px] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out hover:-translate-y-8 md:h-[500px]"
          style={
            {
              backgroundImage: `url(${story.imageMobile})`,
              "--mobile-bg": `url(${story.imageMobile})`,
              "--desktop-bg": `url(${story.imageDesktop})`,
            } as React.CSSProperties & {
              "--mobile-bg": string;
              "--desktop-bg": string;
            }
          }
        >
          {/* Gray overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Gradient border that appears on hover */}
          <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

          {/* Content above overlay */}
          <div className="relative z-10 flex h-full flex-col justify-end gap-6 p-6 text-white">
            <div className="space-y-1">
              <h2 className="text-sm font-normal tracking-normal">
                {story.date}
              </h2>
              <h3 className="text-lg leading-6.5 font-bold tracking-normal">
                {story.name}
              </h3>
              <h4 className="text-sm font-normal tracking-normal">
                {story.photographer}
              </h4>
            </div>

            <div>
              <Separator className="mb-4 bg-white/25" />
              <Link
                href={"/"}
                className="flex cursor-pointer items-center justify-between gap-4 text-[12px] font-bold tracking-[2px] uppercase hover:underline"
              >
                Read the story
                <MoveRight />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
export default StoryCard;
