import Slider from "../reusableComponent/slider/Slider";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-2 gap-8 ">
      <div></div>
      <div>
        <p className="font-poppins text-[65px] font-[600] py-8 leading-[97.5px]">About Me</p>
        <p className=" w-[756px] font-poppins text-justify font-[400] leading-[31px] text-[21px] py-8">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
          convallis pretium. Turpis tempus pharetra
        </p>
        <div className="font-poppins text-[24px] font-[600] leading-[36px] py-8">
          <Slider label="Ux" value="90"></Slider>
          <Slider label="Web Design" value="96"></Slider>
          <Slider label="App Design" value="92"></Slider>
          <Slider label="Graphic Design" value="97"></Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
