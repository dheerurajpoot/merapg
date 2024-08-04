import { api } from "@/api/api";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Properties from "@/components/Properties";
import Sortabout from "@/components/Sortabout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
	const [city, setCity] = useState("");
	const [properties, setProperties] = useState([]);

	const getProperties = async () => {
		try {
			const res = await axios.get(`${api}/properties/?city=${city}`);
			if (!res.data.success) return;
			setProperties(res.data.properties);
		} catch (error) {
			console.log(error);
			toast.error(error.response?.data?.message);
		}
	};

	useEffect(() => {
		getProperties();
	}, [city]);

	return (
		<>
			<div>
				<Hero />
			</div>
			<div>
				<Properties data={properties} />
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
