import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from 'src/components/navbar/Navbar';
import Header from 'src/components/projects/Header';
import ListItem from 'src/components/projects/ListItem';
import 'src/styles/Project.scss'

const Project = () => {
	const slug: string = useParams().slug as string;
	
	
	return (
		<div className='project'>
			<Navbar />
			<div className="project-container">
				<div className="big-list">
					<div className="list">
						<Header title="Mes projets" />
						<div className="list-cards">
							<ListItem title="Projet 1" />
							<ListItem title="Test" />
							<ListItem title="Oui" />
						</div>
						<div className="project-card-add">
							<button className="card-add">
								<span className="card-add-text">Ajouter une carte</span>
							</button>
						</div>
					</div>
				</div>
				<div className="big-list">
					<div className="list">
						<Header title="test2" />
						{/* <ListItem title="Projet 2" /> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project;

// Get a projet by slug, -> avoir les list -> cards -> members et tags 
// ajouter une carte à une liste
// ajouter une liste à un projet
// update une carte

