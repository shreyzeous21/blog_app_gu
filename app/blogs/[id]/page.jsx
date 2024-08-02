"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  assets,
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  blog_data,
} from "@/Assets/assets";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";

const socialLinks = [
  {
    id: 1,
    icon: <FacebookIcon />,
    url: "https://www.facebook.com",
    label: "Facebook",
  },
  {
    id: 2,
    icon: <TwitterIcon />,
    url: "https://www.twitter.com",
    label: "Twitter",
  },
  {
    id: 3,
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com",
    label: "LinkedIn",
  },
];

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    // const blogItem = blog_data.find((item) => item.id === Number(params.id));
    // if (blogItem) {
    //   setData(blogItem);
    // } else {
    //   console.error("Blog post not found");
    // }
    const response = await axios.get("/api/blog", {
      params: {
        id: params.id,
      },
    });
    setData(response.data);
  };
  useEffect(() => {
    fetchData();
  });
  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logo}
              width={180}
              alt="logo"
              className="w-[100px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started {"->"}
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt="author"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt="image"
        />

        <div
          className="
        blog-content"
        >
          {data.description}
        </div>

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on social media
          </p>
          <div className="flex">
            {socialLinks.map(({ id, icon, url, label }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
