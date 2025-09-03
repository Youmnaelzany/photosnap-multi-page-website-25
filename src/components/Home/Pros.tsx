import Image from "next/image";

import Wrapper from "../Wrapper/Wrapper";

const prosDivs = [
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
];

const Pros = () => {
  return (
    <section className="py-32">
      <Wrapper className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
        {prosDivs.map((pro) => (
          <div
            className="flex w-[310px] flex-col items-center justify-center gap-[48px] md:w-[457px] lg:w-[350px]"
            key={pro.id}
          >
            <div className="">
              <Image
                src={pro.image}
                width={pro.width}
                height={pro.height}
                alt={pro.title}
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-lg leading-6.5 font-bold tracking-normal text-black">
                {pro.title}
              </h2>
              <p className="text-lg leading-6.5 font-normal tracking-normal text-black/80">
                {pro.paragraph}
              </p>
            </div>
          </div>
        ))}
      </Wrapper>
    </section>
  );
};
export default Pros;
