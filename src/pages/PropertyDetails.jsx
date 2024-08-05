import { api } from "@/api/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const PropertyDetails = () => {
	const [property, setProperty] = useState({});
	const location = useLocation();
	const pId = location.pathname.split("/")[2];

	const getProperty = async () => {
		try {
			const res = await axios.get(`${api}/properties/${pId}`, {
				withCredentials: true,
			});
			if (res.data.success) {
				setProperty(res?.data?.property);
			}
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
		}
	};
	useEffect(() => {
		getProperty();
	}, [pId]);
	return (
		<>
			<div className='bg-background text-foreground'>
				<section className='relative h-[480px] overflow-hidden'>
					<img
						src={property?.thumbnail}
						alt={property?.title}
						width={1920}
						height={1080}
						className='h-full w-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-background/80 to-background/0' />
					<div className='absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center'>
						<h1 className='text-3xl font-bold sm:text-5xl'>
							{property?.title}
						</h1>
						<p className='text-lg'>Address: {property?.location}</p>
					</div>
				</section>
				<div className='container py-12 sm:py-16 md:py-20'>
					<div className='grid gap-8 md:grid-cols-[1fr_300px]'>
						<div className='grid gap-8'>
							<section>
								<h2 className='mb-2 text-2xl font-bold'>
									Property Details
								</h2>
								<h4 className='text-lg font-semibold'>
									Description
								</h4>
								<p className='mb-6'>{property?.description}</p>
								<div className='grid gap-4 grid-cols-2'>
									<div className='grid gap-1'>
										<p className='text-sm font-medium text-muted-foreground'>
											Type
										</p>
										<p>{property?.category}</p>
									</div>
									<div className='grid gap-1'>
										<p className='text-sm font-medium text-muted-foreground'>
											Area
										</p>
										<p>{property?.area} ft</p>
									</div>
									<div className='grid gap-1'>
										<p className='text-sm font-medium text-muted-foreground'>
											Services
										</p>
										<p>{property?.services}</p>
									</div>
									<div className='grid gap-1'>
										<p className='text-sm font-medium text-muted-foreground'>
											Availbility
										</p>
										<p>{property?.availability}</p>
									</div>
								</div>
							</section>
							<section>
								<h2 className='mb-4 text-2xl font-bold'>
									Gallery
								</h2>
								<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
									{property?.images?.map((image, index) => (
										<Link
											to='#'
											key={index}
											className='relative overflow-hidden rounded-lg'>
											<img
												src={image}
												alt={property?.title}
												width={300}
												height={300}
												className='h-full w-full object-cover transition-all duration-300 group-hover:scale-105'
											/>
										</Link>
									))}
								</div>
							</section>
						</div>
						<div className='grid gap-8'>
							<Card>
								<CardHeader>
									<CardTitle>Pricing</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='grid grid-cols-2'>
										<p className='text-lg font-medium text-muted-foreground'>
											Rent:
										</p>
										<p className='text-2xl font-bold'>
											₹{property?.rent}
										</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Contact Owner</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='grid gap-4 grid-cols-2 justify-center'>
										<div className='grid gap-1'>
											<p className='text-md font-medium text-muted-foreground'>
												Owner Name
											</p>
											<p>{property?.ownerName}</p>
										</div>
										<div className='grid gap-1'>
											<p className='text-md font-medium text-muted-foreground'>
												Owner Contact
											</p>
											<p>{property?.ownerContact}</p>
										</div>
									</div>
								</CardContent>
							</Card>
							<Link
								target='_blank'
								to={`https://wa.me/${property?.ownerContact}`}>
								<Button
									size='lg'
									className='w-full bg-prime hover:bg-prime/90'>
									<FaWhatsapp className='mr-2 h-7 w-7' />
									Chat with Owner
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PropertyDetails;
