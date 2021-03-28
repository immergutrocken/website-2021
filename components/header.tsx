import { NewsLink } from "../lib/news";
import Link from "./shared/link";
import styles from "../styles/header.module.scss";
import Label from "./shared/label";

const Header = ({ list }: { list: NewsLink[] }): JSX.Element => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <div
        className={
          "flex flex-nowrap text-lg sm:text-4xl px-2 py-1 sm:py-2 overflow-x-auto overflow-y-hidden whitespace-nowrap w-full " +
          styles.scrollbar
        }
      >
        <Label className="flex items-center">NEUES</Label>
        {list.map((news: NewsLink, index: number) => {
          return (
            <span className="pt-1" key={news.slug}>
              <Link href="" className="mx-2 sm:mx-4">
                {news.title}
              </Link>
              {index === list.length - 1 ? "" : "•"}
            </span>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
