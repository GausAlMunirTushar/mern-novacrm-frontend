import Image from "next/image";

const Hero = () => {
	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-center text-3xl text-cyan-500">
				Increase your productivity
			</h1>
			<h2>Customer relationship simplified</h2>
			<p>
				With seamless integrations, power analytics, and advanced
				marketing tools, you can take your business to the next level
				and create sustainable growth with NovaCRM
			</p>
			<Image src={"/hero.png"} width={500} height={500} alt="hero" />
		</div>
	);
};

export default Hero;
