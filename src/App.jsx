import React from "react";

import { Slogan, Navbar } from "./components";
import { Services } from "./containers";

const App = () => {
	return (
		<>
			<Navbar />
			<main className="main mx-auto px-4 container flex flex-col items-center justify-center z-10">
				<section className="main-header flex items-center max-w-full h-screen">
					<Slogan title="CONFUGIRADORES" subtitle="Hosteamos tus juegos favoritos o incluso páginas webs, fácil para todos." />
				</section>
				<Services />
				{/* <section className="flex items-center max-w-full h-screen">
 					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
 						{services.map(({ id, name, desc }) => {
 							return <SimpleCard id={id} title={name} desc={desc} />;
 						})}
 					</div>
 				</section> */}
			</main>
		</>
	);
};

export default App;

// import React from "react";
// import { Navbar } from "./components/navbar/Navbar";
// import { Slogan } from "./components/slogan/Slogan";
// import { SimpleCard } from "./components/card/SimpleCard";

// import { Navbar, Slogan } from "./components";

// import { Services } from "./containers";

// const services = [
// 	{
// 		id: 1,
// 		name: "Games Hosting Server",
// 		desc: "Hosteamos juegos para que puedas jugar con amigos ofreciendo la mejor asistencia"
// 	},
// 	{
// 		id: 2,
// 		name: "Web Hosting",
// 		desc: "Hosting de paginas web"
// 	},
// 	{
// 		id: 3,
// 		name: "Bot service",
// 		desc: "Tenemos un bot de discord el cual puede sincronizarse con tu cuenta de twitch y facilitar toda la adminsitración del servidor de disc."
// 	}
// ];

// export default App = () => {
// 	return (
// 		<>
// 			<Navbar />

// 			<main className="main mx-auto px-4 container flex flex-col items-center justify-center z-10">
// 				<section className="main-header flex items-center max-w-full h-screen">
// 					<Slogan title="CONFUGIRADORES" subtitle="Hosteamos tus juegos favoritos o incluso páginas webs, fácil para todos." />
// 				</section>

// 				<Services />
// 				{/* <section className="flex items-center max-w-full h-screen">
// 					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// 						{services.map(({ id, name, desc }) => {
// 							return <SimpleCard id={id} title={name} desc={desc} />;
// 						})}
// 					</div>
// 				</section> */}
// 			</main>
// 		</>
// 	);
// };
