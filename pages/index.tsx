import NextHead from "next/head";
import NextImage from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import { getNewsLinkList, INewsLink } from "../lib/news";
import { getPartnerList, IPartner } from "../lib/partner";
import styles from "../styles/Home.module.scss";
import PartnerCategory from "../lib/enums/partnerCategory.enum";
import { getMenu, IMenuItem } from "../lib/menu";
import { getArtistLinkList, IArtistLink } from "../lib/artist";
import NextLink from "next/link";
import Button from "../components/shared/button";
import { useState } from "react";
import { ArtistCategory } from "../lib/enums/artistCategory.enum";

interface HomeProps {
  newsLinkList: INewsLink[];
  sponsorList: IPartner[];
  mediaPartnerList: IPartner[];
  additionalList: IPartner[];
  menuItems: IMenuItem[];
  artistLinkList: IArtistLink[];
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
      artistLinkList: await getArtistLinkList(),
    },
  };
};

export default function Home(props: HomeProps): JSX.Element {
  const [filterCategory, setFilterCategory] = useState<ArtistCategory>(null);

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
      <div className="mt-4 sm:mt-6 text-center">
        <Button
          className="mx-2"
          onClick={() =>
            setFilterCategory(
              filterCategory === ArtistCategory.MUSIC
                ? null
                : ArtistCategory.MUSIC
            )
          }
          active={filterCategory === ArtistCategory.MUSIC}
        >
          Musik
        </Button>
        <Button
          className="mx-2"
          onClick={() =>
            setFilterCategory(
              filterCategory === ArtistCategory.READING
                ? null
                : ArtistCategory.READING
            )
          }
          active={filterCategory === ArtistCategory.READING}
        >
          Lesung
        </Button>
      </div>
      <div className="mt-4 sm:mt-6 text-4xl sm:text-6xl text-center flex flex-row flex-wrap justify-center">
        {props.artistLinkList
          .filter((link) =>
            filterCategory === null ? true : link.category === filterCategory
          )
          .map((link, index, array) => (
            <span key={index}>
              <NextLink href={`/artist/${link.slug}`}>
                <a className="sm:mx-5">{link.title}</a>
              </NextLink>
              {index === array.length - 1 ? "" : "•"}
            </span>
          ))}
      </div>
      <Footer
        sponsorList={props.sponsorList}
        mediaPartnerList={props.mediaPartnerList}
        additionalList={props.additionalList}
      />
    </div>
  );
}
