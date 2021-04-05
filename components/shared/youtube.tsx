import ReactPlayer from "react-player/youtube";

const Youtube = (props): JSX.Element => (
  <ReactPlayer url={props.node.url} width="100%" controls={true} />
);

export default Youtube;
