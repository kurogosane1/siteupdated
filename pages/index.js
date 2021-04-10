import { useEffect } from "react";
import Typed from "typed.js";
import Head from "next/head";
import styles from "../styles/Home.module.css";

let typed;
let options;

export default function Home() {
  useEffect(() => {
    options = {
      strings: ["Full Stack Developer", "Accountant", "Artist", "Analyst"],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      smartBackspace: true,
    };

    typed = new Typed(".element", options);
  }, []);
  return (
    <div className="">
      <Head>
        <title>Syed Khurshid</title>
        <meta name="description" content="Syed Khurshid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.frontContainer}>
        <h1>Hello my name is Syed Khurshid</h1>
        <span>I am a </span>
        <span className="element" id={typed}></span>
      </div>
    </div>
  );
}
