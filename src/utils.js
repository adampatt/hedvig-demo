/* eslint-disable no-param-reassign */
import { Breakpoints } from "./constants";

export const capitalize = (s) => {
	if (typeof s !== "string") return "";
	return s.charAt(0).toUpperCase() + s.slice(1);
};

export const toNumber = (s) => {
	if (typeof s !== "string") return 0;
	return parseInt(s, 10);
};

export const mq = Object.keys(Breakpoints)
	.map((key) => [key, Breakpoints[key]])
	.reduce((prev, [key, breakpoint]) => {
		prev[
			key
		] = `@media (max-width: ${breakpoint}px)`;
		return prev;
	}, {});
