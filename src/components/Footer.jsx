import React from "react";
import { FaLaptopHouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<footer className='bg-muted py-12 text-muted-foreground'>
				<div className='container mx-auto grid grid-cols-1 gap-10 px-4 sm:grid-cols-2 md:grid-cols-4 lg:px-0'>
					<div className='space-y-4'>
						<Link href='#' className='flex items-center'>
							<FaLaptopHouse className='h-8 w-8 text-primary' />
							<span className='ml-2 text-xl font-bold'>
								MeraPG
							</span>
						</Link>
						<p className='text-sm'>
							MeraPG is a platform that connects PG owners with
							tenants, making it easy to find and rent affordable
							PG accommodations.
						</p>
					</div>
					<div className='grid gap-2'>
						<h4 className='text-sm font-medium'>Quick Links</h4>
						<Link href='#' className='text-sm hover:underline'>
							About
						</Link>
						<Link href='#' className='text-sm hover:underline'>
							Contact
						</Link>
						<Link href='#' className='text-sm hover:underline'>
							Privacy Policy
						</Link>
						<Link href='#' className='text-sm hover:underline'>
							Terms of Service
						</Link>
					</div>
					<div className='grid gap-2'>
						<h4 className='text-sm font-medium'>Explore</h4>
						<Link href='#' className='text-sm hover:underline'>
							Find PGs
						</Link>
						<Link href='#' className='text-sm hover:underline'>
							Become a Host
						</Link>
						<Link href='#' className='text-sm hover:underline'>
							Blog
						</Link>
						<Link href='#' className='text-sm hover:underline'>
							FAQs
						</Link>
					</div>
					<div className='grid gap-2'>
						<h4 className='text-sm font-medium'>Follow Us</h4>
						<div className='flex items-center gap-2'>
							<Link
								href='#'
								className='text-primary hover:text-primary-foreground'>
								<BsTwitterX className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-primary hover:text-primary-foreground'>
								<FaFacebook className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-primary hover:text-primary-foreground'>
								<FaInstagram className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-primary hover:text-primary-foreground'>
								<FaLinkedin className='h-5 w-5' />
							</Link>
						</div>
					</div>
				</div>
				<div className='mt-12 border-t border-muted pt-6 text-center text-xs'>
					<p>&copy; 2024 MeraPG. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
