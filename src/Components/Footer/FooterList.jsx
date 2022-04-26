import React from "react";
import PropTypes, { string } from "prop-types";
import { capitalize } from "../../utils";

function FooterList({ data }) {
	return (
		<ul>
			{data.map((d) => (
				<li
					style={{ color: "white" }}
					key={d + Math.random()}
				>
					{capitalize(d)}
				</li>
			))}
		</ul>
	);
}

FooterList.propTypes = {
	data: PropTypes.arrayOf(string).isRequired,
};

export default FooterList;
