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
    <div>
      <Sheet>
        <SheetTrigger>
          <Logs />
        </SheetTrigger>
        <SheetContent className="w-full">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription>
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
              <Separator />
              <Button type="button" asChild>
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
