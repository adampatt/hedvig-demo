import styled from "@emotion/styled";
import { mq } from "../../../utils";

export const PricingGrid = styled.div`
	display: flex;
	height: 80vh;
	flex-wrap: wrap;
	justify-content: center;
	padding: 3em 0 3em 0;
`;

export const PricingContent = styled.div`
	display: flex;
	width: 33.33333%;
	flex-direction: column;
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
