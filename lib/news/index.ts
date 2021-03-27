import client from "../shared/sanityClient";

export interface NewsLink {
  title: string;
  slug: string;
}

export const getNewsList = async (): Promise<NewsLink[]> => {
  const query =
    "*[_type == 'article' && isNews == true] {'title': languages.de.title, 'slug': slug.current}";
  return client.fetch(query);
};
