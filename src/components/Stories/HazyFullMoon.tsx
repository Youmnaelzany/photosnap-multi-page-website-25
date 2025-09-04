import Image from "next/image";
import Link from "next/link";

import { MoveRight } from "lucide-react";

const HazyFullMoon = () => {
  return (
    <section className="relative mx-auto w-full max-w-7xl sm:px-12 md:h-[650px] md:items-start md:justify-center md:bg-[url('/stories/tablet/moon-of-appalacia.jpg')] md:py-16 lg:px-16 lg:md:bg-[url('/stories/desktop/moon-of-appalacia.jpg')]">
      <Image
        src="/stories/mobile/moon-of-appalacia.jpg"
        alt="moon-of-appalacia"
        width={375}
        height={317}
        className="w-full md:hidden"
      />
      <div className="flex w-full flex-col justify-center gap-y-6 bg-black px-6 py-8 text-white md:absolute md:top-42 md:mx-auto md:w-[387px] md:bg-transparent">
        <h1 className="text-xs font-bold tracking-[2px]">
          Last month&apos;s featured story
        </h1>

        <h2 className="text-[32px] leading-10 tracking-[3.33px] uppercase md:text-[40px] md:tracking-[4.17px]">
          Hazy full moon of Appalachia
        </h2>
        <div className="flex items-center text-[13px] font-normal tracking-normal">
          <h3 className="opacity-75">March 2nd 2020</h3>
          <h4 className="">by John Appleseed</h4>
        </div>

        <p className="text-[15px] leading-[25px] tracking-normal opacity-60">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called &quot;mountains,&quot; especially in
          eastern Kentucky and West Virginia, and while the ridges are not high,
          the terrain is extremely rugged.
        </p>

        <Link
          href={"/"}
          className="flex cursor-pointer items-center gap-4 text-[12px] font-bold tracking-[2px] text-white uppercase hover:underline"
        >
          Read the story
          <MoveRight />
        </Link>
      </div>
    </section>
  );
};
export default HazyFullMoon;
