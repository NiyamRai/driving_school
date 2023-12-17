import React from "react";
import service from "../img/Service.svg";

const Service = () => {
  return (
    <div>
      <div className="  flex-col gap-[25px] hidden">
        <h1 className="text-[44px]">Recommended Driving Schools</h1>
        <div className="flex items-center w-full justify-between">
          <div className="text-xl text-[#696969]">
            These are upride Verified most recommended Driving Schools in
            Bengaluru
          </div>
          <div className="h-[35px] flex gap-[21px]">
            <button className="flex items-center gap-2 justify-center rounded-[40px] w-[125px] h-full bg-[#FF5757] text-white">
              {/* <img src={locate} alt="" /> */}
              Near Me
            </button>
            <button className="font-semibold w-[102px] h-full rounded-[40px] border">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 w-full gap-x-[36px] gap-y-[85px]"></div>
      <img src={service} alt="" />
    </div>
  );
};

export default Service;
