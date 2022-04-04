import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function index() {
  return (
    <div className="wrapper">
      <div className="header  absolute top-0  left-0 right-0 z-0  h-full w-full bg-gradient-to-tl from-purple-900 to-green-700">
        <img
          src="img/okto1.jpg"
          className=" absolute h-full w-full object-cover mix-blend-overlay"
        />

        <div className=" relative top-60  text-white">
          <div className="ml-5 ">
            <h1 className=" mb-5 text-7xl">Oktosix Motions Pictures</h1>
            <p>Unlimited Entertainment, Movies & More!</p>
            <button className=" mt-5 flex rounded-full bg-yellow-600 py-2 px-4 font-bold text-white hover:bg-red-700">
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Watch Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
