import Head from "next/head";
import Type from "../components/Type";

const data = ["1", "A", "m", " ", "4", "5", "/", "*"];
import HomePage from "../Containers/Home/HomePage";

export default function Home({props}) {
  return (
    <>
      <Head>
        <title>Typiano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage {...props} />
    </>
  );
}
