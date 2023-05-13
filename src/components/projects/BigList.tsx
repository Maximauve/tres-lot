import React from "react";
import Header from "./Header";
import AddCards from 'src/components/projects/AddCards';
import ListItem from "./ListItem";
import { Card } from "src/interfaces/Card";
import { List } from "src/interfaces/List";

interface Props {
	list: List[],
	AddCard: (e: any) => void,
}

const BigList: React.FC<Props> = ({ list, AddCard }) => {

	return (
		<>
			{list.map((item: any, index: number) => (
				<div className="big-list" key={index}>
					<div className="list">
						<Header title={item.name} />
						<div className="list-cards">
							{item.cards.map((card: Card, index: number) => (
								<ListItem title={card.title} key={index} />
							))}
						</div>
						<div className="add">
							<AddCards AddCard={AddCard} />
						</div>
					</div>
				</div>
			))}
		</>
	)
}


export default BigList;