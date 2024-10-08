import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { IoMenuSharp } from "react-icons/io5";
import { AuthContext } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import merapgLogo from "/merapglogo.png";

const Header = () => {
	const { user, logout } = useContext(AuthContext);
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
					<Link to='/'>
						<img className='w-36' src={merapgLogo} alt='MERAPG' />
					</Link>
					<nav className='hidden items-center gap-6 md:flex'>
						<Link
							to='/'
							className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
							Home
						</Link>
						<Link
							to='/findpg'
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
						<Link
							to='/review'
							className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
							Review
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
									<Link to='/profile'>
										<Avatar className='w-10 h-10 border-2'>
											<AvatarImage
												src={user?.profilePic}
												className='object-cover'
											/>
											<AvatarFallback>
												{user?.name?.charAt()[0]}
											</AvatarFallback>
										</Avatar>
									</Link>
								) : (
									<Link
										to='/signup'
										className='text-md font-medium hover:text-prime hover:underline underline-offset-4'>
										Sign Up
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
									<Link to='/' className='mb-3'>
										<img
											className='w-32 h-14 object-cover'
											src='./merapglogo.png'
											alt='MERAPG'
										/>
									</Link>
								</SheetTitle>
								<hr className='mt-5' />
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
										to='/findpg'
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
									<Link
										to='/review'
										className='text-lg font-medium hover:underline underline-offset-4'>
										Review
									</Link>
									<Button className='inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium shadow transition-colors bg-prime hover:bg-prime/90'>
										<Link to='/addproperty'>
											+ List Property
										</Link>
									</Button>
									{user ? (
										<Button
											onClick={logout}
											variant='destructive'
											className='inline-flex h-10 w-full items-center justify-center rounded-md px-4 text-sm font-medium shadow'>
											Log Out
										</Button>
									) : (
										<Link to='/login'>
											<Button className='inline-flex h-10 w-full items-center justify-center rounded-md px-4 text-sm font-medium shadow bg-prime hover:bg-prime/90'>
												Log In
											</Button>
										</Link>
									)}
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
