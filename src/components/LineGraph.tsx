import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

interface LineGraphProps {
	data: { [date: string]: number };
}

const LineGraph: React.FC<LineGraphProps> = ({ data }) => {
	// Convert the data object into an array of { date, cases } objects
	const chartData = Object.entries(data).map(([date, cases]) => ({
		date,
		cases,
	}));

	// Function to format the Y-axis tick labels
	const formatYAxisTick = (value: number) => {
		return value.toLocaleString();
	};

	return (
		<div className="w-full max-w-4xl bg-white rounded-lg shadow-lg px-2 pb-4 pt-8 my-6 mx-auto">
			<div className="flex justify-center">
				<LineChart
					width={850}
					height={300}
					data={chartData}
					margin={{ top: 20, right: 20, bottom: 20, left: 40 }}>
					{/* Render the CartesianGrid component to display grid lines */}
					<CartesianGrid strokeDasharray="3 3" />
					{/* Render the X-axis */}
					<XAxis dataKey="date" />
					{/* Render the Y-axis with formatted tick labels */}
					<YAxis tickFormatter={formatYAxisTick} />
					{/* Render a tooltip to display data on hover */}
					<Tooltip />
					{/* Render a legend */}
					<Legend />
					{/* Render a line chart */}
					<Line type="monotone" dataKey="cases" stroke="#3498db" />
				</LineChart>
			</div>
			{/* Display a text indicating the purpose of the chart */}
			<p className="text-center pt-4 text-gray-600 text-xl">
				Cases Fluctuations
			</p>
		</div>
	);
};

export default LineGraph;
