import React, {
	useState,
	useEffect,
} from "react";
import TileIndividual from "./TileIndividual";
import ModalContainer from "../ModalContainer";
import {
	TileButtonHolder,
	TileSectionContent,
} from "./TileStyles";
import {
	SmallSectionTitle,
	SectionContainer,
	SmallContainer,
} from "../../Styles/ContainerStyles";

import { toNumber } from "../../utils";

function Tile() {
	const [info, setInfo] = useState([]);
	const [showModal, setShowModal] =
		useState(false);
	const [contentId, setContentId] = useState("");

	useEffect(() => {
		const controller = new AbortController();
		fetch(
			"https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/modalcontent"
		)
			.then((response) => response.json())
			.then((data) => setInfo(data));
		return () => controller.abort();
	}, []);

	const onClickHandler = (id) => {
		setContentId(id);
		setShowModal(!showModal);
	};

	return (
		<SectionContainer>
			<SmallContainer>
				<SmallSectionTitle>
					<h2>
						THIS IS INCLUDED IN THE CAR INSURANCE
					</h2>
				</SmallSectionTitle>
				<TileSectionContent>
					{info.map((item) => (
						<TileButtonHolder key={item.id}>
							<TileIndividual
								id={toNumber(item.id)}
								title={item.title}
								onClickHandler={() =>
									onClickHandler(item.id)
								}
							/>
						</TileButtonHolder>
					))}
				</TileSectionContent>
				{showModal ? (
					<ModalContainer
						showModal={showModal}
						setShowModal={setShowModal}
						contentId={contentId}
					/>
				) : null}
			</SmallContainer>
		</SectionContainer>
	);
}

export default Tile;
