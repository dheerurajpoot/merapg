import { api } from "@/api/api";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const location = useLocation();
	const token = location.pathname.split("/")[2];

	const handleForgot = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		try {
			const res = await axios.post(`${api}/user/reset-password`, {
				token,
				password,
			});
			if (res.data?.success) {
				toast.success(res.data?.message);
				setError("");
				setPassword("");
				setConfirmPassword("");
			} else {
				toast.error(res.data?.message);
				setError("Failed to update password");
			}
		} catch (error) {
			console.error(error);
			toast.error(error.response.data?.message);
			setError("An error occurred while updating the password");
		}
	};

	return (
		<>
			<div className='flex md:mt-20 flex-col items-center justify-center bg-background'>
				<div className='container mt-20 md:mt-2 mx-auto flex justify-center items-center px-4 py-12 md:px-6 lg:py-24'>
					<Card className='mx-auto w-full max-w-md'>
						<CardHeader className='space-y-1'>
							<CardTitle className='text-2xl'>
								Set New Password
							</CardTitle>
							<CardDescription>
								Enter your new password to set it.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div className='flex items-center justify-center px-4 lg:px-6'>
								<div className='w-full max-w-md space-y-6'>
									<form
										className='space-y-4'
										onSubmit={handleForgot}>
										<div className='space-y-2'>
											<Label htmlFor='password'>
												New Password
											</Label>
											<Input
												id='password'
												type='password'
												placeholder='Enter new password'
												required
												value={password}
												onChange={(e) =>
													setPassword(e.target.value)
												}
											/>
										</div>
										<div className='space-y-2'>
											<Label htmlFor='confirmPassword'>
												Confirm Password
											</Label>
											<Input
												id='confirmPassword'
												type='password'
												placeholder='Confirm new password'
												required
												value={confirmPassword}
												onChange={(e) =>
													setConfirmPassword(
														e.target.value
													)
												}
											/>
										</div>

										{error && (
											<p className='text-prime'>
												{error}
											</p>
										)}

										<Button
											type='submit'
											className='w-full bg-prime hover:bg-prime/90'>
											Update Password
										</Button>
									</form>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
