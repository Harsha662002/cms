import { BLOCKS, INLINES } from "@contentful/rich-text-types";
const getOptions = () => {
  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <p
            className="mb-3"
            style={{
              fontSize: "16px",
              fontFamily: "sans-serif",
              lineHeight: "1.25",
            }}
          >
            {children}
          </p>
        );
      },
      [BLOCKS.QUOTE]: (node, children) => {
        return <p className=" blockquote_css">{children}</p>;
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="text-3xl font-bold my-2">{children}</h2>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        // return <img src={`https://${node.data.target.fields.file.url}`} />;
      },
      [INLINES.HYPERLINK]: ({ data }, children) => {
        return (
          <a href={data.uri} className="text-blue-500">
            {children}
          </a>
        );
      },
    },
  };
};

export default getOptions;
