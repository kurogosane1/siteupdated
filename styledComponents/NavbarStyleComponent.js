import styled from "styled-components";
import { motion } from "framer-motion";

export const NavBarContainer = styled.div`
  height: 70px;
  width: 100%;
  z-index: 100;
  color: #f5f5f5;
`;

export const Navblock = styled(motion.div)`
  box-sizing: border-box;
  padding: 1rem 2rem;
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1700px;
`;
export const FrontLogoImage = styled(motion.img)`
  height: 30px;
  width: 30px;
`;
export const FrontLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-right: 1rem;
  li > a {
    text-decoration: none;
    color: #f5f5f7;
    padding: 10px;
    font-weight: 500;
    border-radius: 17px;
    transition: all ease-in-out 0.25s;
  }

  li > a :hover {
    background-color: #f5f5f7;
    border-radius: 12px;
    color: #151515;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

export const HamMenu = styled(motion.div)`
  cursor: pointer;
  @media (min-width: 960px) {
    display: none;
  }
  :hover {
    background-color: #f5f5f7;
    border-radius: 12px;
    color: #151515;
  }
`;

export const SideNavbar = styled(motion.div)`
  @media (min-width: 960px) {
    display: none;
  }
  overflow: hidden;
  box-sizing: border-box;
  padding: 0px auto 150px auto;
  margin: 0px auto;
  position: fixed;
  left: 0;
  top: 70px;
  height: calc(100vh - 70px);
  width: 100vw;
  background-color: #151515;
  z-index: 9999;
`;

export const SideLinks = styled(motion.div)`
  @media (min-width: 960px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  height: 90%;
  font-size: 5vw;
  list-style: none;
  width: 100%;
  li > a {
    width: 100%;
    cursor: pointer;
    text-decoration: none;
    color: #f5f5f7;
    padding: 10px 20px;
    font-weight: 500;
    border-radius: 17px;
    transition: all ease-in-out 0.25s;
  }

  li > a :hover {
    background-color: #f5f5f7;
    border-radius: 12px;
    color: #151515;
  }
`;
