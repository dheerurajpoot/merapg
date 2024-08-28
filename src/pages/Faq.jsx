import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Faq = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<section className='flex md:mt-20 flex-col items-center justify-center'>
				<div className='container mt-20 md:mt-2 mx-auto px-4 py-12 md:px-6 lg:py-24 space-y-6'>
					<div className='text-center'>
						<h1 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
							Frequently Asked Questions
						</h1>
						<p className='mt-4 text-lg text-muted-foreground'>
							Get answers to common questions about renting rooms
							and PGs through MeraPG.
						</p>
					</div>
					<div className='space-y-4'>
						<Collapsible>
							<CollapsibleTrigger className='flex items-center text-left justify-between w-full px-6 py-4 bg-background rounded-lg shadow-sm [&[data-state=open]>svg]:rotate-90'>
								<h3 className='text-lg font-medium text-foreground'>
									How do I list my room or PG on MeraPG?
								</h3>
								<FaChevronRight className='h-5 w-5 text-muted-foreground transition-transform' />
							</CollapsibleTrigger>
							<CollapsibleContent className='px-6 py-4 text-muted-foreground'>
								<p>
									To list your room or PG on MeraPG, simply
									<Link to='/signup' className='text-prime'>
										{" "}
										Sign Up
									</Link>{" "}
									for an account and follow the easy steps to{" "}
									<Link
										to='/addproperty'
										className='text-prime'>
										create your listing
									</Link>
									. You'll need to provide details about the
									property, upload photos, and set your
									pricing. Our team will review your listing
									and get it live on the platform.
								</p>
							</CollapsibleContent>
						</Collapsible>
						<Collapsible>
							<CollapsibleTrigger className='flex items-center text-left justify-between w-full px-6 py-4 bg-background rounded-lg shadow-sm [&[data-state=open]>svg]:rotate-90'>
								<h3 className='text-lg font-medium text-foreground'>
									What kind of properties can I list on
									MeraPG?
								</h3>
								<FaChevronRight className='h-5 w-5 text-muted-foreground transition-transform' />
							</CollapsibleTrigger>
							<CollapsibleContent className='px-6 py-4 text-muted-foreground'>
								<p>
									MeraPG accepts listings for a variety of
									room and PG (paying guest) accommodations,
									including apartments, houses, hostels, and
									dormitories. As long as the property meets
									our basic quality and safety standards, we
									welcome you to list it on our platform.
								</p>
							</CollapsibleContent>
						</Collapsible>
						<Collapsible>
							<CollapsibleTrigger className='flex items-center text-left justify-between w-full px-6 py-4 bg-background rounded-lg shadow-sm [&[data-state=open]>svg]:rotate-90'>
								<h3 className='text-lg font-medium text-foreground'>
									What fees does MeraPG charge?
								</h3>
								<FaChevronRight className='h-5 w-5 text-muted-foreground transition-transform' />
							</CollapsibleTrigger>
							<CollapsibleContent className='px-6 py-4 text-muted-foreground'>
								<p>
									MeraPG is Free to list your property at this
									time. There are no other hidden fees or
									charges for listing your property or using
									our services.
								</p>
							</CollapsibleContent>
						</Collapsible>
						<Collapsible>
							<CollapsibleTrigger className='flex items-center text-left justify-between w-full px-6 py-4 bg-background rounded-lg shadow-sm [&[data-state=open]>svg]:rotate-90'>
								<h3 className='text-lg font-medium text-foreground'>
									How do I reset my password on MeraPG?
								</h3>
								<FaChevronRight className='h-5 w-5 text-muted-foreground transition-transform' />
							</CollapsibleTrigger>
							<CollapsibleContent className='px-6 py-4 text-muted-foreground'>
								<ol className='list-decimal list-inside ml-4'>
									<li>
										Visit the MeraPG login page. And click
										on the <b>"Forgot Password?"</b> link.
										Or click go to your profile and click on{" "}
										<Link
											to='/reset-password-link'
											className='text-prime'>
											Reset Password
										</Link>{" "}
										Button.
									</li>
									<li>
										Enter your registered email address. And
										click on <b>Send Reset Link</b>
									</li>
									<li>
										Check your email inbox for a password
										reset link.
									</li>
									<li>
										Click the link and follow the
										instructions to create a new password.
									</li>
								</ol>
								<div className='my-3'>
									<h3 className='text-ls font-semibold mb-2'>
										Q2: What should I do if I don’t receive
										the password reset email?
									</h3>
									<p className='text-base'>
										If you don’t receive the password reset
										email:
									</p>
									<ol className='list-decimal list-inside ml-4'>
										<li>Check your spam or junk folder.</li>
										<li>
											Ensure you entered the correct email
											address associated with your MeraPG
											account.
										</li>
										<li>
											If the email is still missing, try
											resending the reset email or contact
											our support team at{" "}
											<a
												href='mailto:support@merapg.com'
												className='text-blue-600 hover:underline'>
												merapgofficial@gmail.com
											</a>
											.
										</li>
									</ol>
								</div>
							</CollapsibleContent>
						</Collapsible>
						<Collapsible>
							<CollapsibleTrigger className='flex items-center text-left justify-between w-full px-6 py-4 bg-background rounded-lg shadow-sm [&[data-state=open]>svg]:rotate-90'>
								<h3 className='text-lg font-medium text-foreground'>
									What support does MeraPG provide?
								</h3>
								<FaChevronRight className='h-5 w-5 text-muted-foreground transition-transform' />
							</CollapsibleTrigger>
							<CollapsibleContent className='px-6 py-4 text-muted-foreground'>
								<p>
									MeraPG offers comprehensive support to both
									property owners and tenants. Our dedicated
									customer service team is available 24/7 to
									assist with any questions or issues that may
									arise. We also provide educational
									resources, marketing tools, and ongoing
									guidance to help you succeed on our
									platform.
								</p>
							</CollapsibleContent>
						</Collapsible>
					</div>
				</div>
			</section>
		</>
	);
};

export default Faq;
