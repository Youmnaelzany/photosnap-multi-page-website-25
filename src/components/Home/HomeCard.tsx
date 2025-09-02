import Image from "next/image";
import Link from "next/link";

import { MoveRight } from "lucide-react";

import Wrapper from "../Wrapper/Wrapper";

const HomeCard = ({
  title,
  paragraph,
  mobileImage,
  tabletImage,
  desktopImage,
  widthMobile,
  heightMobile,
  widthTablet,
  heightTablet,
  widthDesktop,
  heightDesktop,
  backgroundColor,
  linkTitle,
  hrefLink,
}: {
  title: string;
  paragraph: string;
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  widthMobile: number;
  heightMobile: number;
  widthTablet: number;
  heightTablet: number;
  widthDesktop: number;
  heightDesktop: number;
  backgroundColor?: string;
  linkTitle?: string;
  hrefLink?: string;
}) => {
  return (
    <section>
      <Wrapper className="flex flex-col md:flex-row">
        {/* Text */}
        <div
          className=""
          style={{ backgroundColor: backgroundColor || "transparent" }}
        >
          <div className="">
            <h2 className="">{title}</h2>
            <p className="">{paragraph}</p>
          </div>
          <div className="">
            <Link href={hrefLink || "/"} className="">
              {linkTitle || "View the stories"}
              <MoveRight />
            </Link>
          </div>
        </div>
        {/* Images */}
        <div className="">
          <Image
            src={desktopImage}
            alt="Desktop Image"
            width={widthDesktop}
            height={heightDesktop}
            className="hidden lg:block"
          />
          <Image
            src={tabletImage}
            alt="Tablet Image"
            width={widthTablet}
            height={heightTablet}
            className="hidden md:block lg:hidden"
          />
          <Image
            src={mobileImage}
            alt="Mobile Image"
            width={widthMobile}
            height={heightMobile}
            className="md:hidden"
          />
        </div>
      </Wrapper>
    </section>
  );
};
export default HomeCard;
