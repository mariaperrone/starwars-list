import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/" />
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
							style={{ width: "70px" }}
						/>
					</span>
				</Link>
			</div>
		</nav>
	);
};
