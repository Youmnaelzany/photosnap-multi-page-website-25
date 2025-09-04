import Image from "next/image";
import Link from "next/link";

import { MoveRight } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Wrapper from "../Wrapper/Wrapper";

const Footer = () => {
  return (
    <footer>
      <Wrapper className="grid grid-cols-1 justify-between gap-8 bg-black py-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-8 md:items-start md:justify-between">
          <Link href={"/"}>
            <Image src={"/logo-white.svg"} alt="Logo" width={170} height={16} />
          </Link>
          {/* Social Media */}
          <div className="flex items-center justify-center gap-8 md:items-start md:justify-between">
            <Link href={"/"} className="">
              {/* FACEBOOK */}
              <Tooltip>
                <TooltipTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    className="facebook-icon text-white"
                  >
                    <defs>
                      <linearGradient
                        id="facebook-gradient"
                        x1="100%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#63AFDB" />
                        <stop offset="100%" stopColor="#6028F1" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    className="youtube-icon text-white"
                  >
                    <defs>
                      <linearGradient
                        id="youtube-gradient"
                        x1="100%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#D3205A" />
                        <stop offset="100%" stopColor="#FF5A5A" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    className="twitter-icon text-white"
                  >
                    <defs>
                      <linearGradient
                        id="twitter-gradient"
                        x1="100%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#65FFEB" />
                        <stop offset="100%" stopColor="#27718A" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.427 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    className="pinterest-icon text-white"
                  >
                    <defs>
                      <linearGradient
                        id="pinterest-gradient"
                        x1="100%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#F6C683" />
                        <stop offset="100%" stopColor="#DE3838" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"
                    />
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    className="instagram-icon text-white"
                  >
                    <defs>
                      <linearGradient
                        id="instagram-gradient"
                        x1="100%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#FFC593" />
                        <stop offset="50%" stopColor="#BC7198" />
                        <stop offset="100%" stopColor="#5A77FF" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
        </div>
        {/* Navigation Links */}
        <nav className="md:order-3 lg:order-none">
          <ul className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left lg:flex-col">
            <li className="">
              <Link
                href={"/"}
                className="text-[12px] font-bold tracking-[2px] text-white uppercase hover:opacity-30"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                href={"/stories"}
                className="text-[12px] font-bold tracking-[2px] text-white uppercase hover:opacity-30"
              >
                Stories
              </Link>
            </li>
            <li className="">
              <Link
                href={"/features"}
                className="text-[12px] font-bold tracking-[2px] text-white uppercase hover:opacity-30"
              >
                Features
              </Link>
            </li>
            <li className="">
              <Link
                href={"/pricing"}
                className="text-[12px] font-bold tracking-[2px] text-white uppercase hover:opacity-30"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
        {/* Invite Link & Copyright */}
        <div className="flex flex-col items-center justify-center gap-8 md:items-end md:justify-between">
          <Link
            href={"/"}
            className="flex cursor-pointer items-center justify-between gap-4 text-[12px] font-bold tracking-[2px] text-white uppercase hover:underline"
          >
            Get an invite
            <MoveRight />
          </Link>
          <h3 className="text-[15px] tracking-normal text-white/50 hover:underline">
            Copyright 2019. All Rights Reserved
          </h3>
        </div>
      </Wrapper>
    </footer>
  );
};
export default Footer;
