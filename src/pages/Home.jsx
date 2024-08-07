import { api } from "@/api/api";
import Newsletter from "@/components/Newsletter";
import Properties from "@/components/Properties";
import Sortabout from "@/components/Sortabout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const Home = () => {
	const [city, setCity] = useState("");
	const [category, setCategory] = useState("");
	const [budget, setBudget] = useState("");
	const [properties, setProperties] = useState([]);

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

	return (
		<>
			<div>
				<section className='w-full py-12 md:py-24 lg:py-24 bg-gradient-to-r from-primary to-primary/80'>
					<div className='container grid items-center gap-6 mt-16 md:mt-20 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
						<div className='flex flex-col justify-center space-y-4'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none'>
									Find Your Perfect Property
								</h1>
								<p className='max-w-[600px] text-primary-foreground/90 md:text-xl'>
									Discover your dream home with MeraPG's
									comprehensive real estate search.
								</p>
							</div>
						</div>
						<div className='relative'>
							<Carousel
								opts={{
									align: "center",
									loop: true,
									autoplay: true,
									interval: 500,
								}}
								className='rounded-xl overflow-hidden'>
								<CarouselContent>
									<CarouselItem>
										<img
											src='./funiture.jpg'
											width='550'
											height='550'
											alt='Hero'
											className='aspect-video object-cover'
										/>
									</CarouselItem>
									<CarouselItem>
										<img
											src='./living.jpg'
											width='550'
											height='550'
											alt='Hero'
											className='aspect-video object-cover'
										/>
									</CarouselItem>
									<CarouselItem>
										<img
											src='./bedroom.jpg'
											width='550'
											height='550'
											alt='Hero'
											className='aspect-video object-cover'
										/>
									</CarouselItem>
								</CarouselContent>
							</Carousel>
						</div>
					</div>
					<div className='container px-4 md:px-6 mt-8'>
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
									onValueChange={(value) =>
										setCategory(value)
									}>
									<SelectTrigger>
										<SelectValue placeholder='Category' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='room'>
											Room
										</SelectItem>
										<SelectItem value='pg'>PG</SelectItem>
										<SelectItem value='flat'>
											Flat
										</SelectItem>
										<SelectItem value='house'>
											House
										</SelectItem>
										<SelectItem value='shared'>
											Shared
										</SelectItem>
										<SelectItem value='shop'>
											Shop
										</SelectItem>
										<SelectItem value='other'>
											Other
										</SelectItem>
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
