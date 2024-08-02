/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Shrey sadhukhan",
    authorImg: "/1722531971946_Screenshot 2024-05-29 233454.png",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);
    const response = await axios.post("/api/blog", formData);
    if (response.data?.success) {
      toast.success(response.data.message || "Blog Added successfully!");
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Sartup",
        author: "Shrey sadhukhan",
        authorImg: "/1722531971946_Screenshot 2024-05-29 233454.png",
      });
    } else {
      toast.error(
        response.data?.message || "An error occurred. Please try again."
      );
    }
  };
  return (
    <>
      <form
        action=""
        onSubmit={onSubmitHandler}
        className="pt-5 px-5 sm:pt-12 sm:pl-16"
      >
        <p className="text-xl">Upload Thumbnail</p>
        <label
          htmlFor="image"
          className="upload-label cursor-pointer flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg  hover:border-blue-400 hover:bg-gray-50 transition-all duration-300 "
        >
          <Image
            src={!image ? assets.upload : URL.createObjectURL(image)}
            alt="upload_logo"
            width={20}
            height={20}
            className="mb-2"
          />
          <span className="text-gray-500">
            {!image ? "Choose an image" : "Change image"}
          </span>
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          type="text"
          placeholder="Write content here"
          rows={6}
          required
          className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        />
        <p className="text-xl mt-4">Blog Category</p>
        <select
          name="category"
          id=""
          onChange={onChangeHandler}
          value={data.category}
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button className="mt-8 w-40 h-12 bg-black text-white" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default page;
