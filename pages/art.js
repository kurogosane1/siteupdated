import React from "react";
import { createClient } from "contentful";
import {
  AboutHeading,
  Container,
  AboutH,
  ArtContainer,
  ArtSubContainer,
} from "../styledComponents";
import Image from "next/image";
import images from "../next.config";
import Link from "next/link";
import { ProjectsList, LeftArt, RightArt } from "../components/Variants";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";

function art(props) {
  const { items } = props.data;

  return (
    <Container>
      <AnimatePresence>
        <ArtSubContainer>
          <AboutH
            style={{ marginRight: "20px" }}
            variants={LeftArt}
            initial="initial"
            animate="animate">
            Personal
          </AboutH>
          <AboutHeading variants={RightArt} initial="initial" animate="animate">
            Hobbies
          </AboutHeading>
        </ArtSubContainer>
        <ArtContainer>
          <ArtSubContainer>
            {items &&
              items.map((data, index) => {
                return (
                  <motion.div
                    variants={ProjectsList}
                    initial="initial"
                    animate="animate"
                    custom={index}
                    key={data.fields.heading + index + index}
                    style={{ cursor: "pointer" }}
                    whileHover={{ y: -50, scale: 1.1 }}>
                    <Link passHref={true} href={data.fields.links}>
                      <a target="_blank">
                        <Image
                          domain={images.domain}
                          src={data.fields.links}
                          alt={data.fields.heading}
                          width={500}
                          height={450}
                          style={{ margin: "10px" }}
                        />
                      </a>
                    </Link>
                  </motion.div>
                );
              })}
          </ArtSubContainer>
        </ArtContainer>
      </AnimatePresence>
    </Container>
  );
}

export default art;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "art" });
  return {
    props: {
      data: res,
    },
  };
}
