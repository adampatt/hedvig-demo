import React from "react";
import "./App.css";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from "../Home";
import QuizContainer from "../Form";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="quote"
					element={<QuizContainer />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
