import client from "./shared/sanityClient";

export interface NewsLink {
  title: string;
  slug: string;
}

export const getNewsList = async (): Promise<NewsLink[]> => {
  const query =
    "*[_type == 'sortings'] {'title': news[]->languages.de.title, 'slug': news[]->slug.current}";
  const result = await client.fetch(query);
  const newArray = result[0].slug.map(
    (slug: string, index: number): NewsLink => ({
      title: result[0].title[index],
      slug: slug,
    })
  );
  return newArray;
};
