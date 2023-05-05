import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { LandingPage, ProductDetailPage, ProductsPage } from "../Pages";
import { NavBar } from "../components";

export const MyRoutes = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<LandingPage />} />
				<Route exact path="/products" element={<ProductsPage />} />
				<Route exact path="/products/:productId" element={<ProductDetailPage />} />


				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
};
