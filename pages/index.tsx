import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import { getNewsList, NewsLink } from "../lib/news";

interface HomeProps {
  list: NewsLink[];
}

export const getStaticProps = async (): Promise<{
  props: HomeProps;
}> => {
  return {
    props: {
      list: await getNewsList(),
    },
  };
};

export default function Home(props: HomeProps): JSX.Element {
  return (
    <div className="">
      <Head>
        <title>22. Immergut Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header list={props.list}></Header>
      <Image
        src="/images/ig-website-desktop-illu.jpg"
        width="1140"
        height="587"
        layout="responsive"
      />
    </div>
  );
}
