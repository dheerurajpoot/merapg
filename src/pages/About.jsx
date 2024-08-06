import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<div className='flex flex-col mt-20 min-h-[100dvh]'>
				<main className='flex-1'>
					<section className='w-full py-10 md:py-20 lg:py-24'>
						<div className='container px-4 md:px-6'>
							<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
								<div className='flex flex-col justify-center space-y-4'>
									<div className='space-y-2'>
										<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
											Discover Your Perfect PG with MeraPG
										</h1>
										<p className='max-w-[600px] text-muted-foreground md:text-xl'>
											MeraPG is a leading platform that
											connects students and professionals
											with verified and affordable PG
											accommodations. Our mission is to
											make finding a safe and comfortable
											living space easy and hassle-free.
										</p>
									</div>
									<div className='flex flex-col gap-2 min-[400px]:flex-row'>
										<Link
											to='/'
											className='inline-flex h-10 items-center justify-center rounded-md bg-prime px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-prime/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
											Explore PGs
										</Link>
										<Link
											to='/addproperty'
											className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
											List Your PG
										</Link>
									</div>
								</div>
								<img
									src='/bedroom.jpg'
									width='550'
									height='550'
									alt='Hero'
									className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
								/>
							</div>
						</div>
					</section>
					<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
						<div className='container px-4 md:px-6'>
							<div className='flex flex-col items-center justify-center space-y-4 text-center'>
								<div className='space-y-2'>
									<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
										Our Mission
									</div>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
										Empowering Renters and Landlords
									</h2>
									<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										At MeraPG, we believe in creating a
										seamless and transparent rental
										experience for everyone. Our mission is
										to connect individuals seeking rooms or
										PGs with reliable landlords, while
										providing the necessary tools and
										resources to ensure a hassle-free
										process.
									</p>
								</div>
							</div>
							<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
								<div className='flex flex-col justify-center space-y-4'>
									<ul className='grid gap-6'>
										<li>
											<div className='grid gap-1'>
												<h3 className='text-xl font-bold'>
													Tenant Empowerment
												</h3>
												<p className='text-muted-foreground'>
													We empower tenants by
													providing them with a wide
													range of options,
													transparent pricing, and
													secure booking processes.
												</p>
											</div>
										</li>
										<li>
											<div className='grid gap-1'>
												<h3 className='text-xl font-bold'>
													Landlord Support
												</h3>
												<p className='text-muted-foreground'>
													Our platform offers
													landlords the tools and
													resources they need to
													effectively manage their
													properties and tenants.
												</p>
											</div>
										</li>
										<li>
											<div className='grid gap-1'>
												<h3 className='text-xl font-bold'>
													Community-Driven
												</h3>
												<p className='text-muted-foreground'>
													We foster a community of
													renters and landlords,
													encouraging open
													communication and feedback
													to continuously improve our
													services.
												</p>
											</div>
										</li>
									</ul>
								</div>
								<div className='flex flex-col justify-center space-y-4'>
									<ul className='grid gap-6'>
										<li>
											<div className='grid gap-1'>
												<h3 className='text-xl font-bold'>
													Verified Listings
												</h3>
												<p className='text-muted-foreground'>
													Browse through a curated
													selection of PG and room
													listings, all verified for
													quality and safety.
												</p>
											</div>
										</li>
										<li>
											<div className='grid gap-1'>
												<h3 className='text-xl font-bold'>
													Secure Payments
												</h3>
												<p className='text-muted-foreground'>
													Enjoy a hassle-free payment
													experience with our secure
													online payment gateway.
												</p>
											</div>
										</li>
										<li>
											<div className='grid gap-1'>
												<h3 className='text-xl font-bold'>
													Seamless Communication
												</h3>
												<p className='text-muted-foreground'>
													Connect with PG owners
													directly through our
													platform and resolve any
													queries or concerns.
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</section>
					<section className='w-full py-12 md:py-24 lg:py-32'>
						<div className='container px-4 md:px-6'>
							<div className='flex flex-col items-center justify-center space-y-4 text-center'>
								<div className='space-y-2'>
									<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
										Testimonials
									</div>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
										What Our Customers Say
									</h2>
									<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										Hear from our satisfied customers and
										learn how MeraPG has transformed their
										PG and room rental experience.
									</p>
								</div>
							</div>
							<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
								<div className='flex flex-col justify-center space-y-4'>
									<div className='grid gap-4'>
										<div className='grid gap-2 rounded-lg bg-background p-4'>
											<div className='flex items-center gap-2'>
												<Avatar>
													<AvatarImage src='/placeholder-user.jpg' />
													<AvatarFallback>
														JD
													</AvatarFallback>
												</Avatar>
												<div>
													<p className='text-sm font-medium leading-none'>
														Jyoti Dutta
													</p>
													<p className='text-xs text-muted-foreground'>
														Student, Delhi
													</p>
												</div>
											</div>
											<p className='text-sm text-muted-foreground'>
												"MeraPG made my PG search so
												much easier. The platform is
												user-friendly, and I was able to
												find a great PG that fits my
												budget and needs."
											</p>
										</div>
										<div className='grid gap-2 rounded-lg bg-background p-4'>
											<div className='flex items-center gap-2'>
												<Avatar>
													<AvatarImage src='/placeholder-user.jpg' />
													<AvatarFallback>
														RK
													</AvatarFallback>
												</Avatar>
												<div>
													<p className='text-sm font-medium leading-none'>
														Ravi Kumar
													</p>
													<p className='text-xs text-muted-foreground'>
														Professional, Bangalore
													</p>
												</div>
											</div>
											<p className='text-sm text-muted-foreground'>
												"As a PG owner, I've had a great
												experience with MeraPG. The
												platform has helped me reach a
												wider audience and manage my
												listings efficiently."
											</p>
										</div>
									</div>
								</div>
								<img
									src='/living.jpg'
									width='550'
									height='310'
									alt='Testimonials'
									className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
								/>
							</div>
						</div>
					</section>
					<section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
						<div className='container px-4 md:px-6'>
							<div className='flex flex-col items-center justify-center space-y-4 text-center'>
								<div className='space-y-2'>
									<div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
										Our Team
									</div>
									<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
										Meet the Founders
									</h2>
									<p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
										MeraPG was founded by a passionate team
										committed to revolutionizing the PG and
										room rental industry. Learn more about
										our founders and their vision for the
										platform.
									</p>
								</div>
							</div>
							<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
								<div className='flex flex-col justify-center space-y-4'>
									<div className='grid gap-4'>
										<div className='grid gap-2 rounded-lg bg-background p-4'>
											<div className='flex items-center gap-2'>
												<Avatar>
													<AvatarImage src='/placeholder-user.jpg' />
													<AvatarFallback>
														DR
													</AvatarFallback>
												</Avatar>
												<div>
													<p className='text-sm font-medium leading-none'>
														Dheeru Rajpoot
													</p>
													<p className='text-xs text-muted-foreground'>
														Founder, CEO
													</p>
												</div>
											</div>
											<p className='text-sm text-muted-foreground'>
												"Our goal is to make the PG and
												room rental process seamless and
												accessible for everyone. We're
												committed to empowering both
												tenants and PG owners through
												our innovative platform."
											</p>
										</div>
										{/* <div className='grid gap-2 rounded-lg bg-background p-4'>
											<div className='flex items-center gap-2'>
												<Avatar>
													<AvatarImage src='/placeholder-user.jpg' />
													<AvatarFallback>
														CM
													</AvatarFallback>
												</Avatar>
												<div>
													<p className='text-sm font-medium leading-none'>
														Chandrakant Maurya
													</p>
													<p className='text-xs text-muted-foreground'>
														Co-founder, COO
													</p>
												</div>
											</div>
											<p className='text-sm text-muted-foreground'>
												"We understand the challenges
												individuals face when\n
												searching for the right PG or
												room. That's why we've\n built
												MeraPG to be a one-stop solution
												that caters to\n all your rental
												needs."
											</p>
										</div> */}
									</div>
								</div>
								<img
									src='./funiture.jpg'
									width='550'
									height='310'
									alt='Team'
									className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
								/>
							</div>
						</div>
					</section>
					<section className='w-full py-12 md:py-24 lg:py-32 border-t'>
						<div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
							<div className='space-y-3'>
								<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
									Ready to Find Your Perfect PG?
								</h2>
								<p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Explore our wide range of verified PG
									listings and find the ideal accommodation
									that suits your needs.
								</p>
							</div>
							<div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
								<Link
									to='/'
									className='inline-flex h-10 items-center justify-center rounded-md bg-prime px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-prime/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
									Explore PGs
								</Link>
								<Link
									to='/addproperty'
									className='inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
									List Your PG
								</Link>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
};

export default About;
