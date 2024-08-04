import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import { api } from "@/api/api";

const Profile = () => {
	const fileInputRef = useRef(null);
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		profilePic: null,
	});

	const getUserProfile = async () => {
		try {
			const res = await axios.get(`${api}/user/profile`, {
				withCredentials: true,
			});
			if (res.data.success) {
				setUser(res.data.user);
				setFormData({
					name: res.data.user.name,
					email: res.data.user.email,
					profilePic: null,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUserProfile();
	}, []);

	const handleChange = (e) => {
		const { id, value, type, files } = e.target;
		if (type === "file") {
			setFormData({
				...formData,
				[id]: files,
			});
		} else {
			setFormData({
				...formData,
				[id]: value,
			});
		}
	};

	const handleUpdatePhotoClick = () => {
		fileInputRef.current.click();
	};

	const updateProfile = async () => {
		const data = new FormData();
		for (const key in formData) {
			if (key === "profilePic") {
				if (formData.profilePic && formData.profilePic.length > 0) {
					data.append("profilePic", formData.profilePic[0]);
				}
			} else {
				data.append(key, formData[key]);
			}
		}

		try {
			setLoading(true);
			const res = await axios.put(`${api}/user/updateprofile`, data, {
				withCredentials: true,
			});
			if (res?.data?.success) {
				toast.success(res?.data?.message);
				getUserProfile();
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			toast.error(error.response?.data?.message);
		}
	};

	return (
		<>
			<div className='max-w-4xl mx-auto p-6 sm:p-8 md:p-10'>
				<div className='flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10'>
					<div className='flex flex-col items-center gap-4 rounded-lg shadow-md p-6'>
						<Avatar className='w-24 h-24 border-2 border-primary'>
							<AvatarImage src={user?.profilePic} />
							<AvatarFallback>DR</AvatarFallback>
						</Avatar>
						<div className='grid gap-1 text-center'>
							<div className='text-xl font-semibold'>
								{user?.name}
							</div>
							<div className='text-muted-foreground'>
								{user?.email}
							</div>
						</div>
						<div className='flex gap-2'>
							<Button
								variant='outline'
								size='sm'
								onClick={handleUpdatePhotoClick}>
								<FaCamera className='w-4 h-4 mr-2' />
								Update Photo
							</Button>
							<input
								type='file'
								id='profilePic'
								ref={fileInputRef}
								style={{ display: "none" }}
								onChange={handleChange}
							/>
							<Button variant='outline' size='sm'>
								<IoKeyOutline className='w-4 h-4 mr-2' />
								Reset Password
							</Button>
						</div>
						<div className='mt-6 space-y-4'>
							<div>
								<Label htmlFor='name'>Name</Label>
								<Input
									id='name'
									value={formData.name}
									onChange={handleChange}
								/>
							</div>
							<div>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									value={formData.email}
									onChange={handleChange}
								/>
							</div>
							<Button
								onClick={updateProfile}
								className='bg-prime'>
								{loading ? "Updating..." : "Update Profile"}
							</Button>
						</div>
					</div>
					<div className='flex-1'>
						<div className='grid gap-6'>
							<div>
								<h2 className='text-2xl font-semibold'>
									Your PG Listings
								</h2>
								<Separator className='my-4' />
								<div className='grid gap-4'>
									<Card>
										<CardHeader>
											<CardTitle>
												Cozy Studio Apartment
											</CardTitle>
											<CardDescription>
												<span className='flex items-center gap-2'>
													<FaMapMarkerAlt className='w-4 h-4' />
													<span>
														Bangalore, India
													</span>
												</span>
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className='grid gap-2'>
												<div className='flex items-center justify-between'>
													<span>Rent</span>
													<span>₹12,000/month</span>
												</div>
												<div className='flex items-center justify-between'>
													<span>Occupancy</span>
													<span>1-2 persons</span>
												</div>
												<div className='flex items-center justify-between'>
													<span>Amenities</span>
													<span>
														Wifi, AC, Kitchenette
													</span>
												</div>
											</div>
										</CardContent>
										<CardFooter>
											<div className='flex justify-end gap-2'>
												<Button
													variant='outline'
													size='sm'>
													Edit
												</Button>
												<Button
													variant='destructive'
													size='sm'>
													Delete
												</Button>
											</div>
										</CardFooter>
									</Card>
									<Card>
										<CardHeader>
											<CardTitle>
												Spacious 2BHK Apartment
											</CardTitle>
											<CardDescription>
												<span className='flex items-center gap-2'>
													<FaMapMarkerAlt className='w-4 h-4' />
													<span>Mumbai, India</span>
												</span>
											</CardDescription>
										</CardHeader>
										<CardContent>
											<div className='grid gap-2'>
												<div className='flex items-center justify-between'>
													<span>Rent</span>
													<span>₹25,000/month</span>
												</div>
												<div className='flex items-center justify-between'>
													<span>Occupancy</span>
													<span>2-4 persons</span>
												</div>
												<div className='flex items-center justify-between'>
													<span>Amenities</span>
													<span>
														Wifi, AC, Balcony,
														Parking
													</span>
												</div>
											</div>
										</CardContent>
										<CardFooter>
											<div className='flex justify-end gap-2'>
												<Button
													variant='outline'
													size='sm'>
													Edit
												</Button>
												<Button
													variant='destructive'
													size='sm'>
													Delete
												</Button>
											</div>
										</CardFooter>
									</Card>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
