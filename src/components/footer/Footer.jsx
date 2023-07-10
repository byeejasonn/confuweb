import React from "react";

const Footer = () => {
	return (
		<header className="header container mx-auto py-3 flex justify-between items-center">
			<div className="flex items-center">
				<img className="mr-2" src="/favicon.png" alt="logo" />
				<h2 className="text-xl">Confugiradores</h2>
			</div>

			<nav>
				<ul>
					<li>
						<a href="/home">Inicio</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Footer;

// import React from "react";

// export default function Header() {
// 	return (
// 		<header className="header container mx-auto py-3 flex justify-between items-center">
// 			<div className="flex items-center">
// 				<img className="mr-2" src="/favicon.png" alt="logo" />
// 				<h2 className="text-xl">Confugiradores</h2>
// 			</div>

// 			<nav>
// 				<ul>
// 					<li>
// 						<a href="/home">Inicio</a>
// 					</li>
// 				</ul>
// 			</nav>
// 		</header>
// 	);
// }
