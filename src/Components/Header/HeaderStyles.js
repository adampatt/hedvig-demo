import styled from "@emotion/styled";
import { mq } from "../../utils";

export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	${mq.lg} {
		justify-content: flex-start;
		flex-direction: column;
	}
	width: 100%;
	justify-content: space-between;
	height: 75px;
	position: fixed;
	top: 0px;
	color: ${(props) =>
		props.backGroundColor ? "black" : "white"};
	background-color: ${(props) =>
		props.backGroundColor ? "white" : "none"};
	z-index: 10;
`;

export const LogoContainer = styled.div`
	${mq.lg} {
		visibility: hidden;
		display: none;
	}
	display: flex;
	width: 20%;
	padding-left: 1.5em;
	justify-content: flex-start;
	align-items: center;
	&:hover {
		cursor: pointer;
	}
`;

export const NavContainer = styled.nav`
	${mq.lg} {
		visibility: hidden;
		display: none;
	}
	display: flex;
	width: 50%;
	justify-content: flex-end;
`;

export const NavList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 1.5em 3em 0 0;
`;

export const Container = styled.ul`
	opacity: 1;
	visibility: hidden;
	transform: translateY(-20px);
	transition: all 0.3s ease-in-out;
	background-color: white;
	border-radius: 0.5em;
	width: 150%;
	padding: 1em 4em 1em 4em;
	li {
		display: flex;
		justify-content: center;
		color: black;
		padding: 1em 0 1em 0;
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

export const Hamburger = styled.div`
	visibility: hidden;
	display: none;
	${mq.lg} {
		visibility: visible;
		display: flex;
	}
	width: 5em;
	min-height: 5em;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 10;
	cursor: pointer;
`;

export const Burger = styled.div`
	height: 1em;
	border-radius: 3em;
	background-color: ${(props) =>
		props.barColor ? "black" : "white"};
	transform-origin: 1px;
	transition: all 0.3s linear;
`;

export const BurgerItemsContainer = styled.div`
	visibility: ${(props) =>
		props.hamburgerDisplay ? "hidden" : "visible"};
	padding: 3em 0 3em 3em;
	margin-top: 5em;
	transform: translateY(-20px);
	width: 20%;
	padding: 2em 0 2em 1em;
	margin-top: 1em;
	background-color: white;
	color: black;
	border-radius: 1em;
	${mq.md} {
		width: 40%;
	}
`;

export const BurgerItems = styled.div`
	padding: 1em 0 1em 1em;
`;
