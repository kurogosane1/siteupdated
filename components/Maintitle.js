import React, { useState } from "react";
import Image from "next/image";
// import Icons from "../assets/Hamburger.svg";
import styles from "../styles/Navbar.module.css";

function Maintitle({ hide, open }) {
  // const [hideNav, setHideNav] = useState(true);

  return (
    <div className={styles.navsection}>
      <h1 className={styles.maintitle}>Syed Khurshid</h1>
      {/* <img src="../public/Hamburgers.png" alt="" height={20} width={20} /> */}
      {/* <img
        src="/static/Hamburger.svg"
        width={30}
        height={30}
        className={styles.hamburger}
        onClick={() => hideNavbar()}
      /> */}
      <div
        className={open ? styles.burger_menu : styles.burger_menu_open}
        onClick={() => hide(!open)}></div>
    </div>
  );
}

export default Maintitle;
