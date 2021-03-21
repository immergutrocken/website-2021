import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

export interface NewsLink {
  title: string;
  slug: string;
}

export const getNewsList = async (): Promise<NewsLink[]> => {
  const query =
    "*[_type == 'article' && isNews == true] {'title': languages.de.title, 'slug': slug.current}";
  return client.fetch(query);
};
