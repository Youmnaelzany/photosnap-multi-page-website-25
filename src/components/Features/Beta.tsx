import Link from "next/link";

import { MoveRight } from "lucide-react";

const Beta = () => {
  return (
    <section className="mx-auto flex h-[288px] w-full max-w-7xl flex-col justify-center gap-6 bg-[url('/shared/mobile/bg-beta.jpg')] bg-cover bg-no-repeat px-6 sm:px-10 md:h-[280px] md:flex-row md:items-center md:justify-between md:bg-[url('/shared/tablet/bg-beta.jpg')] lg:bg-[url('/shared/desktop/bg-beta.jpg')] lg:px-16">
      <h2 className="w-[310px] text-[32px] leading-10 tracking-[3.33px] text-white uppercase md:w-[400px] md:text-[40px] md:tracking-[4.17px]">
        We&apos;re in Beta. Get your invite today!
      </h2>
      <Link
        href={"/"}
        className="flex cursor-pointer items-center gap-4 text-[12px] font-bold tracking-[2px] text-white uppercase hover:underline"
      >
        Read the story
        <MoveRight />
      </Link>
    </section>
  );
};
export default Beta;
