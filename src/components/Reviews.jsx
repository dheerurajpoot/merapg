import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
	return (
		<>
			<section className='w-full container mx-auto py-8 md:py-16'>
				<div className='flex flex-col items-center gap-8'>
					<h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
						What Our Customers Say
					</h2>
					<p className='text-muted-foreground max-w-[700px] text-center md:text-xl/relaxed'>
						Hear from our satisfied customers and see why they love
						our products.
					</p>
				</div>
				<div className='mt-12'>
					<Carousel className='w-full'>
						<CarouselContent>
							<CarouselItem>
								<div className='grid gap-6 md:grid-cols-3 md:gap-8'>
									<Card className='flex flex-col gap-4 p-6 bg-background'>
										<div className='flex items-center gap-4'>
											<Avatar className='w-12 h-12 border'>
												<AvatarImage
													src='/placeholder-user.jpg'
													alt='@shadcn'
												/>
												<AvatarFallback>
													TS
												</AvatarFallback>
											</Avatar>
											<div>
												<h4 className='font-semibold'>
													Tanu Shriwastava
												</h4>
												<div className='flex items-center gap-0.5 text-primary'>
													<ReactStars
														count={5}
														value={4}
														size={24}
														edit={false}
														activeColor='#ffd700'
													/>
												</div>
											</div>
										</div>
										<p className='text-sm leading-loose text-muted-foreground'>
											"I absolutely love this product!
											It's been a game-changer for my
											business. The features are top-notch
											and the customer support is
											outstanding."
										</p>
									</Card>
									<Card className='flex flex-col gap-4 p-6 bg-background'>
										<div className='flex items-center gap-4'>
											<Avatar className='w-12 h-12 border'>
												<AvatarImage
													src='/placeholder-user.jpg'
													alt='@shadcn'
												/>
												<AvatarFallback>
													SR
												</AvatarFallback>
											</Avatar>
											<div>
												<h4 className='font-semibold'>
													Shikha Rajani
												</h4>
												<div className='flex items-center gap-0.5 text-primary'>
													<ReactStars
														count={5}
														value={5}
														size={24}
														edit={false}
														activeColor='#ffd700'
													/>
												</div>
											</div>
										</div>
										<p className='text-sm leading-loose text-muted-foreground'>
											"I was hesitant at first, but this
											product has exceeded all my
											expectations. It's easy to use and
											has saved me so much time and
											effort."
										</p>
									</Card>
									<Card className='flex flex-col gap-4 p-6 bg-background'>
										<div className='flex items-center gap-4'>
											<Avatar className='w-12 h-12 border'>
												<AvatarImage
													src='/placeholder-user.jpg'
													alt='@shadcn'
												/>
												<AvatarFallback>
													AR
												</AvatarFallback>
											</Avatar>
											<div>
												<h4 className='font-semibold'>
													Anuj Rajpoot
												</h4>
												<div className='flex items-center gap-0.5 text-primary'>
													<ReactStars
														count={5}
														value={4}
														size={24}
														edit={false}
														activeColor='#ffd700'
													/>
												</div>
											</div>
										</div>
										<p className='text-sm leading-loose text-muted-foreground'>
											"This product has truly transformed
											the way I work. The features are
											incredibly useful, and the support
											team is always there to help."
										</p>
									</Card>
								</div>
							</CarouselItem>
							<CarouselItem>
								<div className='grid gap-6 md:grid-cols-3 md:gap-8'>
									<Card className='flex flex-col gap-4 p-6 bg-background'>
										<div className='flex items-center gap-4'>
											<Avatar className='w-12 h-12 border'>
												<AvatarImage
													src='/placeholder-user.jpg'
													alt='@shadcn'
												/>
												<AvatarFallback>
													CR
												</AvatarFallback>
											</Avatar>
											<div>
												<h4 className='font-semibold'>
													Chaman Kumar
												</h4>
												<div className='flex items-center gap-0.5 text-primary'>
													<ReactStars
														count={5}
														value={5}
														size={24}
														edit={false}
														activeColor='#ffd700'
													/>
												</div>
											</div>
										</div>
										<p className='text-sm leading-loose text-muted-foreground'>
											"I'm so glad I found this product.
											It's been a lifesaver for my
											business, and the customer support
											is top-notch. Highly recommended!"
										</p>
									</Card>
									<Card className='flex flex-col gap-4 p-6 bg-background'>
										<div className='flex items-center gap-4'>
											<Avatar className='w-12 h-12 border'>
												<AvatarImage
													src='/placeholder-user.jpg'
													alt='@shadcn'
												/>
												<AvatarFallback>
													SR
												</AvatarFallback>
											</Avatar>
											<div>
												<h4 className='font-semibold'>
													Subhanshi
												</h4>
												<div className='flex items-center gap-0.5 text-primary'>
													<ReactStars
														count={5}
														value={4}
														edit={false}
														size={24}
														activeColor='#ffd700'
													/>
												</div>
											</div>
										</div>
										<p className='text-sm leading-loose text-muted-foreground'>
											"This product has been a
											game-changer for my team. The
											features are incredibly powerful,
											and the user experience is
											top-notch."
										</p>
									</Card>
									<Card className='flex flex-col gap-4 p-6 bg-background'>
										<div className='flex items-center gap-4'>
											<Avatar className='w-12 h-12 border'>
												<AvatarImage
													src='/placeholder-user.jpg'
													alt='@shadcn'
												/>
												<AvatarFallback>
													SD
												</AvatarFallback>
											</Avatar>
											<div>
												<h4 className='font-semibold'>
													Simran Dwivedi
												</h4>
												<div className='flex items-center gap-0.5 text-primary'>
													<ReactStars
														count={5}
														value={5}
														edit={false}
														size={24}
														activeColor='#ffd700'
													/>
												</div>
											</div>
										</div>
										<p className='text-sm leading-loose text-muted-foreground'>
											"I was hesitant to try this product
											at first, but I'm so glad I did.
											It's been a game-changer for my
											business, and the support team is
											incredible."
										</p>
									</Card>
								</div>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2'>
							<FaArrowLeft className='w-6 h-6' />
						</CarouselPrevious>
						<CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2'>
							<FaArrowRight className='w-6 h-6' />
						</CarouselNext>
					</Carousel>
				</div>
			</section>
		</>
	);
};

export default Reviews;
