import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";


export default function Layout({ children }) {
  return (
    <div className={styles.mainContainer}>
    
      <Navbar />
      {children}
    </div>
  );
}
