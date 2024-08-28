import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Properties(data) {
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		if (data.data) {
			setProperties(data?.data.reverse());
		}
	}, [data]);

	return (
		<section className='w-full py-8 md:py-12 lg:py-16'>
			<div className='container grid gap-3 px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Explore Our Available Rooms
						</h2>
						<p className='max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Browse through our selection of comfortable and
							affordable rooms to find the perfect fit for your
							needs.
						</p>
					</div>
				</div>
				{properties.length === 0 ? (
					<p className='text-center text-lg font-semibold text-prime'>
						No properties found!
					</p>
				) : (
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						{properties.map((room, index) => (
							<div
								key={index}
								className='group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl'>
								<Link
									to={`/property/${room._id}`}
									className='absolute inset-0 z-10'>
									<span className='sr-only'>View Room</span>
								</Link>
								<img
									src={room?.thumbnail}
									alt={room?.title}
									width={600}
									height={400}
									className='h-48 w-full object-cover transition-all group-hover:scale-105'
								/>
								<div className='space-y-2 p-4'>
									<h3 className='text-lg font-semibold'>
										{room.title}
									</h3>
									<div className='flex items-center gap-1'>
										<FaMapMarkerAlt className='text-prime' />
										<p className='text-sm'>
											{room.location}
										</p>
									</div>
									<div className='flex items-center justify-between'>
										<div className='text-sm text-muted-foreground capitalize'>
											<span className='font-medium'>
												Category:
											</span>{" "}
											{room.category}
										</div>
										<div className='text-sm text-muted-foreground'>
											<span className='font-medium'>
												Area:
											</span>{" "}
											{room.area} Ft
										</div>
									</div>
									<div className='flex items-center justify-between'>
										<div className='text-sm text-muted-foreground'>
											<span className='font-medium'>
												Rent:
											</span>{" "}
											{room.rent}
										</div>
										<div className='text-sm text-muted-foreground'>
											<span className='font-medium'>
												Availability:
											</span>{" "}
											{room.availability}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
