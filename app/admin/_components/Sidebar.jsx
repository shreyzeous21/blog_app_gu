import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={100} alt="logo" />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.add} alt="icon" width={28} />
            <p>Add Blogs</p>
          </div>
          <div className=" mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.add} alt="icon" width={28} />
            <p>Add Blogs</p>
          </div>
          <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.email} alt="icon" width={28} />
            <p>Subscribers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;