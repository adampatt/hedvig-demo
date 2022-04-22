/* eslint-disable react/prop-types */
import React from "react";
import { Container } from "./HeaderStyles";

function NavDropdown({ data }) {
	return (
		<Container>
			{data.map((d) => (
				<li key={d + Math.random()}>{d}</li>
			))}
		</Container>
	);
}

export default NavDropdown;
