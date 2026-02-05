import { BarChart, Bar } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #endregion
const NovaBarChart = ({ data, dataKey }) => {
	return (
		<BarChart
			style={{
				width: "100%",
				maxWidth: "300px",
				maxHeight: "500px",
				aspectRatio: 1.618,
			}}
			responsive
			data={data}
		>
			<Bar dataKey={dataKey} fill="#009699" />
			<RechartsDevtools />
		</BarChart>
	);
};

export default NovaBarChart;
