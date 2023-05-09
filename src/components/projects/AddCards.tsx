import React from "react";

interface Props {
	AddCard: (e: any) => void;
}

const AddCarde: React.FC<Props> = (props: Props) => {

	const { AddCard } = props;

	return (
		<div className="project-card-add">
			<button className="card-add" onClick={AddCard}>
				<span className="card-add-text">Ajouter une carte</span>
			</button>
		</div>
	)
}


export default AddCarde;