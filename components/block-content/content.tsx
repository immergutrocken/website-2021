import BlockContent from "@sanity/block-content-to-react";
import BlockExpander from "./expander";
import ImageGallery from "./imageGallery";
import InternalLink from "./internalLink";
import Youtube from "./youtube";

export const serializers = {
  types: {
    imageGallery: ImageGallery,
    youtube: Youtube,
    expander: BlockExpander,
  },
  marks: {
    internalLink: InternalLink,
  },
};

interface ContentProps {
  content: [];
}

const Content = ({ content }: ContentProps): JSX.Element => (
  <BlockContent
    blocks={content}
    serializers={serializers}
    projectId={process.env.SANITY_PROJECT_ID}
    dataset={process.env.SANITY_DATASET}
  />
);

export default Content;
