import { api } from "@/api/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [newReview, setNewReview] = useState({
		name: "",
		email: "",
		rating: 0,
		review: "",
	});
	const [sortBy, setSortBy] = useState("rating");

	// post a review
	const handleSubmitReview = async () => {
		try {
			const res = await axios.post(`${api}/review`, newReview, {
				withCredentials: true,
			});
			if (res.data.success) {
				getReview();
			}
			setNewReview({
				name: "",
				email: "",
				rating: 0,
				review: "",
			});
		} catch (error) {
			console.log(error);
			toast.error(error.response?.data?.message);
		}
	};

	// get reivew
	const getReview = async () => {
		try {
			const res = await axios.get(`${api}/review`, {
				withCredentials: true,
			});
			setReviews(res?.data?.reviews);
		} catch (error) {
			console.log(error);
			toast.error(error.response?.data?.message);
		}
	};

	// sort review
	const sortedReviews = useMemo(() => {
		return [...reviews].sort((a, b) => {
			if (sortBy === "rating") {
				return b.rating - a.rating;
			} else {
				return new Date(b.createdAt) - new Date(a.createdAt);
			}
		});
	}, [reviews, sortBy]);

	useEffect(() => {
		window.scrollTo(0, 0);
		getReview();
	}, []);
	return (
		<>
			<section className='flex md:mt-20 flex-col items-center justify-center'>
				<div className='container mt-20 md:mt-2 mx-auto px-4 py-12 md:px-24 lg:py-24 space-y-6'>
					<div className='grid gap-12'>
						<div>
							<h2 className='text-3xl font-bold mb-4'>
								Submit a Review
							</h2>
							<div className='grid md:grid-cols-2 gap-6'>
								<div className='grid gap-4'>
									<div className='grid gap-2'>
										<Label htmlFor='name'>Name</Label>
										<Input
											id='name'
											placeholder='Enter name'
											value={newReview.name}
											onChange={(e) =>
												setNewReview({
													...newReview,
													name: e.target.value,
												})
											}
										/>
									</div>
									<div className='grid gap-2'>
										<Label htmlFor='email'>Email</Label>
										<Input
											id='email'
											placeholder='Enter email'
											type='email'
											value={newReview.email}
											onChange={(e) =>
												setNewReview({
													...newReview,
													email: e.target.value,
												})
											}
										/>
									</div>
								</div>
								<div className='grid gap-4'>
									<div className='grid gap-2'>
										<Label htmlFor='rating'>Rating</Label>
										<Input
											id='rating'
											type='number'
											placeholder='Enter star rating'
											value={newReview.rating}
											onChange={(e) =>
												setNewReview({
													...newReview,
													rating: Number(
														e.target.value
													),
												})
											}
										/>
									</div>
									<div className='grid gap-2'>
										<Label htmlFor='review'>Review</Label>
										<Textarea
											id='review'
											placeholder='Type your review...'
											rows={4}
											value={newReview.review}
											onChange={(e) =>
												setNewReview({
													...newReview,
													review: e.target.value,
												})
											}
										/>
									</div>
								</div>
							</div>
							<div className='flex justify-end mt-4'>
								<Button
									onClick={handleSubmitReview}
									className='bg-prime hover:bg-prime/80'>
									Submit Review
								</Button>
							</div>
						</div>
						<div>
							<div className='flex items-center justify-between mb-4'>
								<h2 className='text-3xl font-bold'>
									User Reviews
								</h2>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button
											variant='outline'
											className='flex items-center gap-2'>
											<ListOrderedIcon className='w-4 h-4' />
											Sort by:{" "}
											{sortBy === "rating"
												? "Rating"
												: "Date"}
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align='end'>
										<DropdownMenuItem
											onSelect={() =>
												setSortBy("rating")
											}>
											Rating
										</DropdownMenuItem>
										<DropdownMenuItem
											onSelect={() => setSortBy("date")}>
											Date
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
							<div className='grid gap-6'>
								{sortedReviews.map((review, index) => (
									<Card key={index} className='p-6'>
										<div className='flex items-start justify-between'>
											<div className='grid gap-2'>
												<div className='flex items-center gap-2'>
													<Avatar className='w-8 h-8'>
														<AvatarImage
															src='/placeholder-user.jpg'
															alt={review.name}
														/>
														<AvatarFallback>
															{review.name
																.charAt(0)
																.toUpperCase()}
														</AvatarFallback>
													</Avatar>
													<div className='font-medium'>
														{review.name}
													</div>
												</div>
												<div className='flex items-center gap-2 text-sm'>
													{[
														...Array(review.rating),
													].map((_, index) => (
														<StarIcon
															key={index}
															className='w-4 h-4 fill-prime'
														/>
													))}
													{[
														...Array(
															5 - review.rating
														),
													].map((_, index) => (
														<StarIcon
															key={index}
															className='w-4 h-4 fill-muted stroke-muted-foreground'
														/>
													))}
												</div>
											</div>
											<div className='text-sm text-muted-foreground'>
												{new Date(
													review.createdAt
												).toLocaleDateString()}
											</div>
										</div>
										<div className='mt-4 text-muted-foreground'>
											{review.review}
										</div>
									</Card>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

function ListOrderedIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<line x1='10' x2='21' y1='6' y2='6' />
			<line x1='10' x2='21' y1='12' y2='12' />
			<line x1='10' x2='21' y1='18' y2='18' />
			<path d='M4 6h1v4' />
			<path d='M4 10h2' />
			<path d='M6 18H4c0-1 2-2 2-3s-1-1.5-2-1' />
		</svg>
	);
}

function StarIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'>
			<polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
		</svg>
	);
}

export default Reviews;
