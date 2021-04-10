import React from "react";
import Link from "next/Link";
import styles from "../styles/Navbar.module.css";
import Maintitle from "./Maintitle";

export default function Navbar() {
  return (
    <nav className={styles.navcontainer}>
      <Maintitle />
      <ul className={styles.navbar}>
        <li>
          <Link href="/" className={styles.navLinks} key="1">
            <a className={styles.navLinks}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" key="2">
            <a className={styles.navLinks}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/projects" key="3">
            <a className={styles.navLinks}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/art" key="4">
            <a className={styles.navLinks}>Art</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" key="5">
            <a className={styles.navLinks}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
