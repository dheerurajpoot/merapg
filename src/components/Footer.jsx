import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
	return (
		<div>
			<footer className='bg-muted py-12'>
				<div className='container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					<div className='grid gap-4'>
						<h3 className='text-lg font-semibold'>Contact Us</h3>
						<div className='grid gap-2'>
							<div className='flex items-center gap-2'>
								<MdOutlinePhoneInTalk className='h-5 w-5 text-prime' />
								<Link
									to='tel:+919026315148'
									className='text-muted-foreground hover:underline'>
									+91 9026315148
								</Link>
							</div>
							<div className='flex items-center gap-2'>
								<IoIosMail className='h-5 w-5 text-prime' />
								<Link
									to='mailto:merapgofficial@gmail.com'
									className='text-muted-foreground hover:underline'>
									merapgofficial@gmail.com
								</Link>
							</div>
							<div className='flex items-center gap-2'>
								<FaMapMarkerAlt className='h-5 w-5 text-prime' />
								<span className='text-muted-foreground'>
									Bamba Road, Kalyanpur, Kanpur
								</span>
							</div>
						</div>
						<div className='flex items-center gap-4'>
							<Link
								to='https://www.facebook.com/merapgofficial'
								className='text-muted-foreground hover:text-foreground'>
								<FaFacebook className='h-6 w-6' />
								<span className='sr-only'>Facebook</span>
							</Link>
							<Link
								to='https://x.com/merapgofficial'
								className='text-muted-foreground hover:text-foreground'>
								<BsTwitterX className='h-6 w-6' />
								<span className='sr-only'>Twitter</span>
							</Link>
							<Link
								to='https://www.instagram.com/merapgofficial/'
								className='text-muted-foreground hover:text-foreground'>
								<FaInstagram className='h-6 w-6' />
								<span className='sr-only'>Instagram</span>
							</Link>
							<Link
								to='https://www.linkedin.com/company/merapgofficial'
								className='text-muted-foreground hover:text-foreground'>
								<FaLinkedin className='h-6 w-6' />
								<span className='sr-only'>LinkedIn</span>
							</Link>
						</div>
					</div>
					<div className='grid grid-cols-2 gap-8'>
						<div className='grid gap-2'>
							<h3 className='text-lg font-semibold'>Explore</h3>
							<Link
								to='/findpg'
								className='text-muted-foreground hover:text-prime hover:underline'>
								Find a Room
							</Link>
							<Link
								to='/addproperty'
								className='text-muted-foreground hover:text-prime hover:underline'>
								List your Property
							</Link>
							<Link
								to='/blog'
								className='text-muted-foreground hover:text-prime hover:underline'>
								Blog
							</Link>
							<Link
								to='/faq'
								className='text-muted-foreground hover:text-prime hover:underline'>
								FAQs
							</Link>
						</div>
						<div className='grid gap-2'>
							<h3 className='text-lg font-semibold'>Company</h3>
							<Link
								to='/about'
								className='text-muted-foreground hover:underline'>
								About Us
							</Link>
							<Link
								to='/privacy-policy'
								className='text-muted-foreground hover:text-prime hover:underline'>
								Privacy Policy
							</Link>
							<Link
								to='/terms-conditions'
								className='text-muted-foreground hover:text-prime hover:underline'>
								Terms of Service
							</Link>
							<Link
								to='/contact'
								className='text-muted-foreground hover:text-prime hover:underline'>
								Contact
							</Link>
						</div>
					</div>
					<div className='grid gap-4'>
						<h3 className='text-lg font-semibold'>About MeraPG</h3>
						<p className='text-muted-foreground'>
							MeraPG is a leading platform for finding and renting
							rooms or PGs in your city. We connect landlords and
							tenants, making the process of finding a comfortable
							and affordable place to live easier than ever
							before.
						</p>
						<Link
							to='/about'
							className='inline-flex items-center gap-2 text-primary text-prime hover:underline'>
							Learn More
							<FaArrowRightLong className='h-4 w-4' />
						</Link>
					</div>
				</div>
				<div className='mt-6 border-t border-muted pt-6 text-center text-xs'>
					<p>&copy; 2024 MeraPG. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
