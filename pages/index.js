import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Syed Khurshid</title>
        <meta name="description" content="Syed Khurshid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Hello my name is Syed Khurshid</h2>
        <span>I am Full Stack Developer, Artist, Analyst and an Accountant</span>
      </div>
    </div>
  );
}
