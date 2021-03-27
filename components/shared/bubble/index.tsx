interface BubbleProps {
  children: JSX.Element;
  onClick?: () => void;
}

const Bubble = ({ children, onClick }: BubbleProps): JSX.Element => (
  <button
    className="bg-black w-14 h-14 rounded-full text-white flex justify-center items-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
    onClick={onClick ? () => onClick() : () => false}
  >
    {children}
  </button>
);

export default Bubble;
