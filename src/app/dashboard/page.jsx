"use client";
import NovaBarChart from "@/components/charts/BarChart";
import TwoLevelPieChart from "@/components/charts/PieChart";
import departments from "@/data/departments";
import products from "@/data/products";

// #region Sample data
const countryPolulation = [
	{
		id: 1,
		name: "Bangladesh",
		population: 1800,
	},
	{
		id: 2,
		name: "Malaysia",
		population: 1400,
	},
	{
		id: 3,
		name: "Maldives",
		population: 400,
	},
	{
		id: 4,
		name: "Sigapore",
		population: 500,
	},
];

const DashboardPage = () => {
	return (
		<section className="">
			Dashboard
			<NovaBarChart data={countryPolulation} dataKey="population" />
			<NovaBarChart data={products} dataKey="price" />
			<h1>Departments wise Employees:</h1>
			<NovaBarChart data={departments} dataKey="employees" />
			<br />
			<TwoLevelPieChart />
		</section>
	);
};

export default DashboardPage;

// Package / Dependencies / Module
