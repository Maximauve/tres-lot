import React, { PropsWithChildren } from 'react';

import "src/styles/Modal.scss";

interface Props {
	title: string;
	show: boolean;
	setShow: (value: boolean) => void;
}

const Modal: React.FC<PropsWithChildren<Props>> = (props) => {
	const { title, children, show, setShow } = props;

	if (!show) {
		return null;
	}

	return (
		<div className="modal" onMouseDown={() => setShow(false)}>
			<div className="modal-block" onMouseDown={e => e.stopPropagation()}>
				<button className="modal-close" onClick={() => setShow(false)}>
					X
				</button>
				<div className='modal-title'>
					<p>{title}</p>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Modal;
