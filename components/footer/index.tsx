import Link from "../shared/link";

const Footer = (): JSX.Element => (
  <div className="w-full text-center p-3">
    Made with{" "}
    <span role="img" aria-label="heart">
      ❤️
    </span>
    , structured content powered by{" "}
    <Link href="https://www.sanity.io">sanity.io</Link>, hosted bei{" "}
    <Link href="https://www.vercel.com">vercel.com</Link>
  </div>
);

export default Footer;
