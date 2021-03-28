import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client from "./shared/sanityClient";
import { urlFor } from "./shared/sanityImageUrl";
import PartnerCategory from "./enums/partnerCategory.enum";

export interface IPartner {
  link: string;
  logo: {
    alt: string;
    asset: SanityImageSource;
    credits: string;
    height: number;
    width: number;
    url: string;
  };
}

export const getPartnerList = async (
  category: PartnerCategory
): Promise<IPartner[]> => {
  const query =
    "*[_type == 'partner' && category == $category] {'link': link.url, logo}";
  const params = {
    category: category,
  };
  const result = await client.fetch(query, params);
  return result.map((p: IPartner) => {
    return {
      ...p,
      logo: {
        ...p.logo,
        url: urlFor(p.logo.asset)
          .width(p.logo.width)
          .height(p.logo.height)
          .url(),
      },
    } as IPartner;
  });
};
