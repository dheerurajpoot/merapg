import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
	const localuser = JSON.parse(localStorage.getItem("user"));
	return localuser?.token !== undefined ? (
		children
	) : (
		<Navigate to={"/login"} replace={true} />
	);
};

export default ProtectedRoutes;
