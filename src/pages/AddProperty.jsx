import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const AddProperty = () => {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		availability: "",
		category: "",
		rent: "",
		area: "",
		location: "",
		services: "",
		ownerName: "",
		ownerContact: "",
		thumbnail: null,
		images: [],
	});

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = new FormData();
		for (const key in formData) {
			if (key === "images") {
				for (let i = 0; i < formData.images.length; i++) {
					data.append("images", formData.images[i]);
				}
			} else {
				data.append(key, formData[key]);
			}
		}

		try {
			console.log(formData);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<hr />
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
					<div>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight'>
							Add Your Property
						</h1>
						<p className='mt-4 text-muted-foreground'>
							Provide detailed information about your property
							listing on MeraPG.
						</p>
						<img
							src='/living.jpg'
							className='w-full h-[600px] object-cover rounded-lg my-3'
							alt='Add property banner'
						/>
					</div>
					<form className='grid gap-6' onSubmit={handleSubmit}>
						<div className='grid gap-2'>
							<Label htmlFor='title'>Title</Label>
							<Input
								id='title'
								type='text'
								placeholder='Enter title'
								value={formData.title}
								onChange={handleChange}
							/>
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='description'>Description</Label>
							<Textarea
								id='description'
								rows={4}
								placeholder='Describe your property'
								value={formData.description}
								onChange={handleChange}
							/>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='grid gap-2'>
								<Label htmlFor='availability'>
									Availability
								</Label>
								<Select
									id='availability'
									onValueChange={(value) =>
										setFormData({
											...formData,
											availability: value,
										})
									}>
									<SelectTrigger>
										<SelectValue placeholder='Select Availability' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='1'>1</SelectItem>
										<SelectItem value='2'>2</SelectItem>
										<SelectItem value='3'>3</SelectItem>
										<SelectItem value='4'>4</SelectItem>
										<SelectItem value='5+'>5+</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='category'>Category</Label>
								<Select
									id='category'
									onValueChange={(value) =>
										setFormData({
											...formData,
											category: value,
										})
									}>
									<SelectTrigger>
										<SelectValue placeholder='Select category' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='room'>
											Room
										</SelectItem>
										<SelectItem value='pg'>PG</SelectItem>
										<SelectItem value='apartment'>
											Apartment
										</SelectItem>
										<SelectItem value='house'>
											House
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='grid gap-2'>
								<Label htmlFor='rent'>Rent</Label>
								<Input
									id='rent'
									type='number'
									placeholder='Enter rent'
									value={formData.rent}
									onChange={handleChange}
								/>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='area'>Area (sq ft)</Label>
								<Input
									id='area'
									type='number'
									placeholder='Enter area'
									value={formData.area}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='grid gap-2'>
								<Label htmlFor='location'>Location</Label>
								<Input
									id='location'
									type='text'
									placeholder='Enter location'
									value={formData.location}
									onChange={handleChange}
								/>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='services'>Services</Label>
								<Input
									id='services'
									type='text'
									placeholder='Enter services'
									value={formData.services}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='grid gap-2'>
								<Label htmlFor='ownerName'>Owner Name</Label>
								<Input
									id='ownerName'
									type='text'
									placeholder='Enter owner name'
									value={formData.ownerName}
									onChange={handleChange}
								/>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='ownerContact'>
									Owner Contact
								</Label>
								<Input
									id='ownerContact'
									type='tel'
									placeholder='Enter owner contact'
									value={formData.ownerContact}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='thumbnail'>Thumbnail Image</Label>
							<Input
								id='thumbnail'
								type='file'
								onChange={handleChange}
							/>
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='images'>Property Images</Label>
							<Input
								id='images'
								type='file'
								multiple
								onChange={handleChange}
							/>
						</div>
						<Button
							type='submit'
							className='w-full bg-prime hover:bg-prime/90'>
							Add Property
						</Button>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddProperty;
