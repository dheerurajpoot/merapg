import React from "react";
import { Navigate } from "react-router-dom";

const OpenRoutes = ({ children }) => {
	const localUser = JSON.parse(localStorage.getItem("user"));
	return localUser?.token === undefined ? (
		children
	) : (
		<Navigate to={"/"} replace={true} />
	);
};

export default OpenRoutes;
