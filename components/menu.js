import Head from "next/head";
import Link from "next/link";

import Image from "next/image";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";

export default function Menubar() {
  return (
    <div>
      <nav className="relative z-10 rounded border-gray-200  px-2 py-2.5 dark:bg-gray-800 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <Image
                src="/img/oktlogo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Oktosix Logo"
                width={80}
                height={50}
              />
            </div>
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              className="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <SocialIcon
                url="https://twitter.com/crisvytv"
                style={{ height: 20, width: 20, marginRight: 10 }}
              />

              <SocialIcon
                url="https://facebook.com/crisvytv"
                style={{ height: 20, width: 20, marginRight: 10 }}
              />

              <SocialIcon
                url="https://youtube.com/crisvytv"
                style={{ height: 20, width: 20, marginRight: 10 }}
              />

              <SocialIcon
                url="https://tiktok.com/crisvytv"
                style={{ height: 20, width: 20, marginRight: 10 }}
              />
              <SocialIcon
                url="https://www.instagram.com/crisvytv/"
                style={{ height: 20, width: 20, marginRight: 10 }}
              />
            </button>

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <Link href="/" className="">
                <span className="text-white hover:text-yellow-500 cursor-pointer">
                  Home
                </span>
              </Link>
              <Link href="/" className="text-white">
                <span className="text-white hover:text-yellow-500 cursor-pointer">
                  {" "}
                  About
                </span>
              </Link>
              <Link
                href="/"
                className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                <span className="text-white hover:text-yellow-500 cursor-pointer">
                  Services
                </span>
              </Link>
              <Link
                href="/about"
                className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                <span className="text-white hover:text-yellow-500 cursor-pointer">
                  Blogs
                </span>
              </Link>
              <Link
                href="/contact"
                className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                <span className="text-white hover:text-yellow-500 cursor-pointer">
                  Contact
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
