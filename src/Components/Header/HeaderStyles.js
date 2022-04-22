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
		props.backGroundColor ? "white" : "none"}; ;
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
		color: black;
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
