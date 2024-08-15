import { api } from "@/api/api";
import Properties from "@/components/Properties";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const FindPG = () => {
	const [city, setCity] = useState("");
	const [category, setCategory] = useState("");
	const [properties, setProperties] = useState([]);
	const [budget, setBudget] = useState("");

	const getProperties = async () => {
		try {
			const res = await axios.get(
				`${api}/properties/?city=${city}&category=${category}&budget=${budget}`
			);
			if (!res.data.success) {
				setProperties([]);
				return;
			}
			setProperties(res.data.properties);
		} catch (error) {
			console.log(error);
			setProperties([]);
			toast.error(error.response?.data?.message);
		} finally {
			setCategory("");
			setCity("");
		}
	};
	useEffect(() => {
		getProperties();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<section className='w-full py-12 md:py-24 lg:py-24 bg-gradient-to-r from-primary to-primary/80'>
				<div className='container px-4 md:px-6 mt-16 md:mt-28'>
					<h1 className='text-2xl font-bold my-4 text-muted'>
						Search Your Dream PG:
					</h1>
					<div className='bg-background rounded-lg shadow-lg p-4 md:p-6 grid grid-cols-4 gap-3'>
						<Input
							type='text'
							placeholder='Search by City'
							className='md:col-span-1 col-span-2'
							name={city}
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
						<div className='md:col-span-1 col-span-2'>
							<Select
								id='category'
								value={category}
								onValueChange={(value) => setCategory(value)}>
								<SelectTrigger>
									<SelectValue placeholder='Category' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='room'>Room</SelectItem>
									<SelectItem value='pg'>PG</SelectItem>
									<SelectItem value='flat'>Flat</SelectItem>
									<SelectItem value='house'>House</SelectItem>
									<SelectItem value='shared'>
										Shared
									</SelectItem>
									<SelectItem value='shop'>Shop</SelectItem>
									<SelectItem value='other'>Other</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className='md:col-span-1 col-span-2'>
							<Select
								id='budget'
								value={budget}
								onValueChange={(value) => setBudget(value)}>
								<SelectTrigger>
									<SelectValue placeholder='Budget' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='0-500000'>
										All
									</SelectItem>
									<SelectItem value='0-2500'>
										0 - 2500
									</SelectItem>
									<SelectItem value='2500-3500'>
										2500 - 3500
									</SelectItem>
									<SelectItem value='3500-5000'>
										3500 - 5000
									</SelectItem>
									<SelectItem value='5000-7000'>
										5000 - 7000
									</SelectItem>
									<SelectItem value='7000-10000'>
										7000 - 10000
									</SelectItem>
									<SelectItem value='10000-10000000'>
										10000+
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Button
							onClick={getProperties}
							className='md:col-span-1 col-span-2 bg-prime hover:bg-prime/80'>
							Search
						</Button>
					</div>
				</div>
			</section>
			<div>
				<Properties data={properties} />
			</div>
		</>
	);
};

export default FindPG;
