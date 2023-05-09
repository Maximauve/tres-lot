import React from "react";

interface Props {
	onClose: (e: any) => void;
	onAddCard: (e: any) => void;
}

const AskCard: React.FC<Props> = (props: Props) => {

	const { onClose, onAddCard } = props;

	return (
		<div className="card-ask">
			<div className="card-ask-input">
				<textarea className="card-ask-text" placeholder="Saississez un titre pour la carte..."></textarea>
			</div>
			<div className="card-ask-footer">
				<button className="card-ask-btn" onClick={onAddCard}>Ajouter une carte</button>
				<button className="card-ask-close" onClick={onClose}>X</button>
			</div>
		</div>
	)
}


export default AskCard;