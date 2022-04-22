import styled from "@emotion/styled";
import { mq } from "../utils";

export const SectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const XlContainer = styled.div`
	display: flex;
	width: 100%;
	background-image: linear-gradient(
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.2)
		),
		url(${(props) => props.img});
	background-size: cover;
	justify-content: center;
`;

export const LargeContainer = styled.div`
	display: flex;
	width: 90%;
`;

export const SmallContainer = styled.div`
	width: 40%;
	${mq.lg} {
		width: 50%;
	}
	${mq.md} {
		width: 70%;
	}
	${mq.sm} {
		width: 90%;
	}
`;

export const SmallSectionTitle = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 5em;
`;

export const HalfWidthContainer = styled.div`
	display: flex;
	width: 50%;
`;
