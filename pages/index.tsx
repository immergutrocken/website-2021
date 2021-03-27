import NextHead from "next/head";
import NextImage from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import { getNewsList, NewsLink } from "../lib/news";
import { getPartnerList, IPartner } from "../lib/partner";
import styles from "../styles/Home.module.scss";
import PartnerCategory from "../lib/partner/category.enum";

interface HomeProps {
  newsLinkList: NewsLink[];
  sponsorList: IPartner[];
  mediaPartnerList: IPartner[];
  additionalList: IPartner[];
}

export const getStaticProps = async (): Promise<{
  props: HomeProps;
}> => {
  return {
    props: {
      newsLinkList: await getNewsList(),
      sponsorList: await getPartnerList(PartnerCategory.SPONSOR),
      mediaPartnerList: await getPartnerList(PartnerCategory.MEDIA_PARTNER),
      additionalList: await getPartnerList(PartnerCategory.ADDITIONAL),
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
      <Header list={props.newsLinkList}></Header>
      <NextImage
        src="/images/ig-website-desktop-illu2.jpg"
        width="1140"
        height="587"
        layout="responsive"
      />
      <div className={`absolute ${styles.logo}`}>
        <NextImage src="/images/ig-motto-logo1.svg" height={100} width={100} />
      </div>
      <Footer
        sponsorList={props.sponsorList}
        mediaPartnerList={props.mediaPartnerList}
        additionalList={props.additionalList}
      />
    </div>
  );
}
