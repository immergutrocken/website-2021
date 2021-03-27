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
      {list?.map((partner, index) => (
        <span className="p-3" key={index}>
          <a href={partner.link} target="_blank" rel="noreferrer">
            <NextImage
              src={partner.logo.url}
              width={partner.logo.width}
              height={partner.logo.height}
              alt={partner.logo.alt}
            />
          </a>
        </span>
      ))}
    </div>
  </div>
);

export default Partner;
