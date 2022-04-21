import React, {
	useEffect,
	useState,
} from "react";
import "./App.css";
// import QuestionContainer from "../Question";
// import Tile from "../Tile";
// import Header from "../Header";
// import About from "../DisplayComponents/About";
// import InfoSection from "../DisplayComponents/InfoSection";
import FurtherInfoSection from "../DisplayComponents/FurtherInfoSection";
// import Pricing from "../DisplayComponents/Pricing";
// import Footer from "../Footer";

function App() {
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
	return (
		<div className="App">
			<h1>App component</h1>
			{/* <Header /> */}
			{/* <Tile /> */}
			{/* <QuestionContainer /> */}
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<FurtherInfoSection data={data} />
					{/* <Pricing data={data} /> */}
					{/* <About data={data} /> */}
					{/* <InfoSection data={data} />
					
					
					<Footer data={data} /> */}
				</>
			)}
		</div>
	);
}

export default App;
