import React from "react";
import { useQuery } from "react-query";
import { FadeLoader } from "react-spinners";
import LineGraph from "./LineGraph";
import { Maps } from "./Maps";

// Function to fetch historical data
const fetchHistoricalData = async () => {
	const response = await fetch(
		"https://disease.sh/v3/covid-19/historical/all?lastdays=all"
	);
	return response.json();
};

// Function to fetch countries data
const fetchCountriesData = async () => {
	const response = await fetch("https://disease.sh/v3/covid-19/countries");
	return response.json();
};

const Dashboard: React.FC = () => {
	// Query for fetching historical data
	const historicalDataQuery = useQuery("historicalData", fetchHistoricalData);

	// Query for fetching countries data
	const countriesDataQuery = useQuery("countriesData", fetchCountriesData);

	if (historicalDataQuery.isLoading || countriesDataQuery.isLoading) {
		// Display a loading spinner if data is still loading
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}>
				<FadeLoader color="#131313" />
			</div>
		);
	}

	if (historicalDataQuery.isError || countriesDataQuery.isError) {
		// Display an error message if there was an error fetching the data
		return <div>Error fetching data</div>;
	}

	return (
		<div className="flex flex-col h-screen">
			<div className="flex-grow">
				{/* Render the LineGraph component and pass the historical data as prop */}
				<LineGraph data={historicalDataQuery.data?.cases || {}} />
			</div>
			<div className="flex-grow">
				{/* Render the Maps component and pass the countries data as markers prop */}
				<Maps markers={countriesDataQuery.data || []} />
			</div>
		</div>
	);
};

export default Dashboard;
