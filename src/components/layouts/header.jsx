import Link from "next/link";

const Header = () => {
	return (
		<div className="max-w-6xl mx-auto px-4 py-6 flex justify-between">
			<h1>NovaCRM</h1>
			<ul className="flex gap-8">
				<li>
					<Link href={"/pricing"}>Pricing</Link>
				</li>
				<li>
					<Link href={"/features"}>Features</Link>
				</li>
				<li>
					<Link href={"/contact"}>Contact</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
