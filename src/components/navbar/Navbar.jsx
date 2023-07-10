import React from "react";
import "./index.css";

const Navbar = () => {
	return (
		<header className="header sticky container flex justify-between items-center mx-auto py-3 px-4 drop-shadow-xl z-10">
			<div className="flex items-center">
				<img className="mr-2" src="/favicon.png" alt="logo" />
				<h2 className="text-xl">Confugiradores</h2>
			</div>

			<nav>
				<ul className="hidden sm:flex gap-4">
					<li>
						<a href="/home">Inicio</a>
					</li>
					<li>
						<a href="/services">Servicios</a>
					</li>
					<li>
						<a href="/contact">Contacto</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;

// import React from "react";
// import "./index.css";

// export default function Navbar() {
// 	return (
// 		<header className="header sticky container flex justify-between items-center mx-auto py-3 px-4 drop-shadow-xl z-10">
// 			<div className="flex items-center">
// 				<img className="mr-2" src="/favicon.png" alt="logo" />
// 				<h2 className="text-xl">Confugiradores</h2>
// 			</div>

// 			<nav>
// 				<ul className="hidden sm:flex gap-4">
// 					<li>
// 						<a href="/home">Inicio</a>
// 					</li>
// 					<li>
// 						<a href="/services">Servicios</a>
// 					</li>
// 					<li>
// 						<a href="/contact">Contacto</a>
// 					</li>
// 					<li>
// 						<a href="/login">Login</a>
// 					</li>
// 				</ul>
// 			</nav>
// 		</header>
// 	);
// }
