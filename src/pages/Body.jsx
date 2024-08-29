import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

const Body = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<ToastContainer
				position='top-center'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable
				pauseOnHover
				theme='colored'
				transition:Bounce
			/>
		</>
	);
};

export default Body;
