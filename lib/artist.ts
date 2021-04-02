import { ArtistCategory } from "./enums/artistCategory.enum";
import client from "./shared/sanityClient";

export interface IArtistLink {
  title: string;
  slug: string;
  category: ArtistCategory;
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
