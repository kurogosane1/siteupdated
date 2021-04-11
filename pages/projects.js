import React, { useEffect } from "react";
import styles from "../styles/Projects.module.css";
import axios from "axios";

const projects = (props) => {
  const data = [
    {
      heading: "Tiptuity",
      cardImage: "https://i.imgur.com/fanvadO.png",
      description:
        "Tiptuity your cashless way of paying tips. Using your phone to scan the employee bar code and paying tips. Valet Employers using the tool can use track and monitor how much tip each employee has received and the vendors or location they were working receiving the tip. They add or remove employees, clients",
      toolsUsed:
        "ReactJS, NodeJS, ExpressJS, MySQL, ContextAPI,API,Axios,PassportJS, Material UI, MongoDB",
      githubLink: "https://github.com/kurogosane1/tiptuity",
      websiteLink: "https://tiptuityv2.herokuapp.com/",
    },
    {
      heading: "Linux is Beautiful",
      cardImage: "https://i.imgur.com/fanvadO.png",
      description:
        "A E-commerce website that was inspired Apple a online way of purchasing customized laptops related to Linux. Users are able to customize the Laptop and Tablet",
      toolsUsed:
        "ReactJS,NodeJS,ExpressJS,MySQL,ContextAPI,API,Axios,PassportJS, Material UI, MongoDB",
      githubLink: "https://github.com/kurogosane1/Linux-is-beautifulv3.0",
      websiteLink: "https://calm-dawn-32096.herokuapp.com",
    },
    {
      heading: "Movie Database",
      cardImage: "https://i.imgur.com/9fkTdxDl.png",
      description:
        "A React based rendition of the moviedatabase that has an API connection.",
      githubLink: "https://github.com/kurogosane1/Movie-Database-App",
      toolsUsed: "ReactJS,React-Spring,API,JSON,IMDB API",
      websiteLink: "https://moviedb22222222.herokuapp.com/",
    },
    {
      heading: "Markdown Electron NoteTaker",
      cardImage:
        "https://camo.githubusercontent.com/763ef9b670dec1766f11d76af9dfb0b57037b129/68747470733a2f2f692e696d6775722e636f6d2f314e795679556d2e706e67",
      description:
        "A ReactJS mixed with ElectronJS combined to produce a Markdown Notetaking app. The purpose is simply to show that ReactJS is capable of working with Electron. Meant to be run as a Desktop Application only!",
      toolsUsed: "ReactJS,ElectronJS,API,NodeJS, ExpressJS",
      githubLink: "https://github.com/kurogosane1/ElectronNoteTaking",
      websiteLink: "",
    },
  ];

  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectsHeader}>
        <h2>Projects</h2>
      </div>
      <div className={styles.projectsContainer}>
        <div className={styles.card}>
          <div className={styles.information}>
            <h2>Sample Test</h2>
            <div className={styles.description}>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                tempora esse maxime omnis, ab, nisi soluta rem incidunt
                voluptatibus recusandae quidem unde officia? Commodi quaerat
                dicta laudantium odit, beatae sint.
              </span>
            </div>
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                minus voluptatum, nemo, reiciendis excepturi ratione quisquam
                enim inventore delectus veniam maiores quae, possimus quis
                facere assumenda cumque consectetur consequuntur. Sequi!
              </span>
            </div>
          </div>
          <div className={styles.images}>
            <img
              src="https://static.toiimg.com/photo/75503656.cms"
              alt="sample-example"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
