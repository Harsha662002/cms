"use client";
import React, { useEffect, useState } from "react";
import BlogFilter from "../../components/blogfilter/blogfilter";
import BlogDisplay from "../../components/blogdisplay/blogdisplay";

const Blogs = () => {
  const [blogData, setBlogData] = useState("");

  const getBlogs = async () => {
    try {
      const response = await fetch("/api/getblogs", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Error fetching Blogs");
      }
      const responseData = await response.json();
      //console.log("Response Data ", responseData.blogsData);
      setBlogData(responseData.blogsData);
    } catch (error) {
      console.error("Error fetching Blogs from Server:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="flex">
      <div className="w-2/12 border-r border-black">
        <BlogFilter />
      </div>
      <div className="w-full">
        <BlogDisplay blogData={blogData} />
      </div>
    </div>
  );
};

export default Blogs;
