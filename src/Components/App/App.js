import React, {
	useEffect,
	useState,
} from "react";
import "./App.css";
import QuestionContainer from "../Question";
import Tile from "../Tile";
import About from "../DisplayComponents/About";
import InfoSection from "../DisplayComponents/InfoSection";
import FurtherInfoSection from "../DisplayComponents/FurtherInfoSection";
import Pricing from "../DisplayComponents/Pricing";
import Header from "../Header";

function App() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [navBarShow, setNavBarShow] =
		useState(false);

	const displayNavBar = () => {
		setNavBarShow(!navBarShow);
	};

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
	return (
		<div className="App">
			<Header
				handleNavBar={displayNavBar}
				navBarState={navBarShow}
			/>
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<About data={data} />
					<InfoSection data={data} />
				</>
			)}
			<Tile />
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<Pricing data={data} />
					<FurtherInfoSection data={data} />
				</>
			)}
			<QuestionContainer />
		</div>
	);
}

export default App;
