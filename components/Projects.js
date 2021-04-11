import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";
import WebIcon from "@material-ui/icons/Web";
import GitHubIcon from "@material-ui/icons/GitHub";

function Projects(props) {
  const data = props.data;

  //Getting the data from the server database
  // Get the data from the server
  // Map it out into the component
  // Have it rendered server side for faster response
  // Add some animations

  useEffect(() => {
    console.log(data);
  });

  return (
    <>
      
    </>
  );
}

export default Projects;

{
  /* <div className={styles.card}>
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

            <div className={styles.links}>
              <WebIcon />
              <GitHubIcon />
            </div>
          </div>
          <div className={styles.images}>
            <img
              src="https://static.toiimg.com/photo/75503656.cms"
              alt="sample-example"
            />
          </div>
        </div> */
}
