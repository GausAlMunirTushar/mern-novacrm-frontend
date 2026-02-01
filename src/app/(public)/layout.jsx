import Header from "@/components/layouts/header";

const PublicLayout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
};

export default PublicLayout;
