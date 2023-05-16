import React, { useEffect, useState } from 'react';
import Navbar from 'src/components/navbar/Navbar';
import AskCard from 'src/components/projects/AskCard';
import AddCards from 'src/components/projects/AddCards';
import 'src/styles/Project.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { getProject } from 'src/database/Project';
import BigList from 'src/components/projects/BigList';
import { Project } from 'src/interfaces/Project';
import { createRoot } from 'react-dom/client';

const ProjectPage = () => {

	const navigate = useNavigate();
	const [projectItem, setProject] = useState<Project>();
	const { slug } = useParams();

	console.log("coucou");
	useEffect(() => {
		if (!projectItem) {
			getProject(slug as string).then((res) => {
				if (res == null) navigate("/")
				setProject(res as Project);
			}).catch((err) => {
				console.log("error -> ", err);
			})
		}
	}, [])

	const AddCard = (e: any) => {
		e.preventDefault();
		let list = e.target;
		while (!list.classList.contains("list")) {
			list = list.parentElement;
		}
		const add = list.querySelector(".add")
		const root = createRoot(add);
		root.render(<AskCard onClose={onClose} onAddCard={onAddCard} />)
	}

	const onClose = (e: any) => {
		e.preventDefault();
		let list = e.target;
		while (!list.classList.contains("list")) {
			list = list.parentElement;
		}
		const add = list.querySelector(".add")
		const root = createRoot(add);
		root.render(<AddCards AddCard={AddCard} />)
	}

	const onAddCard = (e: any) => {
		e.preventDefault();
		console.log(e)
	}

	return (
		<>
			<div className='project'>
				<Navbar />
				<div className="project-container">
					<BigList list={projectItem?.lists ?? []} AddCard={AddCard} />
				</div>
			</div>
		</>
	)
}

export default ProjectPage;

