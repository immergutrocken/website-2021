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
        <title>21. Immergut Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header list={props.list}></Header>
      <Image
        src="/images/ig-website-desktop-illu.jpg"
        width="1140"
        height="587"
        layout="responsive"
      />
      <div className="w-full text-center p-3">
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        , structured content powered by{" "}
        <a href="https://www.sanity.io" target="_blank" rel="noreferrer">
          sanity.io
        </a>
        , hosted bei{" "}
        <a href="https://www.vercel.com" target="_blank" rel="noreferrer">
          vercel.com
        </a>
      </div>
    </div>
  );
}
