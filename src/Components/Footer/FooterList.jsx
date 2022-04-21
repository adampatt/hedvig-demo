/* eslint-disable react/prop-types */
import React from "react";
import { capitalize } from "../../utils";

function FooterList({ data }) {
	return (
		<ul>
			{data.map((d) => (
				<li>{capitalize(d)}</li>
			))}
		</ul>
	);
}

export default FooterList;
