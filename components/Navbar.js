import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Maintitle from "./Maintitle";
// const withImages = require("next-images");

export default function Navbar() {
  const [sel, setSel] = useState(0);
  const [open, setOpen] = useState(false);

  const hideNavbar = () => {
    setOpen(!open);
    console.log("This ran in the front side");
    console.log(open);
  };

  useEffect(() => {
    console.log(sel);
    console.log(open);
  }, []);
  return (
    <nav className={styles.navcontainer}>
      <Maintitle hide={hideNavbar} />
      <ul className={styles.navbar}>
        <li>
          <Link href="/" className={styles.navLinks} key="1">
            <a
              onClick={() => setSel(1)}
              className={sel === 1 ? styles.activeLinks : styles.navLinks}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about" key="2">
            <a
              onClick={() => setSel(2)}
              className={sel === 2 ? styles.activeLinks : styles.navLinks}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects" key="3">
            <a
              onClick={() => setSel(3)}
              className={sel === 3 ? styles.activeLinks : styles.navLinks}>
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/art" key="4">
            <a
              onClick={() => setSel(4)}
              className={sel === 4 ? styles.activeLinks : styles.navLinks}>
              Art
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact" key="5">
            <a
              onClick={() => setSel(5)}
              className={sel === 5 ? styles.activeLinks : styles.navLinks}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
