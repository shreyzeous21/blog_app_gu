import logo from "./logo.svg";
import blog_pic_1 from "./blog_pic_1.jpg";
import add from "./add.svg";
import email from "./email.svg";
import list from "./list.svg";
import upload from "./upload.svg";

export const assets = {
  logo,
  add,
  email,
  list,
  upload,
};

export const blog_data = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    description: "An in-depth guide to mastering closures in JavaScript.",
    image: blog_pic_1,
    date: Date.now(),
    category: "Technology",
    author: "Shrey",
    author_img: blog_pic_1,
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    description: "An in-depth guide to mastering closures in JavaScript.",
    image: blog_pic_1,
    date: Date.now(),
    category: "Lifestyle",
    author: "Shrey",
    author_img: blog_pic_1,
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures",
    description: "An in-depth guide to mastering closures in JavaScript.",
    image: blog_pic_1,
    date: Date.now(),
    category: "Startup",
    author: "Shrey",
    author_img: blog_pic_1,
  },
  {
    id: 4,
    title: "Understanding JavaScript Closures",
    description: "An in-depth guide to mastering closures in JavaScript.",
    image: blog_pic_1,
    date: Date.now(),
    category: "Technology",
    author: "Shrey",
    author_img: blog_pic_1,
  },
];

export const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-meta"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#009988"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z" />
    <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z" />
  </svg>
);

export const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-x"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#009988"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-brand-linkedin"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#009988"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M8 11l0 5" />
    <path d="M8 8l0 .01" />
    <path d="M12 16l0 -5" />
    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
  </svg>
);
