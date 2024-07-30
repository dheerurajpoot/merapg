import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Properties from "@/components/Properties";
import Sortabout from "@/components/Sortabout";
import React from "react";

const Home = () => {
	return (
		<>
			<div>
				<Hero />
			</div>
			<div>
				<Properties />
			</div>
			<hr />
			<div className='my-10'>
				<Sortabout />
			</div>
			<hr />
			<div className='my-10'>
				<Newsletter />
			</div>
		</>
	);
};

export default Home;
