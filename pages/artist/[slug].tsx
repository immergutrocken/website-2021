import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "node:querystring";
import Layout from "../../components/layout";
import { getArtist, getArtistLinkList } from "../../lib/artist";
import { getNewsLinkList, INewsLink } from "../../lib/news";

interface ArtistParams extends ParsedUrlQuery {
  slug: string;
}

interface ArtistProps {
  title: string;
  newsLinkList: INewsLink[];
}

export const getStaticPaths = async (): Promise<
  GetStaticPathsResult<ArtistParams>
> => {
  const artistLinkList = await getArtistLinkList();
  return {
    paths: artistLinkList.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<ArtistParams>): Promise<
  GetStaticPropsResult<ArtistProps>
> => {
  const artist = await getArtist(params.slug);
  return {
    props: {
      title: artist.title,
      newsLinkList: await getNewsLinkList(),
    },
  };
};

const Artist = ({ title, newsLinkList }: ArtistProps): JSX.Element => {
  return <Layout newsLinkList={newsLinkList}>{title}</Layout>;
};

export default Artist;
