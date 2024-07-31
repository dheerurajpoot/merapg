import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { FaMapMarkerAlt } from "react-icons/fa";

const roomsData = [
	{
		_id: "1",
		title: "Cozy Studio Apartment",
		image: "/bedroom.jpg",
		category: "PG",
		area: "300 sq ft",
		rent: "$500/month",
		availability: "2 rooms",
		location: "kalyanpur, Kanpur",
	},
	{
		_id: "2",
		title: "Spacious 1BHK Apartment",
		image: "/living.jpg",
		category: "PG",
		area: "500 sq ft",
		rent: "$800/month",
		availability: "1 room",
		location: "Ravatpur, Kanpur",
	},
	{
		_id: "3",
		title: "Furnished Studio Flat",
		image: "/funiture.jpg",
		category: "PG",
		area: "250 sq ft",
		rent: "$450/month",
		availability: "3 rooms",
		location: "Panki, Kanpur",
	},
	{
		_id: "4",
		title: "Deluxe 2BHK Apartment",
		image: "/living.jpg",
		category: "Apartment",
		area: "800 sq ft",
		rent: "$1200/month",
		availability: "1 room",
		location: "Gurdev, Kanpur",
	},
	{
		_id: "5",
		title: "Shared Accommodation",
		image: "/funiture.jpg",
		category: "Shared",
		area: "150 sq ft",
		rent: "$300/month",
		availability: "5 rooms",
		location: "kalyanpur, Kanpur",
	},
	{
		_id: "6",
		title: "Luxury Studio Apartment",
		image: "/living.jpg",
		category: "PG",
		area: "400 sq ft",
		rent: "$700/month",
		availability: "2 rooms",
		location: "IIT, Kanpur",
	},
	{
		_id: "7",
		title: "Cozy 1BHK Apartment",
		image: "/bedroom.jpg",
		category: "PG",
		area: "400 sq ft",
		rent: "$650/month",
		availability: "3 rooms",
		location: "kalyanpur, Kanpur",
	},
	{
		_id: "8",
		title: "Spacious 2BHK Apartment",
		image: "/funiture.jpg",
		category: "PG",
		area: "700 sq ft",
		rent: "$1000/month",
		availability: "2 rooms",
		location: "kalyanpur, Kanpur",
	},
	{
		_id: "9",
		title: "Spacious 2BHK Apartment",
		image: "/bedroom.jpg",
		category: "PG",
		area: "700 sq ft",
		rent: "$1000/month",
		availability: "2 rooms",
		location: "Kakadeo, Kanpur",
	},
];

export default function Properties() {
	const [properties, setProperties] = useState(roomsData);
	const [filters, setFilters] = useState({
		budget: 0,
		propertyType: "All",
	});

	const handleFilterChange = (key, value) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			[key]: value,
		}));
	};

	const filteredProperties = useMemo(() => {
		return properties.filter((property) => {
			const rentValue = parseInt(
				property.rent.replace(/[^0-9]/g, ""),
				10
			);
			if (filters.budget > 0 && rentValue > filters.budget) {
				return false;
			}
			if (
				filters.propertyType !== "All" &&
				property.category !== filters.propertyType
			) {
				return false;
			}
			return true;
		});
	}, [properties, filters]);

	return (
		<section className='w-full py-12 md:py-16 lg:py-20'>
			<div className='container grid gap-8 px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Explore Our Available Rooms
						</h2>
						<p className='max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Browse through our selection of comfortable and
							affordable rooms to find the perfect fit for your
							needs.
						</p>
					</div>
				</div>
				<div className='flex md:justify-end justify-center items-end md:items-center gap-4 mb-3'>
					<div className='grid items-center gap-2'>
						<Label htmlFor='budget' className='text-sm font-medium'>
							Budget
						</Label>
						<Input
							id='budget'
							type='number'
							placeholder='Enter budget'
							value={filters.budget}
							onChange={(e) =>
								handleFilterChange(
									"budget",
									parseInt(e.target.value, 10)
								)
							}
						/>
					</div>
					<div className='grid gap-2'>
						<Label
							htmlFor='property-type'
							className='text-sm font-medium'>
							Property Type
						</Label>
						<Select
							id='property-type'
							value={filters.propertyType}
							onValueChange={(value) =>
								handleFilterChange("propertyType", value)
							}>
							<SelectTrigger>
								<SelectValue placeholder='Select property type' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='All'>All</SelectItem>
								<SelectItem value='Apartment'>
									Apartment
								</SelectItem>
								<SelectItem value='Flat'>Flat</SelectItem>
								<SelectItem value='PG'>PG</SelectItem>
								<SelectItem value='Studio'>Studio</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{filteredProperties.map((room, index) => (
						<div
							key={index}
							className='group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl'>
							<Link
								to={`/property/${room._id}`}
								className='absolute inset-0 z-10'>
								<span className='sr-only'>View Room</span>
							</Link>
							<img
								src={room.image}
								alt={room.title}
								width={600}
								height={400}
								className='h-48 w-full object-cover transition-all group-hover:scale-105'
							/>
							<div className='space-y-2 p-4'>
								<h3 className='text-lg font-semibold'>
									{room.title}
								</h3>
								<div className='flex items-center gap-1'>
									<FaMapMarkerAlt className='text-prime' />
									<p className='text-sm'>{room.location}</p>
								</div>
								<div className='flex items-center justify-between'>
									<div className='text-sm text-muted-foreground'>
										<span className='font-medium'>
											Category:
										</span>{" "}
										{room.category}
									</div>
									<div className='text-sm text-muted-foreground'>
										<span className='font-medium'>
											Area:
										</span>{" "}
										{room.area}
									</div>
								</div>
								<div className='flex items-center justify-between'>
									<div className='text-sm text-muted-foreground'>
										<span className='font-medium'>
											Rent:
										</span>{" "}
										{room.rent}
									</div>
									<div className='text-sm text-muted-foreground'>
										<span className='font-medium'>
											Availability:
										</span>{" "}
										{room.availability}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
