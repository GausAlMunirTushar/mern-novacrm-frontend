import { FaSearchengin } from "react-icons/fa6";

const Input = () => {
	return (
		<div className="flex items-center gap-2 bg-gray-100 border border-gray-200 px-4 rounded-xl">
			<FaSearchengin size={16} />
			<input className="focus:outline-none" type="text" />
		</div>
	);
};

export default Input;
