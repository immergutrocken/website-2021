interface IClassName {
  className?: string;
}

interface BubbleProps extends IClassName {
  children: JSX.Element;
  onClick?: () => void;
}

const Bubble = ({
  children,
  onClick,
  className = "",
}: BubbleProps): JSX.Element => (
  <button
    className={`bg-black w-9 h-9 sm:w-14 sm:h-14 rounded-full flex justify-center items-center cursor-pointer p-2 sm:p-3 sm:transition-transform sm:duration-300 sm:ease-in-out sm:transform sm:hover:scale-110 focus:outline-none ${className}`}
    onClick={onClick ? () => onClick() : () => false}
  >
    <span className="text-white relative min-h-full min-w-full">
      {children}
    </span>
  </button>
);

export default Bubble;
