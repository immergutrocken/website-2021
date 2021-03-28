import { IPartner } from "../lib/partner";
import NextImage from "next/image";
import Label from "./shared/label";

export interface PartnerProps {
  label: string;
  className?: string;
  list: IPartner[];
}

const Partner = ({ label, className, list }: PartnerProps): JSX.Element => (
  <div className={className}>
    <Label>{label}</Label>
    <div className="mt-4 text-center">
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
