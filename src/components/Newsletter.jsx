import axios from "axios";
import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Newsletter = () => {
	const [email, setEmail] = useState("");

	const apiKey = "c8708a78-d034-4415-9022-f0d6f36e6965";
	const formId = "46993994";

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			fields: [{ name: "email", value: email }],
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
				toast.success("Subscribed successfully!");
				setEmail("");
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
			<section className='bg-white dark:bg-gray-900'>
				<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
					<div className='mx-auto max-w-screen-md sm:text-center'>
						<h2 className='mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white'>
							Sign up for our newsletter
						</h2>
						<p className='mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400'>
							Stay up to date with the new PG's availbility,
							announcements and exclusive discounts feel free to
							sign up with your email.
						</p>
						<form onSubmit={handleSubmit}>
							<div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
								<div className='relative w-full'>
									<label
										htmlFor='email'
										className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
										Email address
									</label>
									<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
										<IoMdMail />
									</div>
									<input
										className='block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
										placeholder='Enter your email'
										type='email'
										id='email'
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div>
									<button
										type='submit'
										className='py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-prime border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-prime/90 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
										Subscribe
									</button>
								</div>
							</div>
							<div className='mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300'>
								We care about the protection of your data.{" "}
								<Link
									to='/privacy-policy'
									className='font-medium text-primary-600 dark:text-primary-500 hover:underline'>
									Read our Privacy Policy
								</Link>
								.
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Newsletter;
