import React, {
	useState,
	useEffect,
} from "react";

function Tile() {
	const [info, setInfo] = useState([]);
	const [showModal, setShowModal] = useState(true);
	useEffect(() => {
		fetch(
			"https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/modalcontent"
		)
			.then((response) => response.json())
			.then((data) => setInfo(data));
	}, []);

	const onClickHandler = () => {
		setShowModal(!showModal);
	};

	console.log(showModal, setShowModal);
	return (
		<>
			<div>
				THIS IS INCLUDED IN THE CAR INSURANCE
			</div>
			{info.map((item) => (
				<div
					key={item.id}
					onClick={onClickHandler}
					onKeyDown={onClickHandler}
					role="button"
					tabIndex={item.id}
				>
					<p>{item.id}</p>
					<p>{item.title}</p>
				</div>
			))}
			{showModal ? (
				<div>
					<h1>Modal container</h1>
				</div>
			) : null}
		</>
	);
}

export default Tile;
