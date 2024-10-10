import Slider from "../reusableComponent/slider/Slider";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 gap-8 ">
      <div>
        <p className="font-poppins font-[600] leading-[36px] text-[24px]">Hi I am </p>
        <p className="font-poppins font-[600] leading-[48px] text-[48px]">Muhammad Umair </p>
        <p className="font-poppins font-[700] leading-[120px] text-[100px]">UI & UX</p>
        <p className="font-poppins font-[700] leading-[120px] text-[100px] ml-12">Designer</p>

        <p className="font-poppins font-[400] leading-[31.5px] text-[21px] text-justify">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
          convallis pretium. Turpis tempus pharetra
        </p>
        <button className=" bg-[#FD6F00] py-[10px] px-[14px] rounded-md  text-[#FFFFFF] dark:text-black">
          Hire Me
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
