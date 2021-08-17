import styled from "styled-components";
import { motion } from "framer-motion";

export const ArtContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 40px 0 40px;
  @media (max-width: 960px) {
    padding: 10px;
  }
  color: #f5f5f5;
  @media (min-width: 1500px) {
    max-width: 1800px;
  }
`;

export const ArtSubContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  color: #f5f5f5;
`;
