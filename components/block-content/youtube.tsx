import ReactPlayer from "react-player/youtube";

interface YoutubeProps {
  node: {
    url: string;
  };
}

const Youtube = (props: YoutubeProps): JSX.Element => (
  <ReactPlayer url={props.node.url} width="100%" controls={true} />
);

export default Youtube;
