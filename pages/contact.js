import Head from "next/head";

const contact = () => {
  return (
    <div className="Card-Contact">
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Feel free to contact me" />
      </Head>
      <div className="inner-Cards">
        <div className="Pitch">
          <span>Feel free to contact me</span>
          <br />
          <span>I'd love to speak with you</span>
          <br />
          {/* <span>Thank You</span> */}
        </div>
        <div className="Card-body">
          <ul className=" Social-network">
            <a
              className="email fas fa-envelope-open fa-3x"
              href="mailto:magnite@hotmail.com?Subject=Hellotoyou"
              target="_top"></a>
            <a
              className="linkedin fab fa-linkedin-in fa-3x"
              href="https://www.linkedin.com/in/syed-khurshid/"
              onclick="window.open(https://www.linkedin.com/in/syed-khurshid/)"></a>
            <a
              className="github fab fa-github fa-3x"
              href="https://github.com/kurogosane1"></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default contact;
