import React from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { FaLaptopHouse } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

const Header = () => {
	return (
		<>
			<header className='container mx-auto w-full top-0 z-50 h-20 bg-[#fff] transition-all duration-300'>
				<div className='container flex h-full items-center justify-between px-4 md:px-6'>
					<Link to='/' className='flex items-center gap-2'>
						<FaLaptopHouse className='h-8 w-8 text-prime' />
						<span className='text-3xl text-prime font-bold'>
							MeraPG
						</span>
					</Link>
					<nav className='hidden items-center gap-6 md:flex'>
						<Link
							to='/'
							className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
							Home
						</Link>
						<Link
							to='#'
							className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
							Find PG
						</Link>
						<Link
							to='/blog'
							className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
							Blog
						</Link>
						<Link
							to='/about'
							className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
							About
						</Link>
						<Link
							to='/contact'
							className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
							Contact
						</Link>
					</nav>
					<div className='flex md:gap-3 items-center'>
						<Link
							to='/login'
							className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
							Login
						</Link>
						<Link to='/addproperty'>
							<Button className='hidden md:inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium shadow transition-colors bg-prime hover:bg-prime/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
								Add Property
							</Button>
						</Link>
					</div>
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant='outline'
								size='icon'
								className='md:hidden'>
								<IoMenuSharp className='h-6 w-6' />
								<span className='sr-only'>
									Toggle navigation
								</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side='left'
							className='w-[80vw] md:hidden'>
							<SheetTitle className='visually-hidden'>
								Menu
							</SheetTitle>
							<div className='flex flex-col gap-6 p-6'>
								<Link
									to='/'
									className='text-lg font-medium hover:underline underline-offset-4'>
									Home
								</Link>
								<Link
									to='#'
									className='text-lg font-medium hover:underline underline-offset-4'>
									Find PG
								</Link>
								<Link
									to='/blog'
									className='text-lg font-medium hover:underline underline-offset-4'>
									Blog
								</Link>
								<Link
									to='/about'
									className='text-lg font-medium hover:underline underline-offset-4'>
									About
								</Link>
								<Link
									to='/contact'
									className='text-lg font-medium hover:underline underline-offset-4'>
									Contact
								</Link>
								<Link to='/addproperty'>
									<Button className='inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium shadow transition-colors bg-prime hover:bg-prime/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
										Add Property
									</Button>
								</Link>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</header>
		</>
	);
};

export default Header;
