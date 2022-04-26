/* eslint-disable react/prop-types */
import React, {
	useState,
	useEffect,
} from "react";
import FooterList from "./FooterList";
import {
	FooterContainer,
	FooterContent,
} from "./FooterStyles";

function Footer() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const controller = new AbortController();
		fetch(
			"https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/content"
		)
			.then((response) => response.json())
			.then((res) => setData(res))
			.then(() => setLoading(false));
		return () => controller.abort();
	}, []);

	const displayData = data[0]?.footerContent;

	return (
		<div>
			{loading ? (
				<div>Loading...</div>
			) : (
				<FooterContainer>
					{displayData.map((d) => (
						<FooterContent key={d.id}>
							<h2>{d.heading}</h2>
							<FooterList data={d.list} />
						</FooterContent>
					))}
				</FooterContainer>
			)}
		</div>
	);
}

export default Footer;
