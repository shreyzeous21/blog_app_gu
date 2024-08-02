import Image from "next/image";
import Sidebar from "./_components/Sidebar";
import { assets } from "@/Assets/assets";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.logo} width={40} alt="logo" />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
