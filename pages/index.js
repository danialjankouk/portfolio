import Head from "next/head";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import Footer from "../components/Footer";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={!darkMode ? "dark mx-auto overflow-hidden" : "mx-auto"}>
      <Head>
        <title>Danial Jankouk</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-slate-300 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons md:text-xl pr-2">jankouk</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1Oqc55BZdKMaiOkYqxdTzE4A8M1jssEsz/view"
                  download
                  className="bg-gradient-to-r cursor-pointer from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r cursor-pointer from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  onClick={() => window.open("mailto:dani.jankook@gmail.com")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Danial Jankouk
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front End Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              My field of Interest`s are building new Web Technologies and
              Products . Join me down below and let`s get cracking!
            </p>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-64 h-64 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="image" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a developer I`ll always
              looking for{" "}
              <span className="text-teal-500"> Self Development </span> and
              increase my <span className="text-teal-500">Skills</span>, I`m so
              excited to learn more about programming in this field and
              collaborat with talanted people to create digital products for
              both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              ` The web can sometimes be indistinguishable from magic, but I
              have the knowledge and patience required to make just about
              anything `
            </p>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 dark:text-white ">Projects</h3>
          <div className="flex flex-col gap-10 py-10">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-sm object-cover"
                layout="responsive"
                src={web1}
                alt="image"
              />
              <div className="justify-between bg-[#343A40] p-5 text-white flex md:flex-row flex-col">
                <div>
                  <h1 className="text-[#27B1A3] text-xl font-bold pb-5">
                    Spotify
                  </h1>
                  <p>A Spotify Clone Created with React.js and Redux.</p>
                </div>
                <div className="flex flex-row gap-x-5 items-center mt-3 md:mt-0">
                  <Link href="http://spotify-beta-ten.vercel.app/">
                    <button className="bg-[#27B1A3] w-16 h-10 rounded-md">
                      Live
                    </button>
                  </Link>
                  <Link href="https://github.com/danialjankouk/spotify">
                    <button className="bg-[#27B1A3] w-16 h-10 rounded-md">
                      Source
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-sm object-cover"
                layout="responsive"
                src={web2}
                alt="image"
              />
              <div className="justify-between bg-[#343A40] p-5 text-white flex md:flex-row flex-col">
                <div>
                  <h1 className="text-[#27B1A3] text-xl font-bold pb-5">
                    Store App
                  </h1>
                  <p>
                    A store project with the ability to add products to the cart
                    and have a details page to developed with React, in this
                    project use API from fakestoreapi.com , axios and
                    react-router-dom@6.2.0 . also this project developed with
                    some hooks like useReducer and useContext.{" "}
                  </p>
                </div>
                <div className="flex flex-row gap-x-5 items-center mt-3 md:mt-0">
                  <Link href="https://sellproducts.netlify.app">
                    <button className="bg-[#27B1A3] w-16 h-10 rounded-md">
                      Live
                    </button>
                  </Link>
                  <Link href="https://github.com/danialjankouk/react-store">
                    <button className="bg-[#27B1A3] w-16 h-10 rounded-md">
                      Source
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-sm object-cover"
                layout="responsive"
                src={web3}
                alt="image"
              />
              <div className="justify-between bg-[#343A40] p-5 text-white flex md:flex-row flex-col">
                <div>
                  <h1 className="text-[#27B1A3] font-bold text-xl pb-5">
                    Crypto Exchange
                  </h1>
                  <p className="w-full">
                    A Cryptourrency Exchange that use API from coingecko.com and
                    you have Searchbar for Searching between Crypto`s , 24-hour
                    Price Changing , Sign`s , Rank , Marketcap .
                  </p>
                </div>
                <div className="flex flex-row gap-x-5 items-center mt-3 md:mt-0">
                  <Link href="https://mini-exchange.netlify.app">
                    <button className="bg-[#27B1A3] w-16 h-10 rounded-md">
                      Live
                    </button>
                  </Link>
                  <Link href="https://github.com/danialjankouk/crypto_exchange">
                    <button className="bg-[#27B1A3] w-16 h-10 rounded-md">
                      Source
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white">Contact</h3>
          <div className="mt-5">
            <p className="dark:text-white text-xl">
              Would you like to work with me? Awesome!
            </p>
            <button
              className="border-2 hover:scale-110 transition ease-in-out delay-150 mt-3 hover:bg-[#27B1A3] border-[#27B1A3] p-2 dark:text-white"
              onClick={() => window.open("mailto:dani.jankook@gmail.com")}
            >
              Let`s Talk
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
