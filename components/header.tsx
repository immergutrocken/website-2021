import { INewsLink } from "../lib/news";
import Link from "./shared/link";
import styles from "../styles/header.module.scss";
import Bubble from "./shared/bubble";
import NextImage from "next/image";
import Menu from "./menu";
import { useState } from "react";
import { IMenuItem } from "../lib/menu";

const Header = ({
  newsLinkList,
  menuItemList,
}: {
  newsLinkList: INewsLink[];
  menuItemList: IMenuItem[];
}): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  return (
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
            <span className="pt-1" key={news.slug}>
              <Link href="" className="mx-2 sm:mx-4">
                {news.title}
              </Link>
              {index === newsLinkList.length - 1 ? "" : "•"}
            </span>
          );
        })}
      </div>
      <Bubble
        className="absolute left-1 top-12 sm:left-2 sm:top-16"
        onClick={() => setShowMenu(true)}
      >
        <NextImage src="/burger-menu.svg" layout="fill" objectFit="contain" />
      </Bubble>
      <Menu
        showMenu={showMenu}
        onClose={() => setShowMenu(false)}
        items={menuItemList}
      />
    </header>
  );
};

export default Header;
