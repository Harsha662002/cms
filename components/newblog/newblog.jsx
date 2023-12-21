import React, { useState, useRef } from "react";
import { FaItalic, FaBold } from "react-icons/fa";
import { TbBlockquote } from "react-icons/tb";

const NewBlogComponent = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isBlockquote, setIsBlockquote] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [tagInputError, setTagInputError] = useState("");
  const [coverImageError, setCoverImageError] = useState("");
  const textareaRef = useRef(null);

  const handleTagAdd = () => {
    if (tagInput.trim() !== "") {
      setTags([...tags, tagInput]);
      setTagInput("");
      setTagInputError("");
    } else if (tags.length === 0) {
      setTagInputError("This is required");
    } else {
      setTagInputError("");
    }
  };

  const handleTagRemove = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleBoldClick = () => {
    console.log("hello");
    applyFormatting("bold");
  };

  const handleItalicClick = () => {
    applyFormatting("italic");
  };

  const handleBlockquoteClick = () => {
    applyFormatting("blockquote");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (readerEvent) {
        const base64String = readerEvent.target.result;
        setCoverImage(base64String);
      };
      // Read the image file as a data URL
      // reader.readAsDataURL(file);
    }
  };
  const handlePublishClick = () => {
    // Validate inputs
    let isValid = true;

    if (title.trim() === "") {
      setTitleError("This is required");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (content.trim() === "") {
      setContentError("This is required");
      isValid = false;
    } else {
      setContentError("");
    }

    if (tags.length === 0) {
      setTagInputError("At least one tag is required");
      isValid = false;
    } else {
      setTagInputError("");
    }

    if (!coverImage) {
      setCoverImageError("This is required");
      isValid = false;
    } else {
      setCoverImageError("");
    }

    if (isValid) {
      // Logic to handle publishing the blog with newBlogData
      const newBlogData = {
        title,
        content,
        tags,
        coverImage,
      };
      props.onPublish(newBlogData);
      console.log("Publish Clicked", newBlogData);
    }
  };

  return (
    <div className="flex">
      <div className="flex item items-center">
        <div className="flex flex-col">
          <div className="">
            <FaBold
              size={20}
              className={`cursor-pointer ${isBold ? "text-blue-500" : ""}`}
              onClick={handleBoldClick}
            />
          </div>
          <div className="">
            <FaItalic
              size={20}
              className={`cursor-pointer ${isItalic ? "text-blue-500" : ""}`}
              onClick={handleItalicClick}
            />
          </div>
          <div>
            <TbBlockquote
              size={20}
              className={`cursor-pointer ${
                isBlockquote ? "text-blue-500" : ""
              }`}
              onClick={handleBlockquoteClick}
            />
          </div>
        </div>
        <div className="w-9/10 p-4">
          <input
            type="text"
            placeholder="Title of the Article"
            className={`w-full p-2 mb-4 border border-gray-300 text-lg font-bold rounded ${
              titleError ? "border-red-500" : ""
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required // Added required attribute
          />
          {titleError && <p className="text-red-500 text-sm">{titleError}</p>}
          <textarea
            ref={textareaRef}
            placeholder="Content of the Article"
            className={`w-full p-2 mb-4 border border-gray-300 resize-none rounded ${
              contentError ? "border-red-500" : ""
            }`}
            rows="25"
            cols="125"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required // Added required attribute
          />
          {contentError && (
            <p className="text-red-500 text-sm">{contentError}</p>
          )}
          <div className="flex mb-4 items-center ">
            <label className="mr-2">Enter Tag :</label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className={`border border-gray-300 p-1 rounded ${
                tags.length === 0 ? "border-red-500" : ""
              }`}
            />
            <button
              className="ml-2 bg-blue-500 text-white py-2 px-3 rounded"
              onClick={handleTagAdd}
            >
              Add
            </button>
          </div>
          {tags.length === 0 && (
            <p className="text-red-500 text-sm">{tagInputError}</p>
          )}
          <div className="flex flex-wrap mb-4">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 rounded mr-2 mb-2 p-2"
              >
                {tag}
                <span
                  className="ml-2 cursor-pointer"
                  onClick={() => handleTagRemove(index)}
                >
                  &#10006;
                </span>
              </div>
            ))}
          </div>
          <div className="mb-4 flex items-center">
            <label className="block  text-md font-medium ">
              Cover Picture :
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e)}
              className={`p-2 ${coverImageError ? "border-red-500" : ""}`}
              required // Added required attribute
            />
          </div>
          {coverImageError && (
            <p className="text-red-500 text-sm">{coverImageError}</p>
          )}
        </div>
      </div>
      <div className="w-1/10 p-4 ">
        <button
          className="bg-green-500 text-white py-2 px-3 w-full rounded"
          onClick={handlePublishClick}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default NewBlogComponent;
