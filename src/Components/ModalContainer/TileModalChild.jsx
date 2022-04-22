import React, {
	useEffect,
	useState,
} from "react";
import PropTypes from "prop-types";
import { capitalize } from "../../utils";

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
		<div className="TileModal">
			<button type="button" onClick={closeModal}>
				CLOSE
			</button>
			<div className="TileModalChildHead">
				<button
					type="button"
					onClick={decrementContentId}
					disabled={updatedContentId === 1}
				>
					left
				</button>
				<h2>{capitalize(info.title)}</h2>
				<button
					type="button"
					onClick={incrementContentId}
					disabled={updatedContentId === 20}
				>
					right
				</button>
			</div>
			<div className="TileModalChildDetails">
				<p>{info.text}</p>
			</div>
			<div className="TileModalChildList">
				<hr />
				<ul>
					{info.subpoint?.map((i) => (
						<li key={i}>{capitalize(i)}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

TileModalChild.propTypes = {
	contentId: PropTypes.number.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default TileModalChild;
