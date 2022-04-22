import styled from "@emotion/styled";
// import { mq } from "../utils";

// eslint-disable-next-line import/prefer-default-export
export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	border: 1px solid red;
	max-height: 75px;
`;

export const LogoContainer = styled.div`
	display: flex;
	width: 20%;
	padding-left: 1.5em;
	justify-content: flex-start;
	align-items: center;
`;

export const NavContainer = styled.nav`
	display: flex;
	width: 50%;
`;

export const NavList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding-top: 1.5em;
`;

export const Container = styled.ul`
	opacity: 1;
	visibility: hidden;
	transform: translateY(-20px);
	transition: all 0.3s ease-in-out;
	background-color: white;
	border-radius: 0.5em;
	width: 150%;
	li {
		display: flex;
		justify-content: center;
	}
`;

export const Nav = styled.nav`
	&:hover {
		& > ul {
			visibility: visible;
			opacity: 1;
			transform: translateY(-2px);
		}
	}
`;
