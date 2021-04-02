interface LabelProps {
  children: string;
  className?: string;
}

const Label = ({ children, className = "" }: LabelProps): JSX.Element => (
  <div className={"text-center " + className}>
    <span className="border border-black rounded-full px-2 pt-1 sm:pt-1.5 uppercase text-sm sm:text-xl">
      {children}
    </span>
  </div>
);

export default Label;
