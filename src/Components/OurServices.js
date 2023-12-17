import React from "react";
import photo from "../img/Photo.svg";
import car from "../img/car.svg";
import instructor from "../img/Instructor.svg";
import service from "../img/Customer Service Icon.svg";
import near_me from "../img/fi_887251.svg";

const OurServices = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-[992px] w-full  gap-[80px] ">
      <div className="flex flex-col justify-center items-center gap-[16px]   ">
        <div
          className=" text-[#FF5757] uppercase"
          style={{ letterSpacing: "26%", fontSize: "16px" }}>
          Our Service
        </div>
        <div className="text-[36px] font-semibold">How can we help you?</div>
      </div>
      <div
        className="w-full h-[824px] flex flex-col gap-[72px] py-[63px]"
        style={{
          boxShadow: "5px 8px 30px 0px rgb(0,0,0,0.1)",
          borderRadius: "10px",
        }}>
        <div className="w-full px-[70px] flex flex-col gap-[52px] ">
          <div className="  m-auto px-[75px] w-full">
            <div className=" flex justify-between items-center w-full min-w-max">
              <div className=" text-center gap-[20px] flex flex-col">
                <img src={car} alt="" className="h-[88px] w-[88px]" />
                <span className="font-semibold text-[#FD5444] ">
                  Driving <br />
                  Schools
                </span>
              </div>
              <div className=" text-center gap-[20px] flex flex-col opacity-50 items-center">
                <img src={instructor} alt="" className="h-[80px] w-[80px]" />
                <span className="font-semibold text-[#4E4E4E] ">
                  Book Driving <br /> Instructors
                </span>
              </div>
              <div className=" text-center gap-[20px] flex flex-col opacity-50 items-center">
                <img src={service} alt="" className="h-[80px] w-[80px]" />
                <span className="font-semibold text-[#4E4E4E] ">
                  International Driver’s <br /> License Consultation
                </span>
              </div>
              <div className=" text-center gap-[20px] flex flex-col opacity-50 items-center">
                <img src={near_me} alt="" className="h-[80px] w-[80px]" />
                <span className="font-semibold text-[#4E4E4E] ">
                  Car/Bike Wash <br /> Near Me
                </span>
              </div>
            </div>
          </div>
          <div className=" flex items-center ">
            <div className="border-b-[2px] w-full  border-[#FD5444]  "></div>
            <div className="border-b-[2px] w-full border-[#4E4E4E]  opacity-10"></div>
            <div className="border-b-[2px] w-full border-[#4E4E4E]  opacity-10"></div>
            <div className="border-b-[2px] w-full border-[#4E4E4E]  opacity-10"></div>
          </div>
        </div>
        <div className="flex gap-[48px]  px-[62px] h-max">
          <div className=" w-full h-full flex flex-col gap-[40px]">
            <div className="text-[36px] font-bold ">
              Top Rated Driving Schools Nearby
            </div>
            <div className=" flex flex-col gap-[20px]">
              <div className="text-[16px]">
                Discover the convenience of finding highly-rated driving schools
                near you with Upride. Whether you're eager to get your driver's
                license or seeking professional training to sharpen your driving
                skills, Upride simplifies your search. Just click on "near me"
                in our search bar and instantly connect with the best driving
                schools near you.
              </div>
              <div className="text-[16px] font-semibold text-[#FD5444]">
                Book Now
              </div>
            </div>
          </div>
          <img src={photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
