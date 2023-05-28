import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  return (
		<div className="w-2/5 md:w-1/5 bg-[#131313] h-screen flex flex-col flex-wrap overflow-hidden">
			<div className="py-4 px-2 text-white text-center fixed w-1/5 mt-8">
				<h1 className="text-md md:text-xl lg:text-2xl font-bold  md:shrink-0">
					Management App
				</h1>{" "}
				{/* Sidebar heading */}
			</div>
			<div className="mt-28">
				<ul className="text-white text-center">
					<li className="my-6 text-xl">
						<Link
							to="/"
							className="flex text-md md:text-xl lg:text-2xl items-center justify-center">
							<FontAwesomeIcon
								icon={faChartBar}
								className="mr-2 mb-1"
							/>{" "}
							{/* Icon for Dashboard */}
							Dashboard {/* Link to the dashboard */}
						</Link>
					</li>
					<li className="my-6 text-xl">
						<Link
							to="/contacts"
							className="flex text-sm md:text-lg lg:text-xl items-center justify-center">
							<FontAwesomeIcon
								icon={faAddressBook}
								className="mr-2 mb-1"
							/>{" "}
							{/* Icon for Contact List */}
							Contact List {/* Link to the contact list */}
						</Link>
					</li>
				</ul>
			</div>
		</div>
  );
};

export default Sidebar;
