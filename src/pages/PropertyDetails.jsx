import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { api } from "@/api/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const PropertyDetails = () => {
	const [property, setProperty] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");
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

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const openModal = (image) => {
		setSelectedImage(image);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedImage("");
	};

	return (
		<>
			<div className='bg-background text-foreground'>
				<section className='relative md:pt-40 pt-32 overflow-hidden'>
					<div className='flex flex-col items-center justify-center gap-4 px-4 text-center'>
						<h1 className='text-3xl font-bold sm:text-5xl capitalize'>
							{property?.title}
						</h1>
						<p className='text-lg'>Address: {property?.location}</p>
						<h4 className='text-lg font-semibold'>Description</h4>
						<p className=''>{property?.description}</p>
					</div>
				</section>
				<div className='container py-12 sm:py-16 md:py-20'>
					<div className='grid gap-8 md:grid-cols-[1fr_300px]'>
						<div className='grid gap-8'>
							<section className='border rounded-lg p-6'>
								<h2 className='mb-2 text-2xl font-bold'>
									Property Details
								</h2>
								<div className='grid gap-4 grid-cols-2'>
									<div className='grid gap-1 capitalize'>
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
									<div className='grid gap-1 capitalize'>
										<p className='text-sm font-medium text-muted-foreground'>
											Services
										</p>
										<p>{property?.services}</p>
									</div>
									<div className='grid gap-1'>
										<p className='text-sm font-medium text-muted-foreground'>
											Availability
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
										<div
											key={index}
											className='relative overflow-hidden rounded-lg cursor-pointer'
											onClick={() => openModal(image)}>
											<img
												src={image}
												alt={property?.title}
												className='w-full object-cover transition-all duration-300 group-hover:scale-105'
											/>
										</div>
									))}
								</div>
							</section>
						</div>
						<div className='flex flex-col gap-5'>
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
										<div className='grid gap-1 capitalize'>
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

			{isModalOpen && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
					<div className='relative'>
						<img
							src={selectedImage}
							alt='Preview'
							className='max-w-full max-h-full object-cover rounded-lg'
						/>
						<button
							onClick={closeModal}
							className='absolute top-4 right-4 text-white text-2xl'>
							<AiOutlineClose />
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default PropertyDetails;
