import styled from "styled-components";
import { motion } from "framer-motion";

export const SubAboutContainer = styled(motion.div)`
  box-sizing: border-box;
  padding: 50px;
  max-width: 1300px;
  margin-top: ${(props) => props.top}px;
  margin-right: ${(props) => props.right}px;
  margin-bottom: ${(props) => props.bottom}px;
  margin-left: ${(props) => props.left}px;
  /* margin: 150px 50px 0px 50px; */
  color: #f5f5f5;
  width: 100%;
  @media (max-width: 760px) {
    padding: 10px;
  }
`;

export const SkillsContainer = styled(motion.div)`
  position: relative;
  box-sizing: border-box;
  height: 400px;
  width: 250px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 15px;
  color: #151515;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  ul {
    list-style: none;
    font-size: 18px;
  }
  span {
    font-size: 18px;
  }

  @media (max-width: 760px) {
    width: 100%;
    margin: 10px 20px;
  }
`;

export const SkillsSubHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 5px;
  font-size: 2vw;
  margin-bottom: 5px;
  @media (max-width: 760px) {
    font-size: 6vw;
  }

  @media (min-width: 1440px) {
    font-size: 1.2vw;
  }
`;

export const AboutHeading = styled(motion.h1)`
  font-size: 7.5vw;
  font-weight: bold;
  letter-spacing: 10px;
  color: #222222;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;

  @media (min-width: 1500px) {
    font-size: 4vw;
  }
`;

export const AboutH = styled(motion.h1)`
  font-size: 6vw;
  @media (min-width: 1500px) {
    font-size: 4vw;
  }
`;

export const AboutTitle = styled(motion.div)`
  font-size: 6vw;
  font-weight: bold;
  letter-spacing: 5px;

  padding: 0;
  margin: 0;
  /* line-height: 15px; */
  color: #f5f5f5;
  @media (min-width: 1500px) {
    font-size: 4.5vw;
  }
`;

export const AboutSpan = styled(motion.span)`
  font-size: 2vw;
  color: #f5f5f5;
  font-weight: 100;
  @media (max-width: 960px) {
    font-size: 16px;
  }

  @media (min-width: 1500px) {
    font-size: 1.2vw;
  }
`;
