import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 70px);
  height: 100%;

  overflow: hidden;
  /* background-color: #222222; */
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    padding: 10px 20px;
  }
`;

export const SubContainer = styled(motion.div)`
  /* max-width: 50vw; */
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 40px 0 170px;
  margin: 0 5vw;

  @media (max-width: 960px) {
    padding: 10px 20px;
    margin: 0 20px;
  }
  @media (min-width: 1500px) {
    max-width: 1800px;
  }
`;
export const SubSubContainer = styled.div`
  margin-left: 45%;
  margin-right: 40px;
  padding: 10px 0;
  width: min(460px, 740px);
  @media (max-width: 760px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;
export const Row = styled(motion.div)`
  display: flex;
  padding: 10px 0;
  flex-wrap: wrap;
  align-items: center;
`;
export const IntroSpan = styled(motion.span)`
  font-size: 16px;
  font-weight: 500;
  color: #c4c4c4;
  letter-spacing: 2px;
`;

export const IntroSpan2 = styled(motion.span)`
  margin-left: 40px;
  font-size: 16px;
  font-weight: 500;
  color: #c4c4c4;
  letter-spacing: 2px;
  @media (max-width: 960px) {
    margin-left: 0;
  }
`;
export const IntroHeading = styled(motion.h1)`
  font-size: 5.2vw;
  line-height: 1.5;
  color: #f5f5f5;
  letter-spacing: 2px;

  @media (max-width: 960px) {
    font-size: 9.5vw;
  }

  @media (max-width: 960px) {
    font-size: 9.5vw;
  }

  @media (min-width: 1500px) {
    font-size: 4.5vw;
  }
`;
