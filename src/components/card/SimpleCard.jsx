import React from "react";
import "./index.css";
const SimpleCard = ({ title, desc }) => {
	return (
		<div className="card block rounded-lg p-6 shadow-lg dark:bg-neutral-700">
			<h5 className="text-xl font-medium leading-tight">{title}</h5>
			<hr />
			<p className="my-4 text-base">{desc}</p>
		</div>
	);
};

export default SimpleCard;

// import React from "react";

// import "./index.css";

// export default function SimpleCard({ title, desc }) {
// 	return (
// 		<div class="card block rounded-lg p-6 shadow-lg dark:bg-neutral-700">
// 			<h5 class="text-xl font-medium leading-tight">{title}</h5>
// 			<hr />
// 			<p class="my-4 text-base">{desc}</p>
// 		</div>
// 	);
// }
