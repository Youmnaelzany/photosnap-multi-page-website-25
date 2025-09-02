import Image from "next/image";
import Link from "next/link";

import Wrapper from "../Wrapper/Wrapper";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header>
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
          <ul className="">
            <li className="">
              <Link href={"/stories"} className="">
                Stories
              </Link>
            </li>
            <li className="">
              <Link href={"/features"} className="">
                Features
              </Link>
            </li>
            <li className="">
              <Link href={"/pricing"} className="">
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        <Button type="button" asChild>
          Get an invite
        </Button>
      </Wrapper>
    </header>
  );
};
export default Header;
