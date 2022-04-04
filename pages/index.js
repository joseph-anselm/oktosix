import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

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
            <button>Watch Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
