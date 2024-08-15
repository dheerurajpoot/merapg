import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='w-full'>
				<section className='bg-primary text-primary-foreground pt-32 pb-12 md:pt-40 md:pb-12'>
					<div className='container mx-auto px-4 md:px-6 max-w-4xl text-center'>
						<h1 className='text-3xl md:text-5xl font-bold mb-4'>
							Discover the Latest in Room and PG Rentals
						</h1>
						<p className='text-lg md:text-xl mb-8'>
							Stay up-to-date with our blog posts covering tips,
							advice, and industry insights for renters and
							landlords.
						</p>
					</div>
				</section>
				<section className='py-12 md:py-20'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<article className='bg-card p-4 rounded-lg shadow-md'>
								<img
									src='/bedroom.jpg'
									alt='Blog Post Image'
									width={600}
									height={400}
									className='rounded-lg mb-4 object-cover w-full h-48'
								/>
								<h2 className='text-xl font-bold mb-2'>
									Tips for Finding the Perfect Room or PG
								</h2>
								<p className='text-muted-foreground mb-4'>
									Discover the key factors to consider when
									searching for your ideal room or PG rental.
								</p>
								<Link
									to={`/blog/${1}`}
									className='inline-flex items-center text-prime hover:underline'>
									Read More
									<FaArrowRightLong className='ml-1 w-4 h-4' />
								</Link>
							</article>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Blogs;
