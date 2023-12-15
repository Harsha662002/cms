"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import extractAuthorDetails from "../../lib/utils/blogcard/authorDetails";
import extractCoverImageDetails from "../../lib/utils/blogcard/coverimagedetails";
import BlogPage from "../../components/blogpage/blogpage";

const Slug = () => {
  const [blogData, setBlogData] = useState("");
  const [filteredBlogData, setFilteredBlogData] = useState("");
  const router = useRouter();
  const { slug } = router.query;

  const getBlogs = async () => {
    try {
      const response = await fetch("/api/getblogs", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Error fetching Blogs");
      }

      // Entire data
      const responseData = await response.json();
      setBlogData(responseData.blogsData);

      // Only the specific item data
      const filteredBlog = responseData.blogsData.items.find(
        (blog) => blog.fields.slug === slug
      );
      setFilteredBlogData(filteredBlog);
    } catch (error) {
      console.error("Error fetching Blogs from Server:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      getBlogs();
    }
  }, [slug]);

  if (!filteredBlogData) {
    // Loading state, you can add a loading spinner or message here
    return <div>Loading...</div>;
  }

  /* FOR Cover Image and Author */
  const { includes } = blogData;
  const author_details = extractAuthorDetails(filteredBlogData, includes);
  const cover_picture = extractCoverImageDetails(filteredBlogData, includes);

  return (
    <div>
      <BlogPage
        item={filteredBlogData}
        author_details={author_details}
        cover_picture={cover_picture}
      />
    </div>
  );
};

export default Slug;
