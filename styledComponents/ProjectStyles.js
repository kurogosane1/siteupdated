import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 600px;
  /* height: 100%; */
  width: 500px;
  background: transparent;
  /* margin: 0 2px; */
  /* border-left: solid 1px;
  border-right: solid 1px;
  border-bottom: solid 1px; */
  transition: all ease 0.5s;
  margin-bottom: 10px;
  :hover {
    cursor: pointer;
    background-color: #373737db;
    z-index: 100;
    transform: translateY(-20px);
    /* margin-top: 50px; */
  }
  span:hover {
  }

  @media (max-width: 960px) {
    width: 400px;
  }
`;

export const ProjectDescription = styled(motion.div)`
  box-sizing: border-box;
  padding: 25px 10px 50px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  flex-wrap: wrap;
  span {
    text-align: center;
    margin: auto;
  }

  @media (max-width: 960px) {
    width: 400px;
  }
`;
