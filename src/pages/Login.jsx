import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<>
			<div className='flex min-h-[63dvh] flex-col items-center justify-center bg-background'>
				<div className='container mx-auto px-4 py-12 md:px-6 lg:py-24'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center md:items-start md:text-left'>
							<h1 className='text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl'>
								Welcome to MeraPG
							</h1>
							<p className='max-w-[600px] text-muted-foreground md:text-xl lg:text-base/relaxed xl:text-xl/relaxed'>
								Find your perfect PG rental with ease. Don't
								have an account?
							</p>
							<Link
								to='/signup'
								className='inline-flex h-10 items-center justify-center rounded-md bg-prime hover:bg-prime/80 px-6 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
								Register
							</Link>
						</div>
						<Card className='mx-auto w-full max-w-md'>
							<CardHeader className='space-y-1'>
								<CardTitle className='text-2xl'>
									Log In
								</CardTitle>
								<CardDescription>
									Enter your email and password to access your
									account.
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='space-y-2'>
									<Label htmlFor='email'>Email</Label>
									<Input
										id='email'
										type='email'
										placeholder='m@example.com'
										required
									/>
								</div>
								<div className='space-y-2'>
									<div className='flex items-center'>
										<Label htmlFor='password'>
											Password
										</Label>
										<Link
											href='#'
											className='ml-auto inline-block text-sm underline'>
											Forgot your password?
										</Link>
									</div>
									<Input
										id='password'
										type='password'
										required
									/>
								</div>
								<Button
									type='submit'
									className='w-full bg-prime hover:bg-prime/80'>
									Log In
								</Button>
							</CardContent>
							<CardFooter>
								<div className='text-center text-sm'>
									Don&apos;t have an account?{" "}
									<Link to='/signup' className='underline'>
										Sign up
									</Link>
								</div>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
