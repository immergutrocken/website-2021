import { IPartner } from "../lib/partner";
import Bubble from "./shared/bubble";
import Link from "./shared/link";
import styles from "../styles/footer.module.scss";
import Partner from "./partner";
import NextImage from "next/image";

interface FooterProps {
  sponsorList: IPartner[];
  mediaPartnerList: IPartner[];
  additionalList: IPartner[];
}

const buildDateAndLocation = (times: number): JSX.Element => {
  const tempArray = [];
  for (let index = 0; index < times; index++) {
    tempArray.push(index);
  }
  return (
    <>
      {tempArray.map((index) => (
        <span key={index}>26.-28.08.2021 • Neustrelitz • </span>
      ))}
    </>
  );
};

const Footer = ({
  sponsorList,
  mediaPartnerList,
  additionalList,
}: FooterProps): JSX.Element => (
  <>
    <div className="flex flex-row mt-4 justify-center space-x-4">
      <Link href="https://open.spotify.com/user/immergut_festival">
        <Bubble>
          <NextImage src="/spotify-logo.svg" height="22" width="32" />
        </Bubble>
      </Link>
      <Link href="https://www.youtube.com/immergutfestival">
        <Bubble>
          <NextImage src="/youtube-logo.svg" height="32" width="28" />
        </Bubble>
      </Link>
      <Link href="https://www.facebook.com/immergutrocken">
        <Bubble>
          <NextImage src="/facebook-logo.svg" height="32" width="28" />
        </Bubble>
      </Link>
      <Link href="https://instagram.com/immergutrocken">
        <Bubble>
          <NextImage src="/instagram-logo.svg" height="32" width="28" />
        </Bubble>
      </Link>
      <Link href="https://twitter.com/immergutrocken">
        <Bubble>
          <NextImage src="/twitter-logo.svg" height="32" width="28" />
        </Bubble>
      </Link>
      <Link href="https://www.flickr.com/photos/immergutrocken">
        <Bubble>
          <NextImage src="/flickr-logo.svg" height="32" width="28" />
        </Bubble>
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 mt-4 p-3">
      <Partner title="Sponsor*innen" list={sponsorList} />
      <Partner title="Medienpartner*innen" list={mediaPartnerList} />
      <Partner title="Ausserdem" list={additionalList} />
    </div>
    <div className="w-full text-center p-3">
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      , structured content powered by{" "}
      <Link href="https://www.sanity.io">sanity.io</Link>, hosted by{" "}
      <Link href="https://www.vercel.com">vercel.com</Link>
    </div>
    <div className="sticky bottom-0 text-4xl p-2 whitespace-nowrap overflow-x-hidden bg-white">
      <div className={styles.ticker}>{buildDateAndLocation(10)}</div>
    </div>
  </>
);

export default Footer;
