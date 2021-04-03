import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "node:querystring";
import { getArticle, getArticleSlugList, IArticle } from "../../lib/article";
import { getNewsLinkList, INewsLink } from "../../lib/news";

interface ArticleParams extends ParsedUrlQuery {
  slug: string;
}

interface ArticleProps extends IArticle {
  newsLinkList: INewsLink[];
}

export const getStaticPaths = async (): Promise<
  GetStaticPathsResult<ArticleParams>
> => {
  const slugs = await getArticleSlugList();
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<ArticleParams>): Promise<
  GetStaticPropsResult<ArticleProps>
> => {
  const article = await getArticle(params.slug);
  return {
    props: {
      ...article,
      newsLinkList: await getNewsLinkList(),
    },
  };
};

const Article = ({ title }: ArticleProps): JSX.Element => {
  return <div>{title}</div>;
};

export default Article;
