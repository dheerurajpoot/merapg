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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { api, BACKEND_URL } from "@/api/api";
import { toast } from "react-toastify";

const Signup = () => {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		let data = {
			name,
			email,
			password,
		};
		try {
			setLoading(true);
			const res = await axios.post(`${api}/user/register`, data);
			setTimeout(() => {
				if (res.data.success) {
					setLoading(false);
					toast.success(res.data?.message);
					navigate("/login");
				}
			}, 600);
		} catch (error) {
			setLoading(false);
			console.log(error);
			toast.error(error.response?.data?.message);
		}
	};

	const handleGoogleLogin = () => {
		window.location.href = `${BACKEND_URL}/auth/google`;
	};

	return (
		<>
			<div className='flex md:mt-20 flex-col items-center justify-center bg-background'>
				<div className='container mt-20 md:mt-2 mx-auto px-4 py-12 md:px-6 lg:py-24'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center md:items-start md:text-left'>
							<h1 className='text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl'>
								Welcome to MeraPG
							</h1>
							<p className='max-w-[600px] text-muted-foreground md:text-xl lg:text-base/relaxed xl:text-xl/relaxed'>
								Already have an Account Log in here
							</p>
							<Link
								to='/login'
								className='inline-flex h-10 items-center justify-center rounded-md bg-prime hover:bg-prime/80 px-6 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
								Log In
							</Link>
						</div>
						<Card className='mx-auto w-full max-w-md'>
							<CardHeader className='space-y-1'>
								<CardTitle className='text-2xl'>
									Register here
								</CardTitle>
								<CardDescription>
									Enter your name, email and password to
									Register.
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='flex items-center justify-center px-4 lg:px-6'>
									<div className='w-full max-w-md space-y-6'>
										<Button
											variant='outline'
											onClick={handleGoogleLogin}
											className='w-full'>
											<FcGoogle className='mr-2 h-5 w-5' />
											Sign up with Gmail
										</Button>
										<div className='relative'>
											<div className='absolute inset-0 flex items-center'>
												<span className='w-full border-t' />
											</div>
											<div className='relative flex justify-center text-xs uppercase'>
												<span className='bg-background px-2 text-muted-foreground'>
													Or continue with
												</span>
											</div>
										</div>
										<form
											className='space-y-4'
											onSubmit={handleRegister}>
											<div className='space-y-2'>
												<Label htmlFor='name'>
													Name
												</Label>
												<Input
													id='name'
													placeholder='Enter name'
													required
													value={name}
													onChange={(e) =>
														setName(e.target.value)
													}
												/>
											</div>
											<div className='space-y-2'>
												<Label htmlFor='email'>
													Email
												</Label>
												<Input
													id='email'
													type='email'
													placeholder='Enter email'
													required
													value={email}
													onChange={(e) =>
														setEmail(e.target.value)
													}
												/>
											</div>
											<div className='space-y-2'>
												<Label htmlFor='password'>
													Password
												</Label>
												<Input
													id='password'
													type='password'
													placeholder='Enter password'
													required
													value={password}
													onChange={(e) =>
														setPassword(
															e.target.value
														)
													}
												/>
											</div>
											<Button
												type='submit'
												className='w-full bg-prime hover:bg-prime/90'>
												{loading
													? "Processing..."
													: "Sign Up"}
											</Button>
										</form>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<div className='text-center text-sm'>
									Already have an account?{" "}
									<Link to='/login' className='underline'>
										Log In
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

export default Signup;
