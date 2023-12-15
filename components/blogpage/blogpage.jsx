import React from "react";
import getRandomColor from "../../lib/utils/blogcard/tagsdetails";
import formatDate from "../../lib/utils/blogpage/getpublishdate";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import getOptions from "../../lib/utils/blogpage/contentoptions";

const BlogPage = (props) => {
  const { item, author_details, cover_picture } = props;

  console.log("CONT", item.fields.content);

  const dateCreated = formatDate(item.fields.date);

  const renderRichText = (text) =>
    documentToReactComponents(text, getOptions());

  return (
    <div className="bg-cover bg-center h-full">
      <div className="relative flex">
        <div className="float-left w-3/4">
          <div className="bg-opacity-70 p-4 pl-0 pt-0">
            <h2 className="bg-cover font-bold text-3xl">{item.fields.title}</h2>
            <h5 className="bg-cover  text-sm">{dateCreated}</h5>
            <img
              className="my-4"
              style={{ width: "100%", height: "500px" }}
              src={cover_picture.cover_picture_url}
              alt={cover_picture.cover_picture_title}
            />
            <p className="bg-cover  text-sm">
              {renderRichText(item.fields.content)}
            </p>
          </div>
        </div>

        <div className="float-left w-1/4 pl-8">
          <div className="bg-opacity-70 p-8 mt-8">
            <h2 className="bg-cover text-center text-3xl">About Me</h2>
            <img
              className="ml-1 my-2"
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
              src={author_details.author_image_url}
              alt={author_details.author_name}
            />
            <p className="bg-cover text-center text-xl">
              {author_details.author_name}
            </p>
            <div className="flex flex-wrap justify-center">
              {item.fields.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-center text-xl mt-2 mr-2 rounded-full"
                  style={{
                    backgroundColor: getRandomColor(),
                    borderRadius: "10px",
                    padding: "5px",
                    color: "#fff",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-opacity-70 p-8 mt-8">
            <h3 className="bg-cover  text-2xl">Popular Post</h3>
            <div className="blg_fake bg-gray-600 p-8 mt-4">Image</div>
            <div className="blg_fake bg-gray-600 p-8 mt-4">Image</div>
            <div className="blg_fake bg-gray-600 p-8 mt-4">Image</div>
          </div>

          <div className="blg_card bg-opacity-70 p-8 mt-8">
            <h3 className="bg-cover text-2xl">Follow Me</h3>
            <p className="bg-cover text-sm">Some Links</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
