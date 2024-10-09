import Image from "next/image";
import DarkModeToggle from "./components/DarkModeToogle";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className="bg-[#FBFBFB] dark:bg-black">
      <div className="max-w-[1420px] xl:p-4 mx-auto ">
        <Header />
        <DarkModeToggle />
        <h1 className="text-black dark:text-white">Welcome to Dark Mode!</h1>
      </div>
    </div>
  );
}
