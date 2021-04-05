import NextImage from "next/image";
import { useState } from "react";

interface ExpanderProps {
  className?: string;
  title: string;
  children: JSX.Element | JSX.Element[];
  iconSize?: "small" | "medium" | "large" | "auto";
}

const buildSize = (iconSize: "small" | "medium" | "large" | "auto"): string => {
  switch (iconSize) {
    case "small":
      return "h-2 w-2 sm:h-4 sm:w-4";
    case "medium":
      return "h-4 w-4";
    case "large":
      return "h-6 w-6";
    default:
      return "h-4 w-4 sm:w-6 sm:h-6";
  }
};

const Expander = ({
  title,
  className,
  children,
  iconSize = "auto",
}: ExpanderProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={className}>
      <button
        className="inline-flex items-center justify-start max-w-full cursor-pointer focus:outline-none"
        onClick={() => setCollapsed(!collapsed)}
        title={title}
      >
        <span className="truncate">{title}</span>
        <div className={`${buildSize(iconSize)} ml-2 mb-1`}>
          <NextImage
            src="/dropdown-icon.svg"
            height="16"
            width="16"
            layout="responsive"
          />
        </div>
      </button>
      <div className={`my-2 sm:text-5xl ${collapsed ? "hidden" : "block"}`}>
        {children}
      </div>
    </div>
  );
};

export default Expander;
