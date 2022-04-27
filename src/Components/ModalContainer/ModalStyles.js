import styled from "@emotion/styled";

export const ModalContent = styled.div`
	width: 100vw;
	height: 100vh;
	bottom: 0%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
	background-color: rgba(0, 0, 0, 0.35);
	transition: 250ms ease;
	opacity: 1;
	position: fixed;
	overflow: hidden;
	left: 0px;
`;

export const TileModalHolder = styled.div`
	border-radius: 2em 2em 0 0;
	height: fit-content;
	width: 40%;
	background-color: rgb(250, 250, 250);
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: flex-start;
`;

export const TileModalButtonContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	padding-right: 3em;
`;

export const TileModalChildHead = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5em;
`;

export const TileModalChildDetails = styled.div`
	display: flex;
	width: 80%;
	justify-content: center;
	padding-bottom: 5em;
	align-self: center;
`;

export const TileModalChildList = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-content: center;
	align-items: center;
	hr {
		width: 80%;
	}
	ul {
		width: 80%;
		list-style: none;
		padding-left: 0px;
	}

	li {
		padding: 1em 0 1em 0;
	}
`;
