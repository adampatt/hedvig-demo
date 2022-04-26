import styled from "@emotion/styled";
import { mq } from "../utils";

export const SectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	padding: ${(props) =>
		props.noPadding ? "" : "3em 0 3em 0"};
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
	display: flex;
	flex-direction: column;
	h2 {
		align-self: center;
	}
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
	overflow: hidden;
	justify-content: center;
`;

export const MediumContainer = styled.div`
	display: flex;
	width: 80%;
	flex-direction: column;
	justify-content: center;
`;

export const MediumContainer1 = styled.div`
	display: flex;
	width: 80%;
	flex-direction: column;
	justify-content: space-evenly;
	padding-top: 3em;
`;

export const DetailsContainer = styled.div(
	{
		display: "flex",
		width: "100%",
		padding: "1.25rem",
	},
	(props) => ({
		height: props.height,
		justifyContent: props.justifyContent,
	})
);

export const DetailsContainer1 = styled.div(
	{
		display: "flex",
		width: "80%",
		padding: "1.25rem",
		borderRadius: "0.5rem",
		backgroundColor: "rgb(239, 239, 239)",
	},
	(props) => ({
		height: props.height,
		justifyContent: props.justifyContent,
	})
);
