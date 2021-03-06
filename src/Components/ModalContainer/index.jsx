import React, {
	useCallback,
	useEffect,
	useRef,
} from "react";
import PropTypes from "prop-types";
import TileModalChild from "./TileModalChild";
import { toNumber } from "../../utils";
import { ModalContent } from "./ModalStyles";

function ModalContainer({
	showModal,
	setShowModal,
	contentId,
}) {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};

	const closeModalIcon = () => {
		setShowModal(false);
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
			}
		},
		[setShowModal, showModal]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => {
			document.removeEventListener(
				"keydown",
				keyPress
			);
		};
	}, [keyPress]);

	return (
		<>
			<h1>Modal </h1>
			{showModal ? (
				<ModalContent
					ref={modalRef}
					onClick={closeModal}
					onKeyDown={closeModal}
					role="button"
					tabIndex={0}
				>
					<TileModalChild
						contentId={toNumber(contentId)}
						closeModal={closeModalIcon}
					/>
				</ModalContent>
			) : null}
		</>
	);
}

ModalContainer.propTypes = {
	showModal: PropTypes.bool.isRequired,
	setShowModal: PropTypes.func.isRequired,
	contentId: PropTypes.string.isRequired,
};

export default ModalContainer;
