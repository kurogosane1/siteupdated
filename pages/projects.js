import React from "react";
import {
  AboutHeading,
  Container,
  Row,
  SubAboutContainer,
  ProjectContainer,
  ProjectDescription,
  IntroSpan,
  AboutH,
} from "../styledComponents";
import Link from "next/link";
import { Lists, ProjectsList } from "../components/Variants";

import Head from "next/head";
import { createClient } from "contentful";

const projects = (props) => {
  const { items } = props.data;

  return (
    <Container>
      <Head>
        <meta name="description" content="Personal projects" />
        <title>Syed Khurshid - Projects and Case Studies</title>
      </Head>
      <SubAboutContainer top={10} right={50} bottom={0} left={50}>
        <Row>
          <AboutH
            style={{ letterSpacing: "1px" }}
            variants={Lists}
            initial="initial"
            animate="animate">
            Case Studies
          </AboutH>
          <AboutHeading
            style={{ letterSpacing: "1px" }}
            variants={Lists}
            initial="initial"
            animate="animate">
            & Personal Projects
          </AboutHeading>
        </Row>
        <Row>
          <IntroSpan variants={Lists} initial="initial" animate="animate">
            Case studies of personal projects. Design is constantly being
            improved and will continue to do so in the future
          </IntroSpan>
          <br />
          <IntroSpan variants={Lists} initial="initial" animate="animate">
            Future projects will continue to be added here
          </IntroSpan>
        </Row>
      </SubAboutContainer>
      <SubAboutContainer style={{ width: "100%" }}>
        <Row
          style={{
            flexWrap: "wrap",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "10px",
          }}>
          {items &&
            items.map((data, index) => {
              const { websiteLink } = data.fields;
              return (
                <ProjectContainer
                  key={data.sys.id}
                  variants={ProjectsList}
                  initial="initial"
                  animate="animate"
                  whileHover={{ y: -50, scale: 1.1 }}
                  custom={index}>
                  <img
                    src={data.fields.cardImage[0].fields.file.url}
                    alt={data.fields.heading}
                    style={{ objectFit: "contain" }}
                  />

                  <ProjectDescription>
                    <h4 style={{ color: "white" }}>0{index + 1} </h4>
                    <h4> ---- </h4>
                    <h4>{data.fields.heading}</h4>
                    <p>{data.fields.description.content[0].content[0].value}</p>
                    <Row
                      style={{
                        width: "100%",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        padding: "10px",
                        marginTop: "10px",
                      }}>
                      {data.fields.githubLink && (
                        <Link href={data.fields.githubLink} passHref={true}>
                          <a target="_blank">
                            <i className="bx bxl-github"></i>
                          </a>
                        </Link>
                      )}
                      {websiteLink &&
                        websiteLink.map((url, index) => {
                          return (
                            <Link href={url} passHref={true}>
                              <a target="_blank">
                                <i className="bx bx-link-external" />
                              </a>
                            </Link>
                          );
                        })}
                    </Row>
                  </ProjectDescription>
                </ProjectContainer>
              );
            })}
        </Row>
      </SubAboutContainer>
    </Container>
  );
};

export default projects;

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "projects" });
  return {
    props: {
      data: res,
    },
  };
}
