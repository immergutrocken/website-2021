import NextHead from "next/head";
import NextImage from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import { getNewsLinkList, INewsLink } from "../lib/news";
import { getPartnerList, IPartner } from "../lib/partner";
import styles from "../styles/Home.module.scss";
import PartnerCategory from "../lib/enums/partnerCategory.enum";
import { getMenu, IMenuItem } from "../lib/menu";

interface HomeProps {
  newsLinkList: INewsLink[];
  sponsorList: IPartner[];
  mediaPartnerList: IPartner[];
  additionalList: IPartner[];
  menuItems: IMenuItem[];
}

export const getStaticProps = async (): Promise<{
  props: HomeProps;
}> => {
  return {
    props: {
      newsLinkList: await getNewsLinkList(),
      sponsorList: await getPartnerList(PartnerCategory.SPONSOR),
      mediaPartnerList: await getPartnerList(PartnerCategory.MEDIA_PARTNER),
      additionalList: await getPartnerList(PartnerCategory.ADDITIONAL),
      menuItems: await getMenu(),
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
      <Header
        newsLinkList={props.newsLinkList}
        menuItemList={props.menuItems}
      ></Header>
      <div className="block sm:hidden">
        <NextImage
          src="/images/ig-website-mobile-illu.jpg"
          width="320"
          height="455"
          layout="responsive"
        />
      </div>
      <div className="hidden sm:block">
        <NextImage
          src="/images/ig-website-desktop-illu2.jpg"
          width="1440"
          height="587"
          layout="responsive"
        />
      </div>
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
