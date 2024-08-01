import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./pages/Body";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PropertyDetails from "./pages/PropertyDetails";
import BlogOverview from "./pages/BlogOverview";
import AddProperty from "./pages/AddProperty";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./routing/ProtectedRoutes";
import OpenRoutes from "./routing/OpenRoutes";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Body />}>
						<Route index element={<Home />} />
						<Route path='/blog' element={<Blogs />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/about' element={<About />} />
						<Route path='/faq' element={<Faq />} />
						<Route
							path='/profile'
							element={
								<ProtectedRoutes>
									<Profile />
								</ProtectedRoutes>
							}
						/>
						<Route
							path='/login'
							element={
								<OpenRoutes>
									<Login />
								</OpenRoutes>
							}
						/>
						<Route
							path='/signup'
							element={
								<OpenRoutes>
									<Signup />
								</OpenRoutes>
							}
						/>
						<Route
							path='/addproperty'
							element={
								<ProtectedRoutes>
									<AddProperty />
								</ProtectedRoutes>
							}
						/>
						<Route
							path='/property/:id'
							element={
								<ProtectedRoutes>
									<PropertyDetails />
								</ProtectedRoutes>
							}
						/>
						<Route path='/blog/:id' element={<BlogOverview />} />
						<Route
							path='/privacy-policy'
							element={<PrivacyPolicy />}
						/>
						<Route
							path='/terms-conditions'
							element={<TermsConditions />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
