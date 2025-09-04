import Image from "next/image";
import Link from "next/link";

import { MoveRight } from "lucide-react";

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
  textColor,
  rowReverse,
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
  textColor?: string;
  rowReverse?: boolean;
}) => {
  return (
    <section
      className={`flex flex-col-reverse ${rowReverse ? "md:flex-row-reverse" : "md:flex-row"} mx-auto w-full max-w-7xl`}
    >
      {/* Text */}
      <div
        className="flex w-full flex-col justify-center gap-8 px-6 py-10 sm:px-10 md:w-[495px] lg:w-[610px] lg:px-12"
        style={{
          backgroundColor: backgroundColor || "transparent",
          color: textColor || "Black",
        }}
      >
        <div className="w-[318px] space-y-6 md:w-[387px]">
          <h2 className="text-[2rem] leading-10 font-bold tracking-[3.33px] uppercase md:text-[2.5rem] md:leading-12 md:tracking-[4.17px]">
            {title}
          </h2>
          <p className="text-[0.9375rem] leading-[1.5625rem] font-normal opacity-60">
            {paragraph}
          </p>
        </div>
        <div className="">
          <Link
            href={hrefLink || "/"}
            className="flex cursor-pointer items-center gap-4 text-[0.75rem] font-bold tracking-[2px] uppercase transition duration-300 ease-in-out hover:underline"
          >
            {linkTitle || "View the stories"}
            <MoveRight />
          </Link>
        </div>
      </div>
      {/* Images */}
      <div className="w-full md:w-[273px] lg:w-[830px]">
        <Image
          src={desktopImage}
          alt="Desktop Image"
          width={widthDesktop}
          height={heightDesktop}
          className="hidden bg-cover lg:block"
        />
        <Image
          src={tabletImage}
          alt="Tablet Image"
          width={widthTablet}
          height={heightTablet}
          className="hidden bg-cover md:block lg:hidden"
        />
        <Image
          src={mobileImage}
          alt="Mobile Image"
          width={widthMobile}
          height={heightMobile}
          className="h-auto w-full object-cover md:hidden"
        />
      </div>
    </section>
  );
};
export default HomeCard;
