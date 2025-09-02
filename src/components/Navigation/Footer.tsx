import Image from "next/image";
import Link from "next/link";

import { MoveRight } from "lucide-react";
import { FaFacebookSquare, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiYoutubemusic } from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Wrapper from "../Wrapper/Wrapper";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <Link href={"/"}>
          <Image
            src={"/shared/desktop/logo-white.svg"}
            alt="Logo"
            width={170}
            height={16}
          />
        </Link>
        {/* Social Media */}
        <div className="">
          <Link href={"/"} className="">
            {/* FACEBOOK */}
            <Tooltip>
              <TooltipTrigger>
                <FaFacebookSquare />
              </TooltipTrigger>
              <TooltipContent>
                <p>Facebook</p>
              </TooltipContent>
            </Tooltip>
          </Link>
          {/* YOUTUBE */}
          <Link href={"/"} className="">
            <Tooltip>
              <TooltipTrigger>
                <SiYoutubemusic />
              </TooltipTrigger>
              <TooltipContent>
                <p>YouTube</p>
              </TooltipContent>
            </Tooltip>
          </Link>
          {/* X */}
          <Link href={"/"} className="">
            <Tooltip>
              <TooltipTrigger>
                <FaXTwitter />
              </TooltipTrigger>
              <TooltipContent>
                <p>X</p>
              </TooltipContent>
            </Tooltip>
          </Link>
          {/* Pinterest */}
          <Link href={"/"} className="">
            <Tooltip>
              <TooltipTrigger>
                <FaPinterest />
              </TooltipTrigger>
              <TooltipContent>
                <p>Pinterest</p>
              </TooltipContent>
            </Tooltip>
          </Link>
          {/* Instagram */}
          <Link href={"/"} className="">
            <Tooltip>
              <TooltipTrigger>
                <FiInstagram />
              </TooltipTrigger>
              <TooltipContent>
                <p>Instagram</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        </div>
        {/* Navigation Links */}
        <nav className="">
          <ul className="">
            <li className="">
              <Link href={"/"} className="">
                Home
              </Link>
            </li>
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
        <div className="">
          <Link href={"/"} className="">
            Get an invite
            <MoveRight />
          </Link>
        </div>
        <div className="">
          <h3 className="">Copyright 2019. All Rights Reserved</h3>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
