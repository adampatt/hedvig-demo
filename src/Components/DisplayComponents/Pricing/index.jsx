import React, {
	useEffect,
	useState,
} from "react";
import {
	SectionContainer,
	SmallContainer,
} from "../../../Styles/ContainerStyles";
import {
	PricingGrid,
	PricingContent,
} from "./PricingStyles";
import FadeInSection from "../../FadeInContainer";

function Pricing() {
	const [pricingData, setPricingData] = useState(
		[]
	);
	useEffect(() => {
		fetch(
			"https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/pricing"
		)
			.then((response) => response.json())
			.then((data) => setPricingData(data));
	}, []);

	return (
		<FadeInSection>
			<SectionContainer
				style={{ backgroundColor: "#d7c6e6" }}
			>
				<SmallContainer>
					<h2>Lorem Ipsum</h2>
					<PricingGrid>
						{pricingData.map((d) => (
							<PricingContent key={d.id}>
								<p>{d.pricingSubheading}</p>
								<h3>{d.pricingDetails}</h3>
							</PricingContent>
						))}
					</PricingGrid>
				</SmallContainer>
			</SectionContainer>
		</FadeInSection>
	);
}

export default Pricing;
