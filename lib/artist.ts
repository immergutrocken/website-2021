import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ArtistCategory } from "./enums/artistCategory.enum";
import client from "./shared/sanityClient";
import { urlFor } from "./shared/sanityImageUrl";

export interface IArtistLink {
  title: string;
  slug: string;
  category: ArtistCategory;
}

export interface IArtist {
  title: string;
  banner: {
    alt: string;
    asset: SanityImageSource;
    credits: string;
    url: string;
    urlWithBlur: string;
  };
  author: string;
}

const categoryMapping = new Map<string, ArtistCategory>([
  ["music", ArtistCategory.MUSIC],
  ["reading", ArtistCategory.READING],
]);

export const getArtistLinkList = async (): Promise<IArtistLink[]> => {
  const query =
    "*[_type == 'sortings'] {'titles': artists[]->languages.de.title, 'slugs': artists[]->slug.current, 'categories': artists[]->category}";
  const result = await client.fetch(query);
  return result[0].slugs.map(
    (slug: string, index: number): IArtistLink => ({
      title: result[0].titles[index],
      slug: slug,
      category: categoryMapping.get(result[0].categories[index]),
    })
  );
};

export const getArtist = async (slug: string): Promise<IArtist> => {
  const query = `*[_type == 'artist' && slug.current == '${slug}']{'title': languages.de.title, 'banner': languages.de.banner, author}`;
  const result = (await client.fetch(query))[0];
  return {
    ...result,
    banner: {
      ...result.banner,
      url: urlFor(result.banner.asset).height(1000).url(),
      urlWithBlur: urlFor(result.banner.asset).blur(200).height(1000).url(),
    },
  };
};
