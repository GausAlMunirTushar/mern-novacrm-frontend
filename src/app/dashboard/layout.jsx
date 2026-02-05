import DashboardNavbar from "@/components/layouts/DashboardNavbar";

const DashboardLayout = ({ children }) => {
	return (
		<main className="flex">
			<section className="w-60 border-r min-h-screen">Sidebar</section>
			<section className="w-full">
				<div>
					<DashboardNavbar />
				</div>
				<div className="p-4">{children}</div>
			</section>
		</main>
	);
};

export default DashboardLayout;
