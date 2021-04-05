import NextImage from "next/image";
import { useState } from "react";

interface ExpanderProps {
  className?: string;
  title: string;
  children: JSX.Element | JSX.Element[];
}

const Expander = ({
  title,
  className,
  children,
}: ExpanderProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={className}>
      <button
        className="inline-flex items-center cursor-pointer focus:outline-none"
        onClick={() => setCollapsed(!collapsed)}
      >
        {title}
        <div className="h-4 w-4 sm:w-6 sm:h-6 ml-2 mb-1">
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
