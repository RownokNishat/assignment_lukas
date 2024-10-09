import Image from "next/image";
import Logo from "../assests/images/logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center dark:text-white">
      <div>
        <Image src={Logo} width="250" height="60" />
      </div>
      <div className="flex gap-[10px] font-poppins">
        <button className="py-[10px] px-[14px]">Home</button>
        <button className="py-[10px] px-[14px]">About Me</button>
        <button className="py-[10px] px-[14px]">Services</button>
        <button className="py-[10px] px-[14px]">Projects</button>
        <button className="py-[10px] px-[14px]">Testimonials</button>
        <button className="py-[10px] px-[14px]">Contacts</button>
        <button className=" bg-[#FD6F00] py-[10px] px-[14px] rounded-md  text-[#FFFFFF] dark:text-black">
          Download CV
        </button>
      </div>
    </div>
  );
};
export default Header;
