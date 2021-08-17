import { useEffect } from "react";
import Head from "next/head";
import { motion, motionValue, useTransform } from "framer-motion";
import {
  Container,
  Row,
  SubAboutContainer,
  AboutSpan,
  AboutHeading,
  SkillsContainer,
  IntroSpan,
  SkillsSubHead,
  AboutTitle,
  AboutH,
} from "../styledComponents";
import {
  RightArt2,
  RightArt,
  RightArt3,
  LeftArt,
  ProjectsList,
  list1,
  list2,
  list3,
  list4,
} from "../components/Variants";

const about = () => {
  // TODO Need to add a container for the email address
  // TODO: Make the email container clickable and copies the email
  // TODO: Also make an alias email address on gmail

  const y = motionValue(0);
  const change = useTransform(y, [-800, -600], [1, 2]);
  console.log(y.get());

  useEffect(() => {
    console.log(y.get());
  });

  return (
    <Container>
      <Head>
        <meta name="About" content="Something ABout" />
        <title>A Little Bit About me</title>
      </Head>
      <SubAboutContainer top={150} right={50} bottom={0} left={50}>
        <Row>
          <span>About</span>
        </Row>
        <AboutHeading variants={LeftArt} initial="initial" animate="animate">
          Hello! I'm Syed
        </AboutHeading>
        <AboutH variants={RightArt} initial="initial" animate="animate">
          I'm Building Digital Experience & Interface
        </AboutH>
        <IntroSpan
          style={{ marginBottom: "90px" }}
          variants={RightArt2}
          initial="initial"
          animate="animate">
          I am aspiring to become a Full Stack Developer. I've started this
          journey to changing my career from a Accountant and entering the
          Developer world. I've always had a passion for Art. It was what made
          me thing far and wide. A place where I could dream something and that
          would happen. When I am developing websites, I see art in creating a
          page that is beautiful. My journey has just started and I surely have
          a long way to go before I am good but its the journey that matters and
          mine just started.
        </IntroSpan>
        <br />
        <AboutSpan variants={RightArt3} initial="initial" animate="animate">
          Want to reach me?
        </AboutSpan>
        <span></span>
      </SubAboutContainer>
      <SubAboutContainer
        top={150}
        right={50}
        bottom={0}
        left={50}
        onScroll={() => {
          console.log(scrollY.get());
        }}>
        <AboutHeading variants={LeftArt} initial="initial" animate="animate">
          Skills
        </AboutHeading>
        <AboutH variants={RightArt} initial="initial" animate="animate">
          & Tools{" "}
        </AboutH>

        <IntroSpan variants={RightArt2} initial="initial" animate="animate">
          These are my current skills that i've been able to master but I am
          even now still working on adding more skills that are not listed here.
        </IntroSpan>
        <br />
        <IntroSpan variants={RightArt2} initial="initial" animate="animate">
          I am consisting working to add more skills into my roster and will be
          updating as I completely feel that I've mastered them
        </IntroSpan>
        <br />
        <IntroSpan variants={RightArt2} initial="initial" animate="animate">
          Feel free to ask if not listed
        </IntroSpan>
        <Row
          style={{
            justifyContent: "space-evenly",
            marginTop: "20px",
            gap: "10px",
          }}>
          <SkillsContainer
            style={{ marginTop: "20px" }}
            variants={list1}
            initial="initial"
            animate="animate"
            style={{ y, change }}>
            <SkillsSubHead>
              {" "}
              <i className="bx bx-code-block" style={{ color: "black" }}></i>
              Front End
            </SkillsSubHead>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Next</li>
              <li>React-Native</li>
              <li>BootStrap</li>
              <li>Material UI</li>
            </ul>
          </SkillsContainer>
          <SkillsContainer variants={list2} initial="initial" animate="animate">
            <SkillsSubHead>
              <i className="bx bx-store-alt" style={{ color: "black" }}></i>Back
              End
            </SkillsSubHead>
            <ul>
              <li>NodeJS</li>
              <li>ExpressJS</li>
              <li>GraphQL</li>
              <li>Docker</li>
              <li></li>
            </ul>
          </SkillsContainer>
          <SkillsContainer variants={list3} initial="initial" animate="animate">
            <SkillsSubHead>
              <i className="bx bxs-data" style={{ color: "black" }}></i>Database
            </SkillsSubHead>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Sequalize</li>
              <li>Prisma</li>
            </ul>
          </SkillsContainer>
          <SkillsContainer variants={list4} initial="initial" animate="animate">
            <SkillsSubHead>
              <i className="bx bx-cog" style={{ color: "black" }}></i>Design &
              Tools
            </SkillsSubHead>
            <ul>
              <li>Heroku</li>
              <li>AWS</li>
              <li>Figma</li>
              <li>Affinity Designer</li>
            </ul>
          </SkillsContainer>
        </Row>
      </SubAboutContainer>
      <SubAboutContainer top={150} right={50} bottom={0} left={50}>
        <Row>Lets work together</Row>
        <AboutTitle>Interested ?</AboutTitle>
        <AboutTitle>Lets Get In Touch !</AboutTitle>
        <IntroSpan>
          I'm open to any working opportunities or remote positions. Feel free
          to reach out if you need a hand on your side / open source project. I
          would love to help
        </IntroSpan>
        <br />
        <br />
        <IntroSpan>
          I'm really active on{" "}
          <strong style={{ color: "white" }}>Linkedin</strong> and if you want
          to reach out then I can definetely respond you faster.
        </IntroSpan>
        <br />
        <br />
        <IntroSpan>
          I am definetely constantly working on adding and improving my skills
          so once new projects are made, they'll be visible on the projects
          section
        </IntroSpan>
        <div>
          <i className="bx bx-mail-send"></i>
          <AboutSpan>syedskhurshid@gmail.com</AboutSpan>
        </div>
      </SubAboutContainer>
      <SubAboutContainer
        top={150}
        right={50}
        bottom={0}
        left={50}></SubAboutContainer>
    </Container>
  );
};

export default about;
