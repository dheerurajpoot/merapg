import React from "react";
import { Link } from "react-router-dom";
import { TiWarningOutline } from "react-icons/ti";

const ErrorPage = () => {
	return (
		<>
			<section className='flex md:mt-20 flex-col items-center justify-center'>
				<div className='container mt-20 md:mt-2 mx-auto px-4 py-12 md:px-6 lg:py-24 space-y-6'>
					<div className='flex flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
						<div className='mx-auto max-w-md text-center'>
							<TiWarningOutline className='mx-auto h-12 w-12 text-prime' />
							<h1 className='mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl'>
								Oops, page not found!
							</h1>
							<p className='mt-4 text-muted-foreground'>
								The page you're looking for on meraPG.com
								doesn't exist. Let's get you back on track.
							</p>
							<div className='mt-6'>
								<Link
									to={"/"}
									className='inline-flex items-center rounded-md bg-prime px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-prime/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
									Go to Homepage
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
