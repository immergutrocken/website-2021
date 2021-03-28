interface ButtonProps {
  children: JSX.Element | string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button = ({
  children,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps): JSX.Element => (
  <button
    className={
      "text-white bg-black pt-1 sm:pt-2 px-2.5 sm:px-4 rounded-full text-lg sm:text-4xl" +
      className
    }
    onClick={() => onClick()}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
