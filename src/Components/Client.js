import React from "react";
import p4 from "../img/Person.svg";
import dot from "../img/Dot.svg";

const Client = () => {
	return (
		<div className="flex flex-col w-[1280px]  h-[747px] ">
			<div className="mt-[80px] mx-[80px] text-[44px] font-semibold capitalize">
				what our clients say
			</div>
			<div className="mt-[31px] mx-[80px] text-[14px] ">
				Quality training and easy to get driving license
			</div>
			<div className="w-[1280px] h-[309px] mt-[46px]">
				<img src={p4} alt="" className="w-full object-fill" />
			</div>
			<div className="flex justify-center mt-[94px]">
				<img src={dot} alt="" />
			</div>
		</div>
	);
};

export default Client;
