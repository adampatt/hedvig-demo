import React, {
	useState,
	useRef,
	useEffect,
} from "react";
import PropTypes from "prop-types";
import FadeInSectionContainer from "./FadeInStyles";

function FadeInSection({ children }) {
	const [isVisible, setVisible] = useState(true);
	const domRef = useRef();
	useEffect(() => {
		const currentDomVar = domRef.current;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) =>
					setVisible(entry.isIntersecting)
				);
			}
		);
		observer.observe(currentDomVar);
		return () => observer.unobserve(currentDomVar);
	}, []);

	return (
		<FadeInSectionContainer
			open={isVisible}
			ref={domRef}
		>
			{children}
		</FadeInSectionContainer>
	);
}

FadeInSection.propTypes = {
	children: PropTypes.node.isRequired,
};

export default FadeInSection;
