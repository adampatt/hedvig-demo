import React, {
	useState,
	useEffect,
} from "react";
import TileIndividual from "./TileIndividual";
import ModalContainer from "../ModalContainer";

function Tile() {
	const [info, setInfo] = useState([]);
	const [showModal, setShowModal] =
		useState(false);
	const [contentId, setContentId] = useState("");

	useEffect(() => {
		fetch(
			"https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/modalcontent"
		)
			.then((response) => response.json())
			.then((data) => setInfo(data));
	}, []);

	const onClickHandler = (id) => {
		setContentId(id);
		setShowModal(!showModal);
	};

	return (
		<>
			<div>
				THIS IS INCLUDED IN THE CAR INSURANCE
			</div>
			{info.map((item) => (
				<TileIndividual
					id={item.id}
					title={item.title}
					onClickHandler={() =>
						onClickHandler(item.id)
					}
				/>
			))}
			{showModal ? (
				<ModalContainer
					showModal={showModal}
					setShowModal={setShowModal}
					contentId={contentId}
				/>
			) : null}
		</>
	);
}

export default Tile;
