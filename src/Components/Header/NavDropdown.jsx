/* eslint-disable react/prop-types */
import React from "react";
import { Container } from "./HeaderStyles";

function NavDropdown({ data }) {
	return (
		<Container>
			{data.map((d) => (
				<li>{d}</li>
			))}
		</Container>
	);
}

export default NavDropdown;
