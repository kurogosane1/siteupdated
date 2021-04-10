import Head from "next/head";
import styles from "../styles/About.module.css";


const about = () => {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About</title>
        <meta name="About" content="A little fun fact about me." />
      </Head>
      <h1 className="">About Me</h1>
      <div className="">
        <p>
          A little fun fact about me. During the day I am a working Accountant
          for an Oil and Gas Company. During the evening I am a coder, artist
          and currently at the same time working towards a fit and healthy life.
          I really like to enjoy my life to the fullest, and love to learn new
          things.
        </p>
        <p>
          I've always had a deep passion for Art. It was what made me think far
          and wide. A place where I could dream something and that would happen.
          I had been drawing since I could remember, and it was my way of being
          free. I used charcoals, pencils, and now inkwashes to express my art.
          Numbers surprisingly didn't mean anything to me. Infact, I remember I
          used to hate numbers a lot and was terrible in maths. I came accross
          accounting and learnt that even numbers have stories
        </p>
        <p>
          When I started working as a Accountant, I learnt that some of the
          tools we used to ease our work was made by accountants who knew how to
          code. That got me interested in coding. I sprung into action to find
          some coding places to learn and came across UT Austin Coding Bootcamp.
          This was the best decision I made as it is where I discovered that I
          could combine all three Art, Numbers and Code together to create
          something. I never was able to find that before.
        </p>
        <p>
          Today I'm a Certified Full Stack Developer, Accountant and Artist. I
          believe that soon one day I shall have the opportunity to combine all
          of them together. Till them, I shall gladly participate in hackathons,
          Art challenges, and marathons.
        </p>
      </div>
      <br />
      <div className="Resume-section">
        <button className="Resume" type="button">
          <a
            className="resume-link"
            href="https://docs.google.com/document/d/1EpGDi3vhXRIigz3_bMSFTi1jfqDYGawJiYxAocgQ8Mw/edit?usp=sharing">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default about;
