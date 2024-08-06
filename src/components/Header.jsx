import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { FaLaptopHouse } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { AuthContext } from "@/context/AuthContext";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
	const { user, profile, logout } = useContext(AuthContext);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<>
			<header
				className={`${
					isScrolled ? "md:fixed top-0" : "md:absolute md:top-8"
				} fixed w-full z-50 h-20  transition-all duration-300`}>
				<div
					className={`${
						isScrolled ? "w-full 2xl:justify-around " : "container"
					} mx-auto flex h-full items-center bg-[#fff] justify-between px-2 md:px-6 shadow-lg shadow-prime/50 transition-all duration-500`}>
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
					<div className='flex'>
						<div className='flex md:gap-3 items-center'>
							<Link to='/addproperty'>
								<Button className='hidden md:inline-flex h-9  rounded-md px-4 text-sm font-medium shadow bg-prime hover:bg-prime/90'>
									+ List Property
								</Button>
							</Link>
							<div className='hidden md:inline-block'>
								{user ? (
									<DropdownMenu>
										<DropdownMenuTrigger>
											<Avatar className='w-10 h-10 border-2'>
												<AvatarImage
													src={profile?.profilePic}
													className='object-cover'
												/>
												<AvatarFallback>
													{profile?.name?.charAt()[0]}
												</AvatarFallback>
											</Avatar>
										</DropdownMenuTrigger>
										<DropdownMenuContent>
											<DropdownMenuItem>
												<Link to='/profile'>
													Profile
												</Link>
											</DropdownMenuItem>
											<DropdownMenuItem
												onClick={logout}
												className='cursor-pointer'>
												Log Out
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								) : (
									<Link
										to='/login'
										className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
										Login
									</Link>
								)}
							</div>
						</div>
						<Sheet>
							<Link to='/addproperty'>
								<Button className='md:hidden rounded-md px-2 mx-2 text-sm font-medium shadow bg-prime hover:bg-prime/90'>
									+ List
								</Button>
							</Link>
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
								<SheetTitle className=''>
									<Link
										to='/'
										className='flex items-center gap-2 mb-3'>
										<FaLaptopHouse className='h-8 w-8 text-prime' />
										<span className='text-3xl text-prime font-bold'>
											MeraPG
										</span>
									</Link>
								</SheetTitle>
								<hr />
								<div className='flex flex-col gap-6 p-6'>
									<Link
										to='/'
										className='text-lg font-medium hover:underline underline-offset-4'>
										Home
									</Link>
									<Link
										to='/profile'
										className='text-lg font-medium hover:underline underline-offset-4'>
										Profile
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
									<Button className='inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium shadow transition-colors bg-prime hover:bg-prime/90'>
										<Link to='/addproperty'>
											+ List Property
										</Link>
									</Button>
									<Button
										onClick={logout}
										className='inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium shadow  hover:bg-prime/90'>
										Log Out
									</Button>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
