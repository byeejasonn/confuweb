import React from "react";
// import { OffsetButton } from "../button/OffsetButton";
import OffsetButton from "../button/OffsetButton";

const Slogan = ({ title, subtitle }) => {
	return (
		<>
			<div className="mx-auto max-w-2xl">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
					<p className="mt-6 text-lg leading-8">{subtitle}</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<OffsetButton text="Unete" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Slogan;

// import React from "react";
// import { OffsetButton } from "../button/OffsetButton";

// export default function Slogan({ title, subtitle }) {
// 	return (
// 		<>
// 			<div className="mx-auto max-w-2xl">
// 				<div className="text-center">
// 					<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
// 					<p className="mt-6 text-lg leading-8">{subtitle}</p>
// 					<div className="mt-10 flex items-center justify-center gap-x-6">
// 						<OffsetButton text="Unete" />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
