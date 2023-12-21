import React, { useState } from "react";
import NewBlogComponent from "../../components/newblog/newblog";

const NewBlog = () => {
  //const [newBlogData, setNewBlogData] = useState(null);

  const handlePublish = (data) => {
    const currentDate = new Date().toISOString();
    data.currentDate = currentDate;

    const titleSlug = data.title.toLowerCase().replace(/\s+/g, "-");
    data.slug = titleSlug;

    data.author = {
      name: "Harsha Vasireddy", // Replace with the actual author name
      image: "/assets/images/Harsha.jpeg", // Replace with the actual URL to the author image
    };

    const contentWords = data.content.split(/\s+/);
    const summaryWords = contentWords.slice(0, 30);
    data.summary = summaryWords.join(" ");

    console.log("Received data in parent:", data);

    //setNewBlogData(data);
    sendBlogsToAPI(data);
  };

  const sendBlogsToAPI = async (blogData) => {
    //const apiUrl = "/api/senddata";
    //const cmaToken = "your_cma_token"; // Replace with your Content Management API token

    try {
      const response = await fetch("/api/senddata", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_CMA_TOKEN}`,
          "Content-Type": "application/vnd.contentful.management.v1+json",
          "X-Contentful-Content-Type": "blogCard",
        },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) {
        throw new Error(`Error sending blogs. Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Blogs sent successfully:", responseData);

      // Handle the successful response here
    } catch (error) {
      console.error("Error sending blogs:", error);
      // Handle the error here
    }
  };
  return <NewBlogComponent onPublish={handlePublish} />;
};

export default NewBlog;
