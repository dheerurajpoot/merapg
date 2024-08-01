import { api } from "@/api/api";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};

	const logout = async () => {
		setUser(null);
		try {
			await axios.get(`${api}/user/logout`, { withCredentials: true });
			localStorage.removeItem("user");
			setTimeout(() => {
				toast.success("Log out successfully!");
			}, 1000);
		} catch (error) {
			console.log("error in logout", error);
		}
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
