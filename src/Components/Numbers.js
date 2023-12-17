import React from "react";

const Numbers = () => {
  return (
    <div className="w-full flex flex-col items-center gap-[75px]">
      <h1 className="w-[73%] text-4xl font-medium text-center">
        Why Choose <span className="font-bold">Upride</span> as your choice for
        a comprehensive driving learning experience?
      </h1>

      <div className="flex justify-between w-full ">
        <div className="flex flex-col items-center gap-[16px]">
          <div className="text-center text-5xl font-extrabold flex flex-col items-center gap-1">
            <span className="text-white bg-[#FF5757] rounded-[10px] p-1">
              1000+
            </span>
            <span>Trained</span>
          </div>
          <div className="text-[#4E4E4E]">througn Upride</div>
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <div className="text-center text-5xl font-extrabold flex flex-col items-center gap-1">
            <span className="text-white bg-[#2EC2B8] rounded-[10px] p-1">
              90%
            </span>
            <span>Rating</span>
          </div>
          <div className="text-[#4E4E4E]">Customer satisfaction</div>
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <div className="text-center text-5xl font-extrabold flex flex-col items-center gap-1">
            <span className="text-white bg-[#FFDC6B] rounded-[10px] p-1">
              60
            </span>
            <span>Minutes</span>
          </div>
          <div className="text-[#4E4E4E]">per Session</div>
        </div>
        <div className="flex flex-col items-center gap-[16px]">
          <div className="text-center text-5xl font-extrabold flex flex-col items-center gap-1">
            <span className="text-white bg-[#FF5757] rounded-[10px] p-1">
              150+
            </span>
            <span>Reviews</span>
          </div>
          <div className="text-[#4E4E4E]">Five-star rated in Google</div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
