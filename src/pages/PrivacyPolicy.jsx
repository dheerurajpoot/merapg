import React, { useEffect } from "react";

const PrivacyPolicy = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className='flex md:mt-20 flex-col items-center justify-center'>
				<div className='container mt-20 md:mt-2 space-y-6 py-12 md:px-6 lg:py-24'>
					<h1 className='text-3xl font-bold'>Privacy Policy</h1>
					<div className='prose'>
						<p>
							At MeraPG, we are committed to protecting the
							privacy and security of our users. This Privacy
							Policy outlines how we collect, use, and safeguard
							the personal information you provide to us when
							using our room and PG rental platform.
						</p>
					</div>
					<div className='space-y-4'>
						<h2 className='text-2xl font-semibold'>
							Data Collection
						</h2>
						<div className='prose'>
							<p>
								We collect the following information from you
								when you use our platform:
							</p>
							<ul>
								<li>
									Personal information, such as your name,
									email address, phone number, and address,
									when you create an account or make a
									booking.
								</li>
								<li>
									Payment information, such as your credit
									card details, when you make a booking.
								</li>
								<li>
									Usage data, such as your browsing history,
									search queries, and interactions with our
									platform, to improve our services.
								</li>
							</ul>
						</div>
					</div>
					<div className='space-y-4'>
						<h2 className='text-2xl font-semibold'>Data Usage</h2>
						<div className='prose'>
							<p>We use the collected information to:</p>
							<ul>
								<li>
									Provide and improve our room and PG rental
									services.
								</li>
								<li>Process your bookings and payments.</li>
								<li>
									Communicate with you about your bookings and
									other important updates.
								</li>
								<li>
									Analyze usage data to enhance our platform
									and services.
								</li>
							</ul>
						</div>
					</div>
					<div className='space-y-4'>
						<h2 className='text-2xl font-semibold'>Data Sharing</h2>
						<div className='prose'>
							<p>
								We may share your personal information with
								third-party service providers who assist us in
								operating our platform, such as payment
								processors and hosting providers. These third
								parties are bound by confidentiality agreements
								and are not permitted to use your information
								for any other purpose.
							</p>
							<p>
								We will not sell, rent, or share your personal
								information with any other third parties without
								your consent, except as required by law or to
								protect our rights and property.
							</p>
						</div>
					</div>
					<div className='space-y-4'>
						<h2 className='text-2xl font-semibold'>
							Data Security
						</h2>
						<div className='prose'>
							<p>
								We take reasonable measures to protect your
								personal information from unauthorized access,
								disclosure, alteration, or destruction. This
								includes the use of encryption, firewalls, and
								other security protocols.
							</p>
							<p>
								However, no method of transmission over the
								internet or electronic storage is 100% secure,
								and we cannot guarantee the absolute security of
								your information.
							</p>
						</div>
					</div>
					<div className='space-y-4'>
						<h2 className='text-2xl font-semibold'>User Rights</h2>
						<div className='prose'>
							<p>
								You have the right to access, update, and delete
								your personal information. You can also request
								a copy of your data or withdraw your consent for
								us to use your information.
							</p>
							<p>
								If you have any concerns or questions about how
								we handle your personal information, please
								contact our privacy team at support@merapg.com.
							</p>
						</div>
					</div>
					<div className='space-y-4'>
						<h2 className='text-2xl font-semibold'>Contact Us</h2>
						<div className='prose'>
							<p>
								If you have any questions or concerns about our
								Privacy Policy or our data practices, please
								don't hesitate to contact us at:
							</p>
							<ul>
								<li>Email: merapgofficial@gmail.com</li>
								<li>Phone: +91 9026315148</li>
								<li>
									Address: Near Durga Traders, Bamba Road,
									Kalyanpur, Kanpur (208017)
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PrivacyPolicy;
