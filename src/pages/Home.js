import React from "react";
import Navbar from "../Components/Navbar";
import LocationBar from "../Components/LocationBar";
import Features from "../Components/Features";

import group from "../img/Group.svg";
import group1 from "../img/Group (1).svg";
import rating from "../img/rating.svg";
import OurServices from "../Components/OurServices";
import Numbers from "../Components/Numbers";
import Recomended from "../Components/Recomended";
import Footer from "../Components/Footer";
import Client from "../Components/Client";

const Home = () => {
	return (
		<div className="w-full">
			<Navbar />
			<LocationBar />
			<div className="w-5/6 m-auto">
				<div className="h-[20vh]"></div>

				{/* features */}
				<div className="w-max flex m-auto gap-[30px] h-[101px] mb-[74px]">
					<Features
						backGround={"0E63FF"}
						icon={rating}
						content={"100% Customer Satisfaction"}
					/>
					<Features
						backGround={"F72A75"}
						icon={group1}
						content={"Safer Roads is Our Mission"}
					/>
					<Features
						backGround={"10D0A1"}
						icon={group}
						content={"100% Best Quality service"}
					/>
				</div>
				{/* Our services */}
				<div className="w-[82%] m-auto  mb-[125px]">
					<OurServices />
				</div>
				<Numbers />
				<Recomended />
				<Client />
			</div>
			<div className="w-[95%] m-auto ">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
