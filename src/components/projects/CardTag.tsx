import React from "react";

interface Props {
	color: string;
}

const CardTag: React.FC<Props> = (props: Props) => {
	const { color } = props;

	return (
		<div className="card-tag">
			<button className="tag" style={{backgroundColor: color}}></button>
		</div>
	)
}


export default CardTag;