import styled from "@emotion/styled";
import { mq } from "../../../utils";

export const AboutSectionContainer = styled.div`
	display: flex;
	width: 90%;
	height: 90vh;
	justify-content: flex-start;
	align-items: flex-end;
`;

export const AboutDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 3em;
	h1 {
		padding: 1em 0 1em 0;
	}
	p {
		padding: 1em 0 1em 0;
	}
	button {
		padding: 1em 0 1em 0;
		width: 30%;
	}
	width: 50%;
	${mq.xl} {
		width: 70%;
	}
	${mq.lg} {
		width: 75%;
	}
	${mq.md} {
		width: 80%;
	}
	${mq.sm} {
		width: 90%;
	}
`;
