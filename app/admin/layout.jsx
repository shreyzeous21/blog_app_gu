import Sidebar from "./_components/Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <Sidebar />
      </div>
      {children}
    </>
  );
}
