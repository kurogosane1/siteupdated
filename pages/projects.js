import React from "react";
import styles from "../styles/Projects.module.css";
import WebIcon from "@material-ui/icons/Web";
import GitHubIcon from "@material-ui/icons/GitHub";
import Head from "next/head";
import Image from "next/image";
import { images } from "../next.config";
// import { images } from "../next.config";

const projects = (props) => {
  const data = [
    {
      heading: "Tiptuity",
      cardImage: "https://i.imgur.com/fanvadO.png",
      description:
        "Tiptuity your cashless way of paying tips. Using your phone to scan the employee bar code and paying tips. Valet Employers using the tool can use track and monitor how much tip each employee has received and the vendors or location they were working receiving the tip. They add or remove employees, clients",
      toolsUsed:
        "ReactJS, NodeJS, ExpressJS, MySQL, ContextAPI,API,Axios,PassportJS, Material UI, MongoDB, Stripe",
      githubLink: "https://github.com/kurogosane1/tiptuity",
      websiteLink: "https://tiptuityv2.herokuapp.com/",
    },
    {
      heading: "Linux is Beautiful",
      cardImage: "https://i.imgur.com/zB8PGh7.png",
      description:
        "A E-commerce website that was inspired Apple a online way of purchasing customized laptops related to Linux. Users are able to customize the Laptop and Tablet",
      toolsUsed:
        "ReactJS, NodeJS, ExpressJS, MySQL, ContextAPI, API, Axios, PassportJS, Material UI, MongoDB, Stripe",
      githubLink: "https://github.com/kurogosane1/Linux-is-beautifulv3.0",
      websiteLink: "https://calm-dawn-32096.herokuapp.com",
    },
    {
      heading: "Movie Database",
      cardImage: "https://i.imgur.com/9fkTdxDl.png",
      description:
        "A React based rendition of the moviedatabase that has an API connection. It shows all the latest movies and information in details",
      githubLink: "https://github.com/kurogosane1/Movie-Database-App",
      toolsUsed: "ReactJS, React-Spring, API, JSON, IMDB API",
      websiteLink: "https://moviedb22222222.herokuapp.com/",
    },
    {
      heading: "Markdown Electron NoteTaker",
      cardImage:
        "https://camo.githubusercontent.com/763ef9b670dec1766f11d76af9dfb0b57037b129/68747470733a2f2f692e696d6775722e636f6d2f314e795679556d2e706e67",
      description:
        "A ReactJS mixed with ElectronJS combined to produce a Markdown Notetaking app. The purpose is simply to show that ReactJS is capable of working with Electron. Meant to be run as a Desktop Application only!",
      toolsUsed: "ReactJS, ElectronJS, API, NodeJS,  ExpressJS",
      githubLink: "https://github.com/kurogosane1/ElectronNoteTaking",
      websiteLink: "",
    },
  ];

  return (
    <div className={styles.projectContainer}>
      <Head>
        <meta name="description" content="Personal projects" />
        <title>
          Syed Khurshid - Projects - Projects that have been done by me
        </title>
      </Head>
      <div className={styles.projectsHeader}>
        <h2>Projects</h2>
      </div>
      <div className={styles.projectsContainer}>
        {data.map((info, index) => {
          const {
            heading,
            cardImage,
            description,
            toolsUsed,
            githubLink,
            websiteLink,
          } = info;
          return (
            <div className={styles.card} key={index}>
              <div className={styles.images}>
                <img
                  // domain={images.domains}
                  src={cardImage}
                  alt={heading}
                  height={320}
                  width={450}
                />
              </div>
              <div className={styles.information}>
                <h2>{heading}</h2>
                <div className={styles.description}>
                  <span>{description}</span>
                </div>
                <div className={styles.tools}>
                  <span>{toolsUsed}</span>
                </div>
              </div>
              <div className={styles.links}>
                <WebIcon
                  onClick={() => window.open(websiteLink, "_blank")}
                  fontSize="large"
                  className={styles.webLinks}
                />
                <GitHubIcon
                  onClick={() => window.open(githubLink, "_blank")}
                  fontSize="large"
                  className={styles.webLinks}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default projects;
