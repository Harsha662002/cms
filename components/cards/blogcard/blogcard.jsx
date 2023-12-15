import React, { useEffect, useState } from "react";
import extractAuthorDetails from "../../../lib/utils/blogcard/authorDetails";
import extractCoverImageDetails from "../../../lib/utils/blogcard/coverimagedetails";
import getRandomColor from "../../../lib/utils/blogcard/tagsdetails";
import calculateTimeDifference from "../../../lib/utils/blogcard/datedetails";
import Link from "next/link";

const BlogCard = (props) => {
  const [timeDifference, setTimeDifference] = useState("");
  const item = props.item;
  const includes = props.includes;

  const { author_name, author_image_url } = extractAuthorDetails(
    item,
    includes
  );
  const cover_picture = extractCoverImageDetails(item, includes);

  useEffect(() => {
    const formattedTimeDifference = calculateTimeDifference(item);
    setTimeDifference(formattedTimeDifference);
  }, [item.fields.date]);

  return (
    <Link href={`/blogs/${item.fields.slug}`}>
      <div className="flex flex-wrap justify-center">
        <div className="w-full overflow-hidden m-4 shadow-lg flex flex-col">
          <div className="bg-cover bg-center h-60">
            <img
              className="w-full h-full object-fill"
              src={cover_picture.cover_picture_url}
              alt={cover_picture.cover_picture_title}
            />
          </div>
          <div className="py-4 px-6 flex-grow">
            <div className="flex">
              {props.item.fields.tags.map((tag, index) => (
                <span
                  key={index}
                  className="tag mr-2"
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
            <h4 className="my-2 text-lg font-semibold flex-grow min-h-[3em]">
              {props.item.fields.title}
            </h4>
            <p
              className="text-gray-500 text-sm flex-grow min-h-[4.5em]"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 3,
              }}
            >
              {props.item.fields.summary}
            </p>
          </div>
          <div className="py-4 px-6">
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full mr-2 object-cover"
                src={author_image_url}
                alt={author_name}
              />
              <div>
                <h5 className="text-sm font-semibold">{author_name}</h5>
                <small>{timeDifference}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
