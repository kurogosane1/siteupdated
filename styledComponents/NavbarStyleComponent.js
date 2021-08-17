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
