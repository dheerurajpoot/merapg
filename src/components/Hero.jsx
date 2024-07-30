import React from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Input } from "./ui/input";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { IoChevronDown } from "react-icons/io5";

const Hero = () => {
	return (
		<>
			<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary/80'>
				<div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none'>
								Find Your Perfect Property
							</h1>
							<p className='max-w-[600px] text-primary-foreground/90 md:text-xl'>
								Discover your dream home with MeraPG's
								comprehensive real estate search.
							</p>
						</div>
						<div className='flex flex-col gap-2 min-[400px]:flex-row'>
							<Link
								href='#'
								className='inline-flex h-10 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
								Search Properties
							</Link>
						</div>
					</div>
					<div className='relative'>
						<Carousel
							opts={{
								align: "center",
								loop: true,
								autoplay: true,
								interval: 5000,
							}}
							className='rounded-xl overflow-hidden'>
							<CarouselContent>
								<CarouselItem>
									<img
										src='./funiture.jpg'
										width='550'
										height='550'
										alt='Hero'
										className='aspect-video object-cover'
									/>
								</CarouselItem>
								<CarouselItem>
									<img
										src='./living.jpg'
										width='550'
										height='550'
										alt='Hero'
										className='aspect-video object-cover'
									/>
								</CarouselItem>
								<CarouselItem>
									<img
										src='./bedroom.jpg'
										width='550'
										height='550'
										alt='Hero'
										className='aspect-video object-cover'
									/>
								</CarouselItem>
							</CarouselContent>
						</Carousel>
					</div>
				</div>
				<div className='container px-4 md:px-6 mt-8'>
					<div className='bg-background rounded-lg shadow-lg p-4 md:p-6 flex gap-4'>
						<Input
							type='text'
							placeholder='Search by keyword'
							className='flex-1'
						/>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant='outline'
									className='flex-1 justify-between'>
									Property Type
									<IoChevronDown className='h-4 w-4' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='start'>
								<DropdownMenuItem>Residential</DropdownMenuItem>
								<DropdownMenuItem>Commercial</DropdownMenuItem>
								<DropdownMenuItem>Land</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant='outline'
									className='flex-1 justify-between'>
									Location
									<IoChevronDown className='h-4 w-4' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='start'>
								<DropdownMenuItem>New York</DropdownMenuItem>
								<DropdownMenuItem>Los Angeles</DropdownMenuItem>
								<DropdownMenuItem>Chicago</DropdownMenuItem>
								<DropdownMenuItem>Houston</DropdownMenuItem>
								<DropdownMenuItem>Phoenix</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<Button className='flex-none'>Search</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
