interface ButtonProps {
  children: JSX.Element | string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}

const Button = ({
  children,
  className = "",
  onClick,
  disabled = false,
  active = true,
}: ButtonProps): JSX.Element => (
  <button
    className={`text-white pt-1 sm:pt-2 px-2.5 sm:px-4 rounded-full text-lg sm:text-4xl focus:outline-none ${className} ${
      active ? "bg-black" : "bg-gray-200"
    } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    onClick={() => onClick()}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
