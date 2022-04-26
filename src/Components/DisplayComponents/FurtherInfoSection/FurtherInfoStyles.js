import styled from "@emotion/styled";
import { mq } from "../../../utils";

export const FurtherInfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const FurtherInfoText = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	width: 80%%;
	justify-content: space-evenly;
	align-items: center;
	h2 {
		width: 80%;
	}
	p {
		width: 80%;
	}
`;

export const FurtherInfoImage = styled.img`
	max-height: 450px;
	align-self: center;
	${mq.xl} {
		max-width: 50%;
		min-width: 50%;
	}
	${mq.lg} {
		max-width: 55%;
		min-width: 55%;
	}
	${mq.md} {
		max-width: 60%;
		min-width: 60%;
	}
	${mq.sm} {
		max-width: 90%;
		min-width: 90%;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

export const FurtherInfoContent = styled.div`
	display: flex;
	min-width: 100%;
	padding: 3em 0 3em 0;
	flex-direction: ${(props) =>
		props.rowDirection ? "row" : "row-reverse"};
`;
