import styled from "@emotion/styled";

const FadeInSectionContainer = styled.section`
	opacity: ${(props) => (props.open ? 1 : 0)};
	transform: translateY(20vh);
	transform: ${(props) =>
		props.open ? "none" : "translateY(20vh)"};
	visibility: ${(props) =>
		props.open ? "visible" : "hidden"};
	transition: opacity 0.6s ease-out,
		transform 1.2s ease-out;
	will-change: opacity, visibility;
	display: ${(props) =>
		props.open ? "flex" : ""};
	flex-direction: ${(props) =>
		props.open ? "column" : ""};
	width: ${(props) => (props.open ? "100%" : "")};
	justify-content: ${(props) =>
		props.open ? "center" : ""};
	align-items: ${(props) =>
		props.open ? "center" : ""};
	z-index: ${(props) => (props.open ? "1" : "")};
	padding: ${(props) =>
		props.open ? "3em 0 3em 0" : ""};
`;

export default FadeInSectionContainer;
