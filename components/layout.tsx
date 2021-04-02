import NewsLink from "next/link";
import styles from "../styles/layout.module.scss";
import { INewsLink } from "../lib/news";

interface LayoutProps {
  children: JSX.Element | JSX.Element[] | string;
  newsLinkList: INewsLink[];
}

const buildDateAndLocation = (times: number): JSX.Element => {
  const tempArray = [];
  for (let index = 0; index < times; index++) {
    tempArray.push(index);
  }
  return (
    <>
      {tempArray.map((index) => (
        <span key={index}>26.-28.08.2021 • Neustrelitz • </span>
      ))}
    </>
  );
};

const Layout = ({ children, newsLinkList }: LayoutProps): JSX.Element => (
  <div className="pt-8 sm:pt-12">
    <header className="fixed w-full top-0 z-10 bg-white flex flex-nowrap text-lg sm:text-4xl pt-1">
      <span className="flex items-center px-1 sm:px-2">NEUES:</span>
      <div
        className={
          "flex flex-nowrap overflow-x-auto overflow-y-hidden whitespace-nowrap w-full " +
          styles.scrollbar
        }
      >
        {newsLinkList.map((news: INewsLink, index: number) => {
          return (
            <span key={index}>
              <NewsLink href={`/article/${news.slug}`}>
                <a className="mx-2 sm:mx-4">{news.title}</a>
              </NewsLink>
              {index === newsLinkList.length - 1 ? "" : "•"}
            </span>
          );
        })}
      </div>
    </header>
    {children}
    <div className="fixed bottom-0 text-lg sm:text-4xl px-2 sm:px-0 sm:py-2 whitespace-nowrap overflow-x-hidden bg-white">
      <div className={styles.ticker}>{buildDateAndLocation(10)}</div>
    </div>
  </div>
);

export default Layout;
