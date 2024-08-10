import { api } from "@/api/api";
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
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPasswordLink = () => {
	const [email, setEmail] = useState("");

	const handleReset = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				`${api}/user/reset-password-link`,
				{ email },
				{ withCredentials: true }
			);
			if (res.data.success) {
				toast.success(res.data?.message);
				setEmail("");
			}
		} catch (error) {
			console.log(error);
			toast.error(error.response?.data?.message);
		}
	};

	return (
		<>
			<div className='flex min-h-[63dvh] mt-20 flex-col items-center justify-center bg-background'>
				<div className='container mx-auto flex justify-center items-center px-4 py-12 md:px-6 lg:py-24'>
					<Card className='mx-auto w-full max-w-md'>
						<CardHeader className='space-y-1'>
							<CardTitle className='text-2xl'>
								Send Reset Link
							</CardTitle>
							<CardDescription>
								Enter your email to send password reset link to
								your registered email.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='flex items-center justify-center px-4 lg:px-6'>
								<div className='w-full max-w-md space-y-6'>
									<form
										className='space-y-4'
										onSubmit={handleReset}>
										<div className='space-y-2'>
											<Label htmlFor='email'>Email</Label>
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

										<Button
											type='submit'
											className='w-full bg-prime hover:bg-prime/90'>
											Send Reset Link
										</Button>
									</form>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<div className='text-center text-sm'>
								Know your passowrd?{" "}
								<Link to='/login' className='underline'>
									Login
								</Link>
							</div>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
};

export default ResetPasswordLink;
