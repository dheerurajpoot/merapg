import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
	return (
		<>
			<div className='bg-background text-foreground'>
				<section className='relative h-[480px] overflow-hidden'>
					<img
						src='/bedroom.jpg'
						alt='Property Image'
						width={1920}
						height={1080}
						className='h-full w-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-background/80 to-background/0' />
					<div className='absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center'>
						<h1 className='text-3xl font-bold sm:text-5xl'>
							Cozy 2BHK PG in Noida
						</h1>
						<p className='text-muted-foreground'>
							Address: Sector 62, Noida, Uttar Pradesh
						</p>
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
								<p className='mb-6'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Cum sequi quo a provident,
									laudantium magnam autem adipisci alias
									repellendus accusamus impedit minima ea
									corrupti iure cumque id totam eligendi.
									Officiis.
								</p>
								<div className='grid gap-4 grid-cols-2'>
									<div className='grid gap-1'>
										<p className='text-sm font-medium text-muted-foreground'>
											Type
										</p>
										<p>2BHK Paying Guest</p>
									</div>
									<div className='grid gap-1'>
										<p className='text-sm font-medium text-muted-foreground'>
											Area
										</p>
										<p>800 sq ft</p>
									</div>
									<div className='grid gap-1'>
										<p className='text-sm font-medium text-muted-foreground'>
											Services
										</p>
										<p>WiFi</p>
									</div>
									<div className='grid gap-1'>
										<p className='text-sm font-medium text-muted-foreground'>
											Availbility
										</p>
										<p>2</p>
									</div>
								</div>
							</section>
							<section>
								<h2 className='mb-4 text-2xl font-bold'>
									Gallery
								</h2>
								<div className='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'>
									<Link
										href='#'
										className='relative aspect-square overflow-hidden rounded-lg'>
										<img
											src='/bedroom.jpg'
											alt='Gallery Image'
											width={300}
											height={300}
											className='h-full w-full object-cover transition-all duration-300 group-hover:scale-105'
										/>
									</Link>
									<Link
										href='#'
										className='relative aspect-square overflow-hidden rounded-lg'>
										<img
											src='/living.jpg'
											alt='Gallery Image'
											width={300}
											height={300}
											className='h-full w-full object-cover transition-all duration-300 group-hover:scale-105'
										/>
									</Link>
									<Link
										href='#'
										className='relative aspect-square overflow-hidden rounded-lg'>
										<img
											src='/funiture.jpg'
											alt='Gallery Image'
											width={300}
											height={300}
											className='h-full w-full object-cover transition-all duration-300 group-hover:scale-105'
										/>
									</Link>
									<Link
										href='#'
										className='relative aspect-square overflow-hidden rounded-lg'>
										<img
											src='/bedroom.jpg'
											alt='Gallery Image'
											width={300}
											height={300}
											className='h-full w-full object-cover transition-all duration-300 group-hover:scale-105'
										/>
									</Link>
									<Link
										href='#'
										className='relative aspect-square overflow-hidden rounded-lg'>
										<img
											src='/living.jpg'
											alt='Gallery Image'
											width={300}
											height={300}
											className='h-full w-full object-cover transition-all duration-300 group-hover:scale-105'
										/>
									</Link>
									<Link
										href='#'
										className='relative aspect-square overflow-hidden rounded-lg'>
										<img
											src='/funiture.jpg'
											alt='Gallery Image'
											width={300}
											height={300}
											className='h-full w-full object-cover transition-all duration-300 group-hover:scale-105'
										/>
									</Link>
								</div>
							</section>
						</div>
						<div className='grid gap-8'>
							<Card>
								<CardHeader>
									<CardTitle>Pricing</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='grid gap-4'>
										<p className='text-sm font-medium text-muted-foreground'>
											Rent
										</p>
										<p className='text-2xl font-bold'>
											₹15,000
										</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<CardTitle>Contact Owner</CardTitle>
								</CardHeader>
								<CardContent>
									<form className='grid gap-4'>
										<Input
											type='text'
											placeholder='Your Name'
											className='w-full'
										/>
										<Input
											type='email'
											placeholder='Your Email'
											className='w-full'
										/>
										<Textarea
											placeholder='Your Message'
											className='w-full'
											rows={4}
										/>
										<Button
											type='submit'
											className='w-full bg-prime hover:bg-prime/90'>
											Send Message
										</Button>
									</form>
								</CardContent>
							</Card>
							<Button
								size='lg'
								className='w-full bg-prime hover:bg-prime/90'>
								Book Now
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PropertyDetails;
