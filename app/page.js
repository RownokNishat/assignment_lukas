import Image from "next/image";
import DarkModeToggle from "./components/DarkModeToogle";
import Header from "./components/Header";
import Services from "./components/Services";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
export default function Home() {
  return (
    <div className="bg-[#FBFBFB] dark:bg-black">
      <div className="max-w-[1420px] xl:p-4 mx-auto ">
        <DarkModeToggle />
        <Header />
        <Banner />
        <AboutMe />
        <Services />
        <ContactMe />
      </div>
    </div>
  );
}
