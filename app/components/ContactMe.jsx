import React from "react";

function ContactMe() {
  return (
    <div className=" my-12 max-w-[932px] mx-auto">
      <p className="text-5xl font-bold font-poppins text-center">Lets Design Together</p>
      <div className="font-poppins text-center font-[400] leading-[31px] text-[21px] py-8 px-8">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
        convallis pretium
      </div>
      <div className="flex justify-center  gap-4 pt-12 px-8">
        <input
          className="w-[627px] h-[75px] text-[#797979] font-[400] text-[21px] p-5 bg-[#F8F8F8] border-[1px] border-[#AFAFAF] rounded-[14px]"
          type="form"
          placeholder="Enter Your Email"
        />
        <button className="w-[222px] h-[75px] bg-[#FD6F00]  rounded-[14px] text-[24px] font-[600]  text-[#FFFFFF] dark:text-black">
          Contact Me
        </button>
      </div>
    </div>
  );
}

export default ContactMe;
