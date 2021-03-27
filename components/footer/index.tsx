import { IPartner } from "../../lib/partner";
import Link from "../shared/link";
import styles from "./index.module.scss";
import Partner from "./partner";

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
    <div className="grid grid-cols-1 md:grid-cols-3 mt-24 p-3">
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
