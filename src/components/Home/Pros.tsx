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
    <section>
      <Wrapper>
        {prosDivs.map((pro) => (
          <div className="" key={pro.id}>
            <div className="">
              <Image
                src={pro.image}
                width={pro.width}
                height={pro.height}
                alt={pro.title}
              />
            </div>
            <div className="">
              <h2 className="">{pro.title}</h2>
              <p className="">{pro.paragraph}</p>
            </div>
          </div>
        ))}
      </Wrapper>
    </section>
  );
};
export default Pros;
