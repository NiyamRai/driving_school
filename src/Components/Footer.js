import React from "react";
import img from "../img/Group 7367.svg";
import img2 from "../img/PlayStore.svg";
import img3 from "../img/App Store.svg";

const Footer = () => {
	return (
		<div className="h-[1439px] ">
			<div
				className="h-[1049px]  border-b-0 border"
				style={{ boxShadow: "0px -4px 10px 0px #0000000F" }}>
				<div className="flex justify-center items-center h-[329px]  border-b">
					<div className="flex flex-col justify-between w-[1200px] h-[252px] mt-[44px] mb-[33px] ">
						<div>
							Upride is your ultimate destination for all things related to
							driving education and expertise. With our dedicated customer
							support line, +91-9380794998, we are committed to providing
							comprehensive and reliable information on driving schools,
							instructors, and road safety measures across India. Our services
							cater to a wide spectrum, including access to driving school
							details, appointment bookings, and informative resources on road
							safety guidelines. We curate data from various cities, including
							major hubs like Mumbai, Delhi, Bangalore, Hyderabad, Chennai,
							Ahmedabad, and Pune, as well as smaller towns across the nation.
						</div>
						<div>
							Through our 'Featured Listings,' we offer driving schools and
							instructors a platform to showcase their unique offerings. We
							ensure that you receive this information seamlessly through our
							website, app, and other digital platforms. Additionally, our
							'Review & Rating' feature empowers you to share your experiences
							and help others make informed decisions.
						</div>
						<div>
							With our 'Special Offers' and 'Real-time Quotes,' we strive to
							provide you with the best deals and latest updates in the driving
							education industry. Upride is committed to ensuring that you have
							the necessary resources to become a confident and responsible
							driver.
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center h-[232px] border-b">
					<div className="flex justify-start  items-start w-[1200px] h-[26px] mt-[20px] text-[20px] font-medium">
						Driving Schools in India
					</div>
					<div className="w-[1200px] h-[132px] mt-[20px] mb-[34px]">
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Bangalore | Driving Schools in Bangalore |
						Driving Schools in Pune
					</div>
				</div>
				<div className="flex justify-center items-start h-[159px] border-b">
					<div className="flex flex-col w-[1200px] ">
						<div className="w-[151px] h-[26px] text-[20px] mt-[33px] font-medium">
							B2B Categories
						</div>
						<div className="flex gap-[39px] mt-[20px]">
							<div className="flex items-center justify-center w-[187px] h-[44px] bg-[#D9D9D926] rounded-md text-[20px]">
								Driving Schools
							</div>
							<div className="w-[187px] h-[44px] bg-[#D9D9D926] rounded-md"></div>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="flex flex-col w-[1200px] ">
						<div className="text-[20px] font-medium mt-[18px]">
							Frequently Asked Question
						</div>
						<div className="mt-[14px]">
							<div className="font-medium">
								1. What are the various mode of payment accepted here?
							</div>
							<div>
								You can make payment Via Cash, Debit Cards, Cheques, Amex Card,
								Credit Card, UPI, Paytm, G Pay, PhonePe.
							</div>
						</div>
						<div className="mt-[14px]">
							<div className="font-medium">
								2. Which is the nearest landmark?
							</div>
							<div>
								You can easily locate the establishment as it is in close
								proximity to Near Hanuman Mandir and Shree Ji Dry Cleaner
							</div>
						</div>
						<div className="mt-[14px]">
							<div className="font-medium">
								3. What are its hours of operation?
							</div>
							<div className="flex mt-[11px] gap-[98px]">
								<div className="flex flex-col gap-3">
									<div className="">The establishment is functional on</div>
									<div className="flex flex-col">
										<div>Monday: Closed</div>
										<div>Tuesday: 6:00 Am - 8:30 pm </div>
										<div>Wednesday: 6:00 Am- 8:30 Pm</div>
									</div>
								</div>
								<div className="flex flex-col  justify-end ">
									<div>Friday: 6:00 Am - 8:30 pm</div>
									<div>Saturday: 6:00 Am-8:30 Pm</div>
									<div>Sunday: 6:00 Am - 8:30 pm</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center h-[390px]">
				<div className="flex gap-[283px] w-[1200px] h-[226px] ">
					<div className="flex flex-col w-[360px] ">
						<img src={img} alt="" className="w-[121px] h-[35px]" />
						<div className="text-[14px] mt-[19px]">
							Sometimes features require a short description. This can be
							detailed description or just a short text.
						</div>
						<div className="mt-[40px] text-[18px] font-medium">
							Download App
						</div>
						<div className="text-[12px]">Available on</div>
						<div className="flex gap-[19px] mt-[8px]">
							<img src={img2} alt="" className="h-[43px] w-[43px]" />
							<img src={img3} alt="" className="h-[43px] w-[43px]" />
						</div>
					</div>
					<div className="flex gap-[100px]">
						<div className="flex flex-col justify-between w-[115px]">
							<div className="test-[18px] font-semibold">Company</div>
							<div className="text-[14px] text-[#6E706E]">About Us</div>
							<div className="text-[14px] text-[#6E706E]">Testimonial</div>
							<div className="text-[14px] text-[#6E706E]">
								Terms of services
							</div>
							<div className="text-[14px] text-[#6E706E]">Privacy Policy</div>
							<div className="text-[14px] text-[#6E706E]">Investor</div>
						</div>
						<div className="flex flex-col justify-between w-[115px]">
							<div className="test-[18px] font-semibold">Services</div>
							<div className="text-[14px] text-[#6E706E]">Booking</div>
							<div className="text-[14px] text-[#6E706E]">Support Center </div>
							<div className="text-[14px] text-[#6E706E]">Blog</div>
							<div className="text-[14px] text-[#6E706E]">Review</div>
							<div className="text-[14px] text-[#6E706E]">Room</div>
						</div>
						<div className="flex flex-col justify-between w-[115px]">
							<div className="test-[18px] font-semibold">Resources</div>
							<div className="text-[14px] text-[#6E706E]">Help Center</div>
							<div className="text-[14px] text-[#6E706E]">Guide</div>
							<div className="text-[14px] text-[#6E706E]">Partner Network</div>
							<div className="text-[14px] text-[#6E706E]">FAQ's</div>
							<div className="text-[14px] text-[#6E706E]">Documentation</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
