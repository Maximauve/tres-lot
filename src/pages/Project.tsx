import React from 'react';
import ReactDOM from 'react-dom';
import AskCard from 'src/components/projects/AskCard';
import AddCards from 'src/components/projects/AddCards';
import Header from 'src/components/projects/Header';
import ListItem from 'src/components/projects/ListItem';
import 'src/styles/Project.scss'

const Project = () => {

	const AddCard = (e: any) => {
		e.preventDefault();
		let list = e.target;
		while (!list.classList.contains("list")) {
			list = list.parentElement;
		}
		const add = list.querySelector(".add")
		const askCard = <AskCard onClose={onClose} onAddCard={onAddCard} />;
		ReactDOM.render(askCard, add);
	}

	const onClose = (e: any) => {
		e.preventDefault();
		let list = e.target;
		while (!list.classList.contains("list")) {
			list = list.parentElement;
		}
		const add = list.querySelector(".add")
		const askCard = <AddCards AddCard={AddCard} />;
		ReactDOM.render(askCard, add);
	}

	const onAddCard = (e: any) => {
		e.preventDefault();
	}

	return (
		<div className='project'>
			<div className="project-container">
				<div className="big-list">
					<div className="list">
						<Header title="Mes projets" />
						<div className="list-cards">
							<ListItem title="Projet 1" />
							<ListItem title="Test" />
							<ListItem title="Oui" />
						</div>
						<div className="add">
							<AddCards AddCard={AddCard} />
						</div>
					</div>
				</div>
				<div className="big-list">
					<div className="list">
						<Header title="test2" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project;
