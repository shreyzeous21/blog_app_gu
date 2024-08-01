import {
  assets,
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/Assets/assets";
import Image from "next/image";
import React from "react";

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

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image
        src={assets.logo}
        width={180}
        alt="logo"
        className="w-[100px] sm:w-auto"
      />
      <p className="textsm text-white">
        &copy;{year} Blogger GU. All rights reserved. Designed with passion and
        creativity.
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
  );
};

export default Footer;
