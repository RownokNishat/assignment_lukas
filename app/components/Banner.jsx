import Image from "next/image";
import BannerImage from "../assests/images/bannerImage.png";
import BannerRectangle from "../assests/images/bannerRectangle.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-8 my-24 text-black dark:text-white">
      <div className="flex justify-center flex-col items-start py-4">
        <p className="font-poppins font-[600] leading-[36px] text-[24px] mt-16">
          Hi I am{" "}
        </p>
        <p className="font-poppins font-[600] leading-[48px] text-[48px] text-[#FD6F00]">
          Muhammad Umair{" "}
        </p>
        <p className="font-poppins font-[700] leading-[120px] text-[100px]">
          UI & UX
        </p>
        <p className="font-poppins font-[700] leading-[120px] text-[100px] ms-56">
          Designer
        </p>

        <p className="font-poppins font-[400] leading-[31.5px] py-4 text-[21px] text-justify">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className=" bg-[#FD6F00] py-[10px] px-[24px] rounded-md  text-[#FFFFFF] dark:text-black">
          Hire Me
        </button>
      </div>
      <div className="flex justify-end items-center">
        <Image
          className="absolute"
          src={BannerImage}
          alt="banner Image"
          width="600"
          height="600"
        />
        <Image
          className="relative right-28 bottom-48"
          src={BannerRectangle}
          alt="banner Image"
          width="400"
          height="500"
        />
      </div>
    </div>
  );
};

export default Banner;
