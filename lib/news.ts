import client from "./shared/sanityClient";

export interface INewsLink {
  title: string;
  slug: string;
}

export const getNewsLinkList = async (): Promise<INewsLink[]> => {
  const query =
    "*[_type == 'sortings'] {'title': news[]->languages.de.title, 'slug': news[]->slug.current}";
  const result = await client.fetch(query);
  const newsLinkList = result[0].slug.map(
    (slug: string, index: number): INewsLink => ({
      title: result[0].title[index],
      slug: slug,
    })
  );
  return newsLinkList;
};
