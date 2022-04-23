/* eslint-disable no-param-reassign */
import styled from "@emotion/styled";
import { mq } from "../../utils";

export const TileSectionContent = styled.div`
	display: flex;
	height: 100vh;
	width: 100%;
	flex-wrap: wrap;
	flex-direction: row;
`;

export const TileButtonHolder = styled.div`
	display: flex;
	width: 25%;
	height: auto;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;
	${mq.lg} {
		width: 33%;
	}
	${mq.md} {
		width: 50%;
	}
`;

export const TileButton = styled.button`
	border: none;
	width: 90%;
	height: 90%;
	padding: 1.25rem;
	border-radius: 0.375rem;
	flex-direction: column;
	align-items: space-between;
	display: flex;
	padding: 0.5rem 1rem 0.5rem 0.375rem;
	min-height: 3.75rem;
	cursor: pointer;
	justify-content: space-between;
	&:hover {
		box-shadow: rgb(0 0 0 / 8%) 0px 0px 16px;
		transform: translateY(-2px);
	}
	p {
		text-align: left;
	}
`;
