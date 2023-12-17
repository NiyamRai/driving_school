import React from "react";

const Features = ({ icon, content, backGround }) => {
  return (
    <div
      className="w-[261px] flex items-center justify-right gap-[20px] text-[14px] px-[20px] rounded-xl border-[1px] border-[#ECEEF3] h-full "
      style={{ boxShadow: "0px 4px 12px 0px rgb(0,0,0,0.1)" }}>
      <div className="relative flex items-center justify-center h-[51px] w-[44px] ">
        <svg
          width="44"
          height="51"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-[10%]">
          <polygon
            points="22,0 44,12.75 44,38.25 22,51 0,38.25 0,12.75"
            fill={`#${backGround}`}
          />
        </svg>
        <div className="px-[14px] py-[15px] h-full w-full flex absolute">
          <img src={icon} alt="" className="h-full w-full z-10  " />
        </div>
      </div>
      <h1>{content}</h1>
    </div>
  );
};

export default Features;
