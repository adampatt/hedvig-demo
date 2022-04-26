import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { ButtonStyled } from "./ButtonStyles";

export const Button = function Button({
	onClick,
	children,
	disabled,
	name,
	className,
}) {
	return (
		<ButtonStyled
			type="button"
			onClick={onClick}
			disabled={disabled}
			name={name}
			className={className}
		>
			{children}
		</ButtonStyled>
	);
};

export const OutlinedButton = styled(Button)`
	border: 1px solid black;
	background-color: transparent;
	padding: 1em;
	max-height: 4em;
`;

Button.defaultProps = {
	className: "",
	name: "",
	disabled: false,
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	name: PropTypes.string,
	className: PropTypes.string,
};
