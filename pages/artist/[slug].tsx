import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "node:querystring";
import Layout from "../../components/layout";
import { getArtist, getArtistLinkList, IArtist } from "../../lib/artist";
import { getNewsLinkList, INewsLink } from "../../lib/news";
import NextImage from "next/image";

interface ArtistParams extends ParsedUrlQuery {
  slug: string;
}

interface ArtistProps extends IArtist {
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
      ...artist,
      newsLinkList: await getNewsLinkList(),
    },
  };
};

const Artist = ({ title, newsLinkList, banner }: ArtistProps): JSX.Element => {
  return (
    <Layout newsLinkList={newsLinkList}>
      <div className="grid grid-cols-1 sm:grid-cols-2 content-height sm:space-x-5">
        <div className="relative h-full">
          <NextImage src={banner.urlWithBlur} layout="fill" objectFit="cover" />
          <NextImage src={banner.url} layout="fill" objectFit="contain" />
        </div>
        <div>{title}</div>
      </div>
    </Layout>
  );
};

export default Artist;
