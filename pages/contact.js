import Head from "next/head";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import styles from "../styles/Contact.module.css";

const contact = () => {
  return (
    <div className={styles.CardContainer}>
      <Head>
        <title>Syed Khurshid - Contact Me - Feel free to contact me</title>
        <meta name="description" content="Feel free to contact me" />
      </Head>
      <div className="inner-Cards">
        <div className={styles.pitch}>
          <span>Feel free to contact me</span>
          <br />
          <span>I'd love to speak with you</span>
          <br />
          <span>You can click on any of the options below</span>
        </div>
        <div className={styles.cardbody}>
          <EmailIcon
            fontSize="large"
            className={styles.linked}
            onClick={() =>
              window.open(
                "mailto:syedskhurshid@gmail.com?Subject=Reaching out to you",
                "_blank"
              )
            }
          />
          <LinkedInIcon
            className={styles.linked}
            fontSize="large"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/syed-khurshid/",
                "_blank"
              )
            }
          />
          <GitHubIcon
            className={styles.linked}
            fontSize="large"
            onClick={() =>
              window.open("https://github.com/kurogosane1", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default contact;
