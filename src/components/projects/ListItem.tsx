import React from "react";
import CardTag from "./CardTag";

interface Props {
	title: string;
}

const ListItem: React.FC<Props> = (props: Props) => {
	const { title } = props;

	return (
		<a className="card" href="/home">
			<div className="card-tags">
				<CardTag color="#000000" />
				<CardTag color="#fff" />
				<CardTag color="#21e" />
				<CardTag color="#541" />
			</div>
			<span className="card-title">{title}</span>
			<div className="card-members">
				<div className="member">
					<img src="https://i.imgur.com/JSW6mEk.png" alt="member" />
				</div>
			</div>
		</a>
	)
}


export default ListItem;