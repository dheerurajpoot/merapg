import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogOverview = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='flex md:mt-20 flex-col items-center justify-center bg-background'>
				<article className='container mt-20 md:mt-2 py-12 md:px-6 lg:py-24 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8'>
					<div>
						<div className='prose prose-gray max-w-none px-6 dark:prose-invert'>
							<div className='space-y-4 mb-4'>
								<h1 className='text-2xl md:text-4xl font-bold tracking-tight lg:text-5xl'>
									Unlocking the Secrets to Finding the Perfect
									PG: A MeraPG Guide
								</h1>
								<div className='flex items-center gap-2 md:gap-4'>
									<div className='flex items-center gap-2 text-muted-foreground'>
										<Avatar className='w-8 h-8'>
											<AvatarImage src='/placeholder-user.jpg' />
											<AvatarFallback>DR</AvatarFallback>
										</Avatar>
										<div>Dheeru Rajpoot</div>
									</div>
									<div className='text-muted-foreground'>
										Published on July 30, 2024
									</div>
								</div>
							</div>
							<p>
								Finding the perfect PG (Paying Guest)
								accommodation can be a daunting task, especially
								in a bustling city like ours. But fear not,
								MeraPG is here to guide you through the process
								and help you unlock the secrets to finding your
								dream PG.
							</p>
							<h2>Understanding the PG Landscape</h2>
							<p>
								PGs, or Paying Guest accommodations, are a
								popular housing option for students, young
								professionals, and those new to the city. They
								offer a more affordable and flexible alternative
								to traditional rental apartments, with the added
								benefit of a built-in community.
							</p>
							<img
								src='/living.jpg'
								alt='PG Accommodation'
								width={800}
								height={450}
								className='rounded-lg object-cover'
							/>
							<h2>Factors to Consider</h2>
							<p>
								When searching for the perfect PG, there are
								several key factors to consider:
							</p>
							<ul>
								<li>
									Location: Proximity to your workplace,
									educational institution, or other important
									destinations
								</li>
								<li>
									Amenities: The availability of essential
									facilities like Wi-Fi, laundry, and common
									areas
								</li>
								<li>
									Pricing: Ensuring the rent fits within your
									budget
								</li>
								<li>
									Safety and Security: Evaluating the overall
									safety and security measures in place
								</li>
								<li>
									Roommate Compatibility: Considering the
									preferences and habits of your potential
									roommates
								</li>
							</ul>
							<h2>Navigating the PG Search</h2>
							<p>
								MeraPG makes the PG search process seamless by
								providing a comprehensive platform that connects
								you with a wide range of verified PG options.
								Our user-friendly interface allows you to filter
								and sort listings based on your specific
								requirements, making it easier to find the
								perfect fit.
							</p>
							<img
								src='/bedroom.jpg'
								alt='MeraPG Platform'
								width={800}
								height={450}
								className='rounded-lg object-cover'
							/>
							<h2>Conclusion</h2>
							<p>
								Finding the right PG can be a game-changer,
								providing you with a comfortable and affordable
								living environment that supports your personal
								and professional growth. With MeraPG, the
								process has never been easier. Start your search
								today and unlock the secrets to your perfect PG!
							</p>
						</div>
					</div>
					<div className='space-y-8'>
						<Card>
							<CardHeader>
								<CardTitle>Related Blog Posts</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-4'>
									<Link
										href='#'
										className='grid grid-cols-[48px_1fr] items-start gap-4'>
										<img
											src='/funiture.jpg'
											alt='Blog Post Image'
											width={48}
											height={48}
											className='rounded-md object-cover'
										/>
										<div>
											<div className='font-medium'>
												Navigating the Rental Market:
												Tips for First-Time Tenants
											</div>
											<div className='text-muted-foreground text-sm'>
												July 15, 2024
											</div>
										</div>
									</Link>
									<Link
										href='#'
										className='grid grid-cols-[48px_1fr] items-start gap-4'>
										<img
											src='/living.jpg'
											alt='Blog Post Image'
											width={48}
											height={48}
											className='rounded-md object-cover'
										/>
										<div>
											<div className='font-medium'>
												Maximizing Your PG Experience:
												Roommate Etiquette and Tips
											</div>
											<div className='text-muted-foreground text-sm'>
												June 30, 2024
											</div>
										</div>
									</Link>
									<Link
										href='#'
										className='grid grid-cols-[48px_1fr] items-start gap-4'>
										<img
											src='/bedroom.jpg'
											alt='Blog Post Image'
											width={48}
											height={48}
											className='rounded-md object-cover'
										/>
										<div>
											<div className='font-medium'>
												Budgeting for Your PG:
												Navigating Costs and Saving
												Strategies
											</div>
											<div className='text-muted-foreground text-sm'>
												June 15, 2024
											</div>
										</div>
									</Link>
								</div>
							</CardContent>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>About the Author</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='flex items-start gap-4'>
									<Avatar className='w-16 h-16'>
										<AvatarImage src='/placeholder-user.jpg' />
										<AvatarFallback>DR</AvatarFallback>
									</Avatar>
									<div>
										<div className='font-medium'>
											Dheeru Rajpoot
										</div>
										<div className='text-muted-foreground'>
											John is a content writer and editor
											at MeraPG, with a passion for
											helping people find their perfect PG
											accommodation.
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</article>
			</div>
		</>
	);
};

export default BlogOverview;
