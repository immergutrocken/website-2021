import { NewsLink } from "../lib/news";
import styles from "./header.module.scss";

const Header = ({ list }: { list: NewsLink[] }): JSX.Element => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <div
        className={
          "flex flex-nowrap text-4xl p-2 overflow-x-auto overflow-y-hidden whitespace-nowrap w-full" +
          styles.scrollbar
        }
      >
        <span>Neues:</span>
        {list.map((news: NewsLink, index: number) => {
          return (
            <span key={news.slug}>
              <span className="ml-4 mr-4">{news.title}</span>
              {index === list.length - 1 ? "" : "•"}
            </span>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
