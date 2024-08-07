import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
	const apiKey = "b29ca6f2-b850-409b-9e9e-b608e1ec4e5f";
	const formId = "46993994"; // replace with your actual form ID

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			fields: [
				{ name: "full_name", value: name },
				{ name: "email", value: email },
				{ name: "message", value: message },
			],
		};

		try {
			const response = await axios.post(
				`https://api.hsforms.com/submissions/v3/integration/submit/${formId}/${apiKey}`,
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 200) {
				toast.success("Message sent successfully!");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error(error);
			toast.error("An error occurred while sending the message.");
		}
	};

	return (
		<>
			<div className='w-full'>
				<section className='relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden'>
					<img
						src='/bedroom.jpg'
						width='100%'
						alt='Contact Banner'
						className='object-cover object-center '
					/>
					<div className='absolute inset-0 bg-black/50 flex flex-col items-center bg-[#fff]/40 justify-center px-4 text-center text-white'>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
							Get in Touch with MeraPG
						</h1>
						<p className='mt-4 text-lg sm:text-xl'>
							Have a question or need assistance? Our team is here
							to help.
						</p>
						<Link
							to='#'
							className='mt-8 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors bg-prime hover:bg-prime/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
							Contact Us
						</Link>
					</div>
				</section>
				<section className='py-12 md:py-16 lg:py-20'>
					<div className='container grid gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16'>
						<div className='space-y-4'>
							<h2 className='text-2xl font-bold tracking-tighter text-foreground sm:text-3xl'>
								Contact Information
							</h2>
							<div className='space-y-2'>
								<div className='flex items-center gap-2'>
									<IoIosMail className='h-5 w-5 text-prime' />
									<Link
										to='mailto:contact@merapg.com'
										className='text-muted-foreground hover:text-primary'>
										contact@merapg.com
									</Link>
								</div>
								<div className='flex items-center gap-2'>
									<MdOutlinePhonelinkRing className='h-5 w-5 text-prime' />
									<a
										href='tel:+919026315148'
										className='text-muted-foreground hover:text-primary'>
										+91-9026315148
									</a>
								</div>
								<div className='flex items-start gap-2'>
									<FaMapMarkerAlt className='mt-1 h-5 w-5 text-prime' />
									<div className='text-muted-foreground'>
										Old Shivli Road, Kalyanpur, Kanpur
										(208017)
									</div>
								</div>
							</div>
						</div>
						<div className='space-y-4'>
							<h2 className='text-2xl font-bold tracking-tighter text-foreground sm:text-3xl'>
								Send Us a Message
							</h2>
							<form className='space-y-4' onSubmit={handleSubmit}>
								<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
									<div>
										<Label htmlFor='name'>Name</Label>
										<Input
											id='name'
											placeholder='Enter your name'
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
										/>
									</div>
									<div>
										<Label htmlFor='email'>Email</Label>
										<Input
											id='email'
											type='email'
											placeholder='Enter your email'
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</div>
								</div>
								<div>
									<Label htmlFor='message'>Message</Label>
									<Textarea
										id='message'
										rows={5}
										placeholder='Enter your message'
										value={message}
										onChange={(e) =>
											setMessage(e.target.value)
										}
									/>
								</div>
								<Button
									type='submit'
									className='bg-prime hover:bg-prime/90'>
									Send Message
								</Button>
							</form>
						</div>
					</div>
				</section>
				<section className='py-12 sm:py-16 lg:py-20'>
					<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='aspect-w-16 aspect-h-9'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8380154157994!2d-122.41941868451349!3d37.77493497975203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4b3b%3A0xb10ed6d9b5050fa5!2sVercel%20Inc!5e0!3m2!1sen!2sus!4v1624992385739!5m2!1sen!2sus'
								width='100%'
								height='450'
								style={{ border: 0 }}
								allowFullScreen
								loading='lazy'
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Contact;
