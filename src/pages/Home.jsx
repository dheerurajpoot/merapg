import { api } from "@/api/api";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Properties from "@/components/Properties";
import Sortabout from "@/components/Sortabout";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
	const [city, setCity] = useState("");
	const [showDialog, setShowDialog] = useState(false);
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowDialog(true);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setShowDialog(false);
		await getProperties();
	};

	const getProperties = async () => {
		try {
			const res = await axios.get(`${api}/properties/?city=${city}`);
			if (!res.data.success) return;
			setProperties(res.data.properties);
		} catch (error) {
			console.log(error);
			toast.error(error.response?.data?.message);
		}
	};

	return (
		<>
			{showDialog && (
				<Dialog defaultOpen>
					<DialogContent className='sm:max-w-[425px]'>
						<DialogHeader>
							<DialogTitle>Welcome!</DialogTitle>
							<DialogDescription>
								Please enter your city name to get started.
							</DialogDescription>
						</DialogHeader>
						<form onSubmit={handleSubmit} className='space-y-4'>
							<div className='space-y-2'>
								<Label htmlFor='city'>City</Label>
								<Input
									id='city'
									placeholder='Enter your city'
									value={city}
									onChange={(e) => setCity(e.target.value)}
								/>
							</div>
							<DialogFooter>
								<Button
									type='submit'
									className='bg-prime hover:bg-prime/80'>
									Submit
								</Button>
							</DialogFooter>
						</form>
					</DialogContent>
				</Dialog>
			)}
			<div>
				<Hero />
			</div>
			<div>
				<Properties data={properties} />
			</div>
			<hr />
			<div className='my-10'>
				<Sortabout />
			</div>
			<hr />
			<div className='my-10'>
				<Newsletter />
			</div>
		</>
	);
};

export default Home;
