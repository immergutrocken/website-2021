import { IPartner } from "../lib/partner";
import Bubble from "./shared/bubble";
import Link from "./shared/link";
import styles from "../styles/footer.module.scss";
import Partner from "./partner";
import NextImage from "next/image";
import socialMedia from "../lib/models/socialMedia";

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
    <div className="flex flex-row mt-4 justify-center flex-wrap">
      {socialMedia.map((element, index) => (
        <Link
          href={element.url}
          key={index}
          className="mx-2 mb-3 sm:mx-3 sm:mb-0"
        >
          <Bubble>
            <NextImage
              src={element.imageUrl}
              layout="fill"
              objectFit="contain"
            />
          </Bubble>
        </Link>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 mt-2 sm:mt-4 p-3">
      <Partner label="Sponsor*innen" list={sponsorList} />
      <Partner label="Medienpartner*innen" list={mediaPartnerList} />
      <Partner label="Ausserdem" list={additionalList} />
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
    <div className="sticky bottom-0 text-lg sm:text-4xl px-2 sm:px-0 sm:py-2 whitespace-nowrap overflow-x-hidden bg-white">
      <div className={styles.ticker}>{buildDateAndLocation(10)}</div>
    </div>
  </>
);

export default Footer;
