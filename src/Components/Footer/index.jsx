/* eslint-disable react/prop-types */
import React from "react";
import FooterList from "./FooterList";

function Footer({ data }) {
	const displayData = data[0].footerContent;
	return (
		<>
			<h1>Footer</h1>
			{displayData.map((d) => (
				<>
					<h4>{d.heading}</h4>
					<FooterList data={d.list} />
				</>
			))}
		</>
	);
}

export default Footer;
