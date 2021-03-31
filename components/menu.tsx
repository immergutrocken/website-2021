import Bubble from "./shared/bubble";
import NextImage from "next/image";
import styles from "../styles/menu.module.scss";

interface MenuProps {
  onClose: () => void;
  showMenu: boolean;
}

const Menu = ({ onClose, showMenu = false }: MenuProps): JSX.Element => {
  const displayClass = showMenu ? "block" : "hidden";
  return (
    <div
      className={`w-full sm:w-1/2 bg-white absolute z-20 top-8 sm:top-11 left-0 bo menu-panel ${displayClass} ${styles.menuPanel}`}
    >
      <Bubble className="absolute top-3 right-3" onClick={() => onClose()}>
        <NextImage src="/close.svg" layout="fill" objectFit="contain" />
      </Bubble>
    </div>
  );
};

export default Menu;
