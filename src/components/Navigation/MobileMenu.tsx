import Link from "next/link";

import { Logs } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Logs className="size-7 text-black" />
        </SheetTrigger>
        <SheetContent className="w-full py-16">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="space-y-8">
              <nav className="">
                <ul className="flex flex-col items-center justify-center gap-8">
                  <li className="">
                    <Link
                      href={"/"}
                      className="text-[15px] font-bold tracking-[2.5px] text-black uppercase"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={"/stories"}
                      className="text-[15px] font-bold tracking-[2.5px] text-black uppercase"
                    >
                      Stories
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={"/features"}
                      className="text-[15px] font-bold tracking-[2.5px] text-black uppercase"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={"/pricing"}
                      className="text-[15px] font-bold tracking-[2.5px] text-black uppercase"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>
              <Separator />
              <Button
                type="button"
                className="h-10 w-full cursor-pointer rounded-none bg-black text-[15px] font-bold tracking-[2.5px] text-white uppercase transition-colors duration-300 ease-in-out hover:bg-[#DFDFDF] hover:text-black"
              >
                Get an invite
              </Button>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileMenu;
