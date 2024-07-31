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
import React from "react";

const AddProperty = () => {
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
					<form className='grid gap-6'>
						<div className='grid gap-2'>
							<Label htmlFor='name'>Title</Label>
							<Input
								id='name'
								type='text'
								placeholder='Enter title'
							/>
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='description'>Description</Label>
							<Textarea
								id='description'
								rows={4}
								placeholder='Describe your property'
							/>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='grid gap-2'>
								<Label htmlFor='availbility'>Availbility</Label>
								<Select id='availbility'>
									<SelectTrigger>
										<SelectValue placeholder='Select Availbility' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='1'>1</SelectItem>
										<SelectItem value='2'>2</SelectItem>
										<SelectItem value='3'>3</SelectItem>
										<SelectItem value='4'>4</SelectItem>
										<SelectItem value='5'>5+</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='category'>Category</Label>
								<Select id='category'>
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
								/>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='area'>Area (sq ft)</Label>
								<Input
									id='area'
									type='number'
									placeholder='Enter area'
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
								/>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='services'>Services</Label>
								<Input
									id='services'
									type='text'
									placeholder='Enter services'
								/>
							</div>
						</div>
						<div className='grid grid-cols-2 gap-4'>
							<div className='grid gap-2'>
								<Label htmlFor='owner-name'>Owner Name</Label>
								<Input
									id='owner-name'
									type='text'
									placeholder='Enter owner name'
								/>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='owner-contact'>
									Owner Contact
								</Label>
								<Input
									id='owner-contact'
									type='tel'
									placeholder='Enter owner contact'
								/>
							</div>
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='thumbnail'>Thumbnail Image</Label>
							<Input id='thumbnail' type='file' />
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='images'>Property Images</Label>
							<Input id='images' type='file' multiple />
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
