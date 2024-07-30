import React from "react";
import { Button } from "./ui/button";

const Sortabout = () => {
	return (
		<>
			<div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center'>
					<div className='lg:col-span-3'>
						<h1 className='block text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl lg:text-5xl'>
							Best Place To Find The Perfect Property
						</h1>
						<p className='my-5 text-lg text-gray-800'>
							At MeraPG, we're on a mission to revolutionize the
							way you find accommodation. No more dealing with
							slimy brokers or overpriced rentals. We're here to
							make your search for the perfect PG or hostel as
							smooth as butter
						</p>
						<Button className='flex-none my-4 bg-prime hover:bg-prime/80'>
							Read more
						</Button>
					</div>

					<div className='lg:col-span-4 mt-10 lg:mt-0'>
						<img
							className='w-full rounded-xl'
							src='https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80'
							alt='Hero Image'
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sortabout;
