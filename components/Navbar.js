import React from "react";
import { NavBarContainer, Navblock, FrontLinks } from "../styledComponents";
import Link from "next/link";

function Navbar() {
  const multipleLinks = [
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/projects",
      title: "Projects",
    },
    {
      path: "/art",
      title: "Hobbies",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ];
  return (
    <NavBarContainer>
      <Navblock>
        <Link href="/">
          <i className="bx bxs-home" />
        </Link>

        <FrontLinks>
          {multipleLinks.map((data) => {
            return (
              <li key={data.path}>
                <Link href={data.path}>
                  <a>{data.title}</a>
                </Link>
              </li>
            );
          })}
        </FrontLinks>
      </Navblock>
    </NavBarContainer>
  );
}

export default Navbar;
