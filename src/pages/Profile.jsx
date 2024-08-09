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
import { toast } from "react-toastify";
import axios from "axios";
import { api } from "@/api/api";
import { AuthContext } from "@/context/AuthContext";

const Profile = () => {
	const fileInputRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [preview, setPreview] = useState(null);
	const [properties, setProperties] = useState([]);
	const { user, login } = useContext(AuthContext);
	const [formData, setFormData] = useState({
		name: user?.name || "",
		email: user?.email || "",
		profilePic: null,
	});

	useEffect(() => {
		setFormData({
			name: user?.name || "",
			email: user?.email || "",
			profilePic: null,
		});
	}, [user?._id]);

	const handleChange = (e) => {
		const { id, value, type, files } = e.target;
		if (type === "file") {
			setFormData({
				...formData,
				[id]: files,
			});
			// Preview the selected image
			const file = files[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			if (file) {
				reader.readAsDataURL(file);
			}
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
			console.log(res.data);
			if (res?.data?.success) {
				toast.success(res?.data?.message);
				localStorage.removeItem("user");
				login(res?.data?.user);
				setPreview(null);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
			toast.error(error.response?.data?.message);
		}
	};

	// get user property
	const userId = user?._id;
	const getUserProperty = async () => {
		try {
			if (!userId) return;
			const res = await axios.post(
				`${api}/properties/userprop`,
				{ userId },
				{
					withCredentials: true,
				}
			);
			if (res.data.success) {
				setProperties(res?.data?.properties);
			}
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getUserProperty();
	}, [userId]);

	return (
		<>
			<section className='w-full py-12 mt-16 md:py-16 lg:py-20'>
				<div className='container mx-auto p-6 sm:p-8 md:p-10'>
					<div className='flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10'>
						<div className='flex flex-col items-center gap-4 rounded-lg shadow-md p-6'>
							<Avatar className='w-24 h-24 border-2 border-primary'>
								<AvatarImage
									src={preview || user?.profilePic}
									className='object-cover'
								/>
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
									className='bg-prime hover:bg-prime/80'>
									{loading
										? "Profile Updating..."
										: "Update Profile"}
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
									{properties.length == 0 && (
										<span>No property found</span>
									)}
									<div className='grid gap-4'>
										{properties.map((property, index) => (
											<Card key={index}>
												<CardHeader>
													<CardTitle>
														{property?.title}
													</CardTitle>
													<CardDescription>
														<span className='flex items-center gap-2'>
															<FaMapMarkerAlt className='w-4 h-4' />
															<span>
																{
																	property?.location
																}
															</span>
														</span>
													</CardDescription>
												</CardHeader>
												<CardContent>
													<div className='grid gap-2'>
														<div className='flex items-center justify-between'>
															<span>Rent</span>
															<span>
																₹
																{property?.rent}
																/month
															</span>
														</div>
														<div className='flex items-center justify-between'>
															<span>
																Availability
															</span>
															<span>
																{
																	property?.availability
																}
															</span>
														</div>
														<div className='flex items-center justify-between'>
															<span>
																Services
															</span>
															<span>
																{
																	property?.services
																}
															</span>
														</div>
														<div className='flex items-center justify-between'>
															<span>
																Category
															</span>
															<span>
																{
																	property?.category
																}
															</span>
														</div>
													</div>
												</CardContent>
												<CardFooter>
													<div className='flex justify-end gap-2'>
														<Button
															className='bg-prime hover:bg-prime/80'
															size='sm'>
															Booked
														</Button>
														<Button
															variant='destructive'
															size='sm'>
															Delete
														</Button>
													</div>
												</CardFooter>
											</Card>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Profile;
