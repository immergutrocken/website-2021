import NextHead from "next/head";
import NextImage from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import { getNewsList, NewsLink } from "../lib/news";
import styles from "../styles/Home.module.scss";

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
      <NextHead>
        <title>21. Immergut Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Header list={props.list}></Header>
      <NextImage
        src="/images/ig-website-desktop-illu2.jpg"
        width="1140"
        height="587"
        layout="responsive"
      />
      <div className={`absolute ${styles.logo}`}>
        <NextImage src="/images/ig-motto-logo1.svg" height={100} width={100} />
      </div>
      <Footer />
    </div>
  );
}
