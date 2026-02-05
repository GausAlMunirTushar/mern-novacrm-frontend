import Avatar from "../ui/Avatar";
import Input from "../ui/Input";

const DashboardNavbar = () => {
	return (
		<div className="flex justify-between p-3 h-20 border-b">
			<Input />
			<Avatar />
		</div>
	);
};

export default DashboardNavbar;
