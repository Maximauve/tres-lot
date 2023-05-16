import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "src/config/firebase";
import { getUserByUid } from "src/database/UserFunc";
import { createWorkspace } from "src/database/workspaceFunc";
import { Workspace } from "src/interfaces/Workspace";
import "src/styles/workspace/CreationForm.scss";

export const WorkspaceForm: React.FC = () => {
	const navigate = useNavigate();
	const [userAuth,] = useAuthState(auth);

	if (!userAuth) {
		navigate("/login");
	}

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!userAuth) {
			navigate("/login");
			return;
		}
		const userUid = userAuth.uid;

		getUserByUid(userUid).then((user) => {
			console.log("<WORKSPACE> USER ->", user);

			if (!user) {
				return;
			}
			console.log("USER ->", user);

			const workspace: Workspace = {
				name,
				slug: name.toLowerCase().replace(/[^\w/éèêëiïùüûàâôöœ ]+/g, "").replace(/( +|\/+ *(\/*) *)+/g, '-'),
				description,
				creationDate: new Date(),
				createdBy: user,
			}
			console.log(workspace);
			createWorkspace(workspace);

			navigate(`/`);
		}).catch((error) => {
			console.error(error);
		});
	}


	return (
		<form className="workspace-creation-form" onSubmit={handleSubmit}>
			<label htmlFor="workspace-name">Nom de l'espace de travail :</label>
			<input id="workspace-name" type="text" placeholder="Nom de l'espace de travail" onChange={(e) => setName(e.target.value)} />
			<label htmlFor="workspace-description">Description de votre espace de travail (factultatif) :</label>
			<textarea id="workspace-description" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
			<button>Créer l'espace de travail !</button>
		</form>
	)
}