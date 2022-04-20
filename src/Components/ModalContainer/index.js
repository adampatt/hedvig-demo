import React, {
	useCallback,
	useEffect,
	useRef,
} from "react";

function ModalContainer({
	showModal,
	setShowModal,
}) {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
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
			{showModal ? (
				<div
					ref={modalRef}
					onClick={closeModal}
					className="modalContent"
				>
					{/* <div>
						<p
							onClick={() =>
								setShowModal((prev) => !prev)
							}
						>
							{" "}
							Close{" "}
						</p>
					</div> */}
					<div />
				</div>
			) : null}
		</>
	);
}

export default ModalContainer;
