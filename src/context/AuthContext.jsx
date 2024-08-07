import { api } from "@/api/api";
import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
		getUserProfile();
	}, []);

	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};

	const getUserProfile = async () => {
		try {
			if (!user) return;
			const res = await axios.get(`${api}/user/profile`, {
				withCredentials: true,
			});
			if (res.data.success) {
				setProfile(res.data.user);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const logout = async () => {
		setUser(null);
		try {
			await axios.get(`${api}/user/logout`, { withCredentials: true });
			localStorage.removeItem("user");
			setTimeout(() => {
				toast.success("Log out successfully!");
				window.location.reload();
			}, 500);
		} catch (error) {
			console.log("error in logout", error);
		}
	};

	return (
		<AuthContext.Provider value={{ user, profile, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
