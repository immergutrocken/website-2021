interface LinkProps {
  children: JSX.Element | string;
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
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`hover:underline focus:outline-none ${className} font-bold`}
    title={title}
  >
    {children}
  </a>
);

export default Link;
