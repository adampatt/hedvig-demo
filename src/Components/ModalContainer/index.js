import React, {
	useCallback,
	useEffect,
	useRef,
} from "react";
import PropTypes from "prop-types";
import TileModalChild from "./TileModalChild";
import "./styles.css";

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
				<div
					ref={modalRef}
					onClick={closeModal}
					className="modalContent"
					onKeyDown={closeModal}
					role="button"
					tabIndex={0}
				>
					<TileModalChild
						contentId={contentId}
						closeModal={closeModalIcon}
					/>
					<div />
				</div>
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
