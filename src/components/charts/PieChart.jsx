import { Pie, PieChart, Tooltip, TooltipIndex } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data
const country = [
	{ name: "Bangladesh", value: 400 },
	{ name: "Malaysia", value: 300 },
	{ name: "Maldives", value: 300 },
	{ name: "Singapore", value: 200 },
];

// #endregion
export default function TwoLevelPieChart({
	isAnimationActive = true,
	defaultIndex,
}) {
	return (
		<PieChart
			style={{
				width: "100%",
				height: "100%",
				maxWidth: "500px",
				maxHeight: "80vh",
				aspectRatio: 1,
			}}
			responsive
		>
			<Pie
				data={country}
				dataKey="value"
				cx="50%"
				cy="50%"
				outerRadius="50%"
				fill="#009699"
				isAnimationActive={isAnimationActive}
			/>
			<Tooltip defaultIndex={defaultIndex} />
			<RechartsDevtools />
		</PieChart>
	);
}
