import React from "react";
import star from "../img/Star.svg";
import rupees from "../img/Rupees.svg";

export const Card = ({ cardImage, title, location, rating, price }) => {
  return (
    <div
      className="h-[596px]  flex flex-col bg-white shadow-lg"
      style={{
        boxShadow: "0px 4px 30px 4px rgb(0,0,0,0.2)",
      }}>
      <img
        src={cardImage}
        alt=""
        className="w-full object-cover h-[315px] rounded-t-[20px]"
      />
      <div className="flex flex-col justify-between px-[21px] pt-[17px] h-full pb-[51px]">
        <div className="flex flex-col gap-[5px]">
          <h1 className="text-2xl font-medium">{title}</h1>
          <h3 className="text-[#7A7A7A]">{location}</h3>
        </div>
        <div className="flex justify-between  h-[36px]">
          <div
            className="w-[95px] h-full flex items-center gap-[15px] justify-center rounded-[30px] "
            style={{
              boxShadow: "0px 4px 50px 4px rgb(0,0,0,0.2)",
            }}>
            <img
              src={star}
              alt=""
              className=" h-[20px] w-[20px] object-cover"
            />
            <span className="text-xl font-medium">{rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={rupees} alt="" />
            <span className="text-xl text-[#ed466a] ">{price + "/"}</span>
            <span className="text-xs text-[#696969]">Starting from</span>
          </div>
        </div>
      </div>
    </div>
  );
};
