import Head from "next/head";
import {
  Container,
  SubContainer,
  Row,
  IntroSpan,
  IntroSpan2,
  IntroHeading,
  SubSubContainer,
} from "../styledComponents";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const listItem = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};
const listItem2 = {
  initial: {
    opacity: 0,
    x: -100,
    y: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

const headingList = {
  initial: {
    opacity: 0,
    y: 100,
    x: -150,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

export default function Home() {
  // TODO Add your business email address and add an email icon
  // TODO add a icon that would be floating here and there

  return (
    <div>
      <Head>
        <title>Syed Khurshid - Hello my name is </title>
        <meta name="description" content="Syed Khurshid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <AnimatePresence>
          <SubContainer>
            <Row>
              <IntroSpan
                key={"intro_some_heading"}
                style={{ color: "#AEAEAE" }}
                variants={variants}
                initial="initial"
                animate="animate">
                I'm Syed Khurshid
              </IntroSpan>
              <IntroSpan2
                style={{ marginLeft: "20%" }}
                key={"intro_heading_2"}
                variants={listItem}
                initial="initial"
                animate="animate">
                Available for Hire
              </IntroSpan2>
            </Row>
            <Row>
              <IntroHeading
                key={"intro_heading_1"}
                variants={headingList}
                initial="initial"
                animate="animate">
                I'm a Full Stack Developer, Accountant, Aspiring Artist,
                Aspiring Developer
              </IntroHeading>
            </Row>
            <Row>
              <SubSubContainer>
                <IntroSpan
                  key={"intro_heading_2"}
                  variants={listItem2}
                  initial="initial"
                  animate="animate">
                  I help turn ideas into a functional and delightful experience.
                  I'm focusing on Web Design & building functional Products,
                  Apps, and Websites
                </IntroSpan>
              </SubSubContainer>
            </Row>
            <Row>
              <SubSubContainer
                style={{
                  border: "2px solid black",
                  boxSizing: "border-box",
                  padding: "10px",
                }}>
                <IntroSpan
                  key={"Aspiring_work"}
                  variants={listItem}
                  initial="initial"
                  animate="animate">
                  I'm aspiring to be a developer
                </IntroSpan>
              </SubSubContainer>
            </Row>
            <Row>
              <SubSubContainer
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "min(460px, 740px)",
                }}>
                <Link passHref={true} href={process.env.NEXT_PUBLIC_LINKEDIN}>
                  <a target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </Link>
                <Link passHref={true} href={process.env.NEXT_PUBLIC_GITHUB}>
                  <a target="_blank">
                    <i className="bx bxl-github"></i>
                  </a>
                </Link>
              </SubSubContainer>
            </Row>
          </SubContainer>
        </AnimatePresence>
      </Container>
    </div>
  );
}
