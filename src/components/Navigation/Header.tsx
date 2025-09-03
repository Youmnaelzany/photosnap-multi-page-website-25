import Image from "next/image";
import Link from "next/link";

import Wrapper from "../Wrapper/Wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <Wrapper className="flex items-center justify-between py-8">
        <Link href={"/"}>
          <Image
            src={"/shared/desktop/logo.svg"}
            alt="Logo"
            width={170}
            height={16}
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center justify-between gap-8">
            <li className="">
              <Link
                href={"/stories"}
                className="cursor-pointer text-[0.75rem] font-bold text-black uppercase transition-colors duration-300 ease-in-out hover:opacity-30"
              >
                Stories
              </Link>
            </li>
            <li className="">
              <Link
                href={"/features"}
                className="cursor-pointer text-[0.75rem] font-bold text-black uppercase transition-colors duration-300 ease-in-out hover:opacity-30"
              >
                Features
              </Link>
            </li>
            <li className="">
              <Link
                href={"/pricing"}
                className="cursor-pointer text-[0.75rem] font-bold text-black uppercase transition-colors duration-300 ease-in-out hover:opacity-30"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          type="button"
          className="hidden h-[40px] w-[158px] cursor-pointer rounded-none bg-black text-[0.75rem] font-bold tracking-[2px] text-white uppercase transition-colors duration-300 ease-in-out hover:bg-[#DFDFDF] hover:text-black md:block"
        >
          Get an invite
        </Button>
        <MobileMenu />
      </Wrapper>
    </header>
  );
};
export default Header;
