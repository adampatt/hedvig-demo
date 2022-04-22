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
		<SectionContainer
			style={{ backgroundColor: "#d7c6e6" }}
		>
			<SmallContainer>
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
	);
}

export default Pricing;
