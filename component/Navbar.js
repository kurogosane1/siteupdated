import React from "react";
import Link from "next/Link";

export const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
      </li>
      <li>
        <Link href="/art">
          <a>Art</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>
  );
};
