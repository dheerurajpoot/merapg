import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Properties(data) {
	const [properties, setProperties] = useState([]);
	const [visibleProperties, setVisibleProperties] = useState(8);

	useEffect(() => {
		if (data.data) {
			setProperties(data?.data.reverse());
		}
	}, [data]);

	const handleLoadMore = () => {
		setVisibleProperties((prev) => prev + 4);
	};

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
					<>
						<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
							{properties
								.slice(0, visibleProperties)
								.map((property, index) => (
									<div
										key={index}
										className='group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl'>
										<Link
											to={`/property/${property?._id}`}
											className='absolute inset-0 z-10'>
											<span className='sr-only'>
												View Room
											</span>
										</Link>
										<img
											src={property?.images[0]}
											alt={property?.title}
											width={600}
											height={400}
											className='h-48 w-full object-cover transition-all group-hover:scale-105'
										/>
										<div className='space-y-2 p-4'>
											<h3 className='text-lg font-semibold'>
												{property?.title}
											</h3>
											<div className='flex items-center gap-1'>
												<FaMapMarkerAlt className='text-prime' />
												<p className='text-sm'>
													{property?.location}
												</p>
											</div>
											<div className='flex items-center justify-between'>
												<div className='text-sm text-muted-foreground capitalize'>
													<span className='font-medium'>
														Category:
													</span>{" "}
													{property?.category}
												</div>
												<div className='text-sm text-muted-foreground'>
													<span className='font-medium'>
														Area:
													</span>{" "}
													{property?.area} Ft
												</div>
											</div>
											<div className='flex items-center justify-between'>
												<div className='text-sm text-muted-foreground'>
													<span className='font-medium'>
														Rent:
													</span>{" "}
													{property?.rent}
												</div>
												<div className='text-sm text-muted-foreground'>
													<span className='font-medium'>
														Availability:
													</span>{" "}
													{property?.availability}
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
						{visibleProperties < properties.length && (
							<div className='flex justify-center mt-8'>
								<button
									onClick={handleLoadMore}
									className='px-6 py-2 text-white bg-prime rounded-lg shadow-md hover:bg-prime-dark transition'>
									Load More
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</section>
	);
}
