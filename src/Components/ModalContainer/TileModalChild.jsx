import React, {
	useEffect,
	useState,
} from "react";
import PropTypes from "prop-types";
import { capitalize } from "../../utils";
import {
	Button,
	OutlinedButton,
} from "../Button";
import {
	TileModalHolder,
	TileModalButtonContainer,
	TileModalChildHead,
	TileModalChildDetails,
	TileModalChildList,
} from "./ModalStyles";

function TileModalChild({
	contentId,
	closeModal,
}) {
	const [info, setInfo] = useState([]);
	const [updatedContentId, setUpdatedContentId] =
		useState(contentId);
	const decrementContentId = () => {
		setUpdatedContentId(updatedContentId - 1);
	};

	const incrementContentId = () => {
		setUpdatedContentId(updatedContentId + 1);
	};

	useEffect(() => {
		fetch(
			`https://625e9bd83b039517f1f8f2ee.mockapi.io/hedvig-example/modalcontent/${updatedContentId}`
		)
			.then((response) => response.json())
			.then((data) => setInfo(data));
	}, [updatedContentId]);

	return (
		<TileModalHolder>
			<TileModalButtonContainer>
				<OutlinedButton onClick={closeModal}>
					{"  X   "}
				</OutlinedButton>
			</TileModalButtonContainer>

			<TileModalChildHead>
				<Button
					onClick={decrementContentId}
					disabled={updatedContentId === 1}
				>
					{"<--- Left"}
				</Button>
				<h2>{capitalize(info.title)}</h2>
				<Button
					onClick={incrementContentId}
					disabled={updatedContentId === 20}
				>
					{"Right ---> "}
				</Button>
			</TileModalChildHead>
			<TileModalChildDetails>
				<p>{info.text}</p>
			</TileModalChildDetails>
			<TileModalChildList>
				<hr />
				<ul>
					{info.subpoint?.map((i) => (
						<li key={i}>{capitalize(i)}</li>
					))}
				</ul>
			</TileModalChildList>
		</TileModalHolder>
	);
}

TileModalChild.propTypes = {
	contentId: PropTypes.number.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default TileModalChild;
