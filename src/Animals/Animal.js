import React from "react";

const animal = props => {
	return (
		<div>
			<h1>
				My animal hobies: {props.name} with {props.color} colors.
			</h1>
			<p>{props.children}</p>
		</div>
	);
};

export default animal;
