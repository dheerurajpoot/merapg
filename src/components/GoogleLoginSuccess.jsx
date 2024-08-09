import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { BACKEND_URL } from "@/api/api";
import { toast } from "react-toastify";

const GoogleLoginSuccess = () => {
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);

	const loginSuccess = async () => {
		try {
			const res = await axios.get(`${BACKEND_URL}/auth/me`, {
				withCredentials: true,
			});
			if (res.data.success) {
				login(res.data.user);
				toast.success("Logged in with Google!");
				navigate("/");
			}
		} catch (error) {
			console.log(error);
			navigate("/login");
		}
	};

	useEffect(() => {
		loginSuccess();
	}, [login, navigate]);

	return null;
};

export default GoogleLoginSuccess;
