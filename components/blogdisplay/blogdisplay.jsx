import React from "react";
import BlogCard from "../cards/blogcard/blogcard";

const BlogDisplay = (props) => {
  //   console.log("Props", props.blogData);
  const { items = {}, includes = {} } = props.blogData;
  //   console.log("Items", items);
  //   console.log("Includes", includes);
  const itemsArray = Object.values(items);

  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {itemsArray.map((item, i) => (
          <BlogCard key={i + 1} item={item} includes={includes} />
        ))}
      </ul>
    </div>
  );
};

export default BlogDisplay;
