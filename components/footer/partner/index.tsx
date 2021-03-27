import { IPartner } from "../../../lib/partner";
import NextImage from "next/image";

export interface PartnerProps {
  title: string;
  className?: string;
  list: IPartner[];
}

const Partner = ({ title, className, list }: PartnerProps): JSX.Element => (
  <div className={className}>
    <div className="text-center">
      <span className="border border-black rounded-full px-2 pt-1 uppercase text-xl">
        {title}
      </span>
    </div>
    <div className="mt-4">
      {list?.map((partner) => (
        <a
          href={partner.link}
          className="m-5"
          target="_blank"
          rel="noreferrer"
          key={partner.logo.asset._ref}
        >
          <NextImage
            src={partner.logo.url}
            width={partner.logo.width}
            height={partner.logo.height}
            alt={partner.logo.alt}
          />
        </a>
      ))}
    </div>
  </div>
);

export default Partner;
