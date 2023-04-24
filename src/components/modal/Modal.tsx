import React, { PropsWithChildren } from 'react';

import "src/styles/Modal.scss";

interface Props {
	show: boolean;
	setShow: (value: boolean) => void;
}

const Modal: React.FC<PropsWithChildren<Props>> = (props) => {
	const { children, show, setShow } = props;

	if (!show) {
		return null;
	}

	return (
		<div className="modal" onClick={() => setShow(false)}>
			<div className="modal-block" onClick={e => e.stopPropagation()}>
				<button className="modal-close" onClick={() => setShow(false)}>
					X
				</button>
				{children}
			</div>

		</div>
	);
};

export default Modal;
