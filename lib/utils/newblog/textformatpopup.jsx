// import React, { useState } from "react";
// import { FaItalic } from "react-icons/fa";
// import { TbBlockquote } from "react-icons/tb";
// import { FaBold } from "react-icons/fa";

// const NewBlogComponent = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [tags, setTags] = useState([]);
//   const [tagInput, setTagInput] = useState("");
//   const [coverImage, setCoverImage] = useState(null);

//   const handleTagAdd = () => {
//     if (tagInput.trim() !== "") {
//       setTags([...tags, tagInput]);
//       setTagInput("");
//     }
//   };

//   const handleTagRemove = (index) => {
//     const newTags = [...tags];
//     newTags.splice(index, 1);
//     setTags(newTags);
//   };

//   const handleBoldClick = () => {
//     // Logic to apply bold effect to the selected text
//     console.log("Bold Clicked");
//   };

//   const handleItalicClick = () => {
//     // Logic to apply italic effect to the selected text
//     console.log("Italic Clicked");
//   };

//   const handleBlockquoteClick = () => {
//     // Logic to apply blockquote effect to the selected text
//     console.log("Blockquote Clicked");
//   };

//   const handlePublishClick = () => {
//     // Logic to handle publishing the blog with newBlogData
//     const newBlogData = {
//       title,
//       content,
//       tags,
//       coverImage,
//     };
//     console.log("Publish Clicked", newBlogData);
//   };

//   return (
//     <div className="flex">
//       <div className="flex item">
//         <div className="flex flex-col">
//           <div className="">
//             <FaBold
//               size={20}
//               className="cursor-pointer"
//               onClick={handleBoldClick}
//             />
//           </div>
//           <div className="">
//             <FaItalic
//               size={20}
//               className="cursor-pointer"
//               onClick={handleItalicClick}
//             />
//           </div>
//           <div>
//             <TbBlockquote
//               size={20}
//               className="cursor-pointer"
//               onClick={handleBlockquoteClick}
//             />
//           </div>
//         </div>
//         <div className="w-9/10 p-4">
//           <input
//             type="text"
//             placeholder="Title of the Article"
//             className="w-full p-2 mb-4 border border-gray-300 text-lg font-bold rounded"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           {/* <div className="flex items-center">
//            */}
//           <textarea
//             placeholder="Content of the Article"
//             className="w-full p-2 mb-4 border border-gray-300 resize-none rounded"
//             rows="25"
//             cols="125"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           />
//           {/* </div> */}
//           <div className="flex mb-4 items-center ">
//             <label className="mr-2">Enter Tag :</label>
//             <input
//               type="text"
//               value={tagInput}
//               onChange={(e) => setTagInput(e.target.value)}
//               className="border border-gray-300 p-1 rounded"
//             />
//             <button
//               className="ml-2 bg-blue-500 text-white py-2 px-3 rounded"
//               onClick={handleTagAdd}
//             >
//               Add
//             </button>
//           </div>
//           <div className="flex flex-wrap mb-4">
//             {tags.map((tag, index) => (
//               <div
//                 key={index}
//                 className="flex items-center bg-gray-200 rounded mr-2 mb-2 p-2"
//               >
//                 {tag}
//                 <span
//                   className="ml-2 cursor-pointer"
//                   onClick={() => handleTagRemove(index)}
//                 >
//                   &#10006;
//                 </span>
//               </div>
//             ))}
//           </div>
//           <div className="mb-4 flex items-center">
//             <label className="block  text-md font-medium ">
//               Cover Picture :
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setCoverImage(e.target.files[0])}
//               className="p-2"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="w-1/10 p-4 ">
//         <button
//           className="bg-green-500 text-white py-2 px-3 w-full rounded"
//           onClick={handlePublishClick}
//         >
//           Publish
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NewBlogComponent;
