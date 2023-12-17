import React from "react";
import locate from "../../../upride/src/img/locate.svg";
import { Card } from "./Card";
import card1 from "../img/Card1.svg";

const Recomended = () => {
  return (
    <div className="w-full h-full py-[75px] flex flex-col gap-[54px]">
      <div className=" flex flex-col gap-[25px]">
        <h1 className="text-[44px]">Recommended Driving Schools</h1>
        <div className="flex items-center w-full justify-between">
          <div className="text-xl text-[#696969]">
            These are upride Verified most recommended Driving Schools in
            Bengaluru
          </div>
          <div className="h-[35px] flex gap-[21px]">
            <button className="flex items-center gap-2 justify-center rounded-[40px] w-[125px] h-full bg-[#FF5757] text-white">
              <img src={locate} alt="" />
              Near Me
            </button>
            <button className="font-semibold w-[102px] h-full rounded-[40px] border">
              View All
            </button>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 w-full gap-x-[36px] gap-y-[85px]">
        <Card
          cardImage={card1}
          title={"SharpDrives Driving School- kerekodi"}
          location={"Kerekodi, Bengaluru"}
          rating={"4.8"}
          price={"2500"}
        />
        <Card
          cardImage={card1}
          title={"SharpDrives Driving School- kerekodi"}
          location={"Kerekodi, Bengaluru"}
          rating={"4.8"}
          price={"2500"}
        />
        <Card
          cardImage={card1}
          title={"SharpDrives Driving School- kerekodi"}
          location={"Kerekodi, Bengaluru"}
          rating={"4.8"}
          price={"2500"}
        />
        <Card
          cardImage={card1}
          title={"SharpDrives Driving School- kerekodi"}
          location={"Kerekodi, Bengaluru"}
          rating={"4.8"}
          price={"2500"}
        />
        <Card
          cardImage={card1}
          title={"SharpDrives Driving School- kerekodi"}
          location={"Kerekodi, Bengaluru"}
          rating={"4.8"}
          price={"2500"}
        />
        <Card
          cardImage={card1}
          title={"SharpDrives Driving School- kerekodi"}
          location={"Kerekodi, Bengaluru"}
          rating={"4.8"}
          price={"2500"}
        />
      </div>
    </div>
  );
};

export default Recomended;
