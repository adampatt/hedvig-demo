import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
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
