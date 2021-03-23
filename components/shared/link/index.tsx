interface LinkProps {
  children: any;
  title?: string;
  href: string;
  className?: string;
}

const Link = ({
  children,
  title,
  href,
  className = "",
}: LinkProps): JSX.Element => (
  <a href={href} target="_blank" rel="noreferrer" className={className}>
    <button
      className="transition duration-200 ease-in-out transform hover:underline"
      title={title}
    >
      {children}
    </button>
  </a>
);

export default Link;
