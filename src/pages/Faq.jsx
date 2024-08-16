import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";

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
									sign up for an account and follow the easy
									steps to create your listing. You'll need to
									provide details about the property, upload
									photos, and set your pricing. Our team will
									review your listing and get it live on the
									platform.
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
									How do I screen and select tenants?
								</h3>
								<FaChevronRight className='h-5 w-5 text-muted-foreground transition-transform' />
							</CollapsibleTrigger>
							<CollapsibleContent className='px-6 py-4 text-muted-foreground'>
								<p>
									MeraPG provides tools to help you screen and
									select tenants for your property. You can
									review tenant profiles, check references,
									and communicate directly with potential
									renters through our platform. We also offer
									guidance on setting tenant policies and
									managing the rental process.
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
									MeraPG charges a small commission fee on
									each successful booking made through our
									platform. The commission rate is 10% of the
									total booking amount. There are no other
									hidden fees or charges for listing your
									property or using our services.
								</p>
							</CollapsibleContent>
						</Collapsible>
						<Collapsible>
							<CollapsibleTrigger className='flex items-center text-left justify-between w-full px-6 py-4 bg-background rounded-lg shadow-sm [&[data-state=open]>svg]:rotate-90'>
								<h3 className='text-lg font-medium text-foreground'>
									How do I get paid for bookings?
								</h3>
								<FaChevronRight className='h-5 w-5 text-muted-foreground transition-transform' />
							</CollapsibleTrigger>
							<CollapsibleContent className='px-6 py-4 text-muted-foreground'>
								<p>
									MeraPG handles all payments and bookings
									through our secure platform. Once a tenant
									books your property, the payment is
									automatically transferred to your account
									within 48 hours. You can choose to receive
									payouts via bank transfer, digital wallet,
									or other preferred payment methods.
								</p>
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
