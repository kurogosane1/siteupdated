import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  NavBarContainer,
  Navblock,
  FrontLinks,
  SideNavbar,
  SideLinks,
  HamMenu,
} from "../styledComponents";
import Link from "next/link";
import { SideList } from "./Variants";

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

  // This is where the state of the sidenavbar will be
  const [open, setOpen] = useState(false);
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
        {!open && (
          <HamMenu onClick={() => setOpen(true)}>
            <i className="bx bx-menu-alt-right"></i>
          </HamMenu>
        )}
        {open && (
          <HamMenu onClick={() => setOpen(false)}>
            <i className="bx bx-x"></i>
          </HamMenu>
        )}
      </Navblock>

      {open && (
        <AnimatePresence
          exitBeforeEnter={true}
          onExitComplete={() => {
            setOpen(false);
          }}>
          <SideNavbar
            variants={SideList}
            initial="initial"
            animate="animate"
            exit="exit">
            <SideLinks>
              {multipleLinks.map((data) => {
                return (
                  <li key={data.path} onClick={() => setOpen(false)}>
                    <Link href={data.path}>
                      <a>{data.title}</a>
                    </Link>
                  </li>
                );
              })}
            </SideLinks>
          </SideNavbar>
        </AnimatePresence>
      )}
    </NavBarContainer>
  );
}

export default Navbar;
