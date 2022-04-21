import React, {
	useEffect,
	useState,
} from "react";

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
	});

	return (
		// Lilac section, container holds pricing data, div mapped out in grid

		<section>
			<div className="pricingInfoContainer">
				{pricingData.map((d) => (
					<div className="pricingInfo" key={d.id}>
						<p>{d.pricingSubheading}</p>
						<h3>{d.pricingDetails}</h3>
					</div>
				))}
			</div>
		</section>
	);
}

export default Pricing;
