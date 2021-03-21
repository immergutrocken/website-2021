import { NewsLink } from "../lib/news";

const Header = ({ list }: { list: NewsLink[] }): JSX.Element => {
  return (
    <header className="flex flex-nowrap text-4xl p-2 overflow-x-auto overflow-y-hidden whitespace-nowrap">
      <span>Neues:</span>
      {list.map((news: NewsLink, index: number) => {
        return (
          <span key={news.slug}>
            <span className="ml-4 mr-4">{news.title}</span>
            {index === list.length - 1 ? "" : "•"}
          </span>
        );
      })}
    </header>
  );
};

export default Header;
