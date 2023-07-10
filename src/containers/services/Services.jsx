import React from "react";

import { SimpleCard } from "../../components/index";

const services = [
	{
		id: 1,
		name: "Games Hosting Server",
		desc: "Hosteamos juegos para que puedas jugar con amigos ofreciendo la mejor asistencia"
	},
	{
		id: 2,
		name: "Web Hosting",
		desc: "Hosting de paginas web"
	},
	{
		id: 3,
		name: "Bot service",
		desc: "Tenemos un bot de discord el cual puede sincronizarse con tu cuenta de twitch y facilitar toda la adminsitración del servidor de disc."
	}
];

const Services = () => {
	return (
		<section className="flex items-center max-w-full h-screen">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{services.map(({ id, name, desc }) => {
					return <SimpleCard key={id} title={name} desc={desc} />;
				})}
			</div>
		</section>
	);
};

export default Services;

// import React from "react";
// import { SimpleCard } from "../../components/index";

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

// export default function Services() {
// 	return (
// 		<section className="flex items-center max-w-full h-screen">
// 			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// 				{services.map(({ id, name, desc }) => {
// 					return <SimpleCard id={id} title={name} desc={desc} />;
// 				})}
// 			</div>
// 		</section>
// 	);
// }
