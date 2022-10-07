import React from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="flex flex-col w-full h-40 bg-[#333333]">
      <div className="flex justify-center items-center pt-5 text-2xl text-white cursor-pointer">
        <BsChevronDoubleUp
          className="animate-bounce"
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
      <div className="flex cursor-pointer justify-evenly pt-8 text-white text-2xl items-center">
        <Link href="https://github.com/danialjankouk">
          <a target="_blank">
            <AiOutlineGithub />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/daniyaljankouk/">
          <a target="_blank">
            <FaLinkedinIn />
          </a>
        </Link>
        <Link href="https://twitter.com/DJankouk">
          <a target="_blank">
            <AiOutlineTwitter />
          </a>
        </Link>
      </div>
      <div className="flex justify-center items-center text-white mt-5 pb-2">
        <h1>
          © 2022 - Template developed by
          <a
            href="https://github.com/danialjankouk"
            className="hover:text-[#08B6CD] pl-1 hover:transition-all"
          >
            Danial Jankouk
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
