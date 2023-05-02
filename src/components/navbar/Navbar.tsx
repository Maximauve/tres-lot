import { useState } from "react";
import "src/styles/Navbar.scss";
import Modal from "../modal/Modal";
import { WorkspaceForm } from "../workspace/CreationForm";

const Navbar: React.FC = () => {

	const [show, setShow] = useState(false);

	return (
		<nav>
			<div className="left">
				<p>Très lot</p>
				<ul>
					<li>Mes espaces de travail</li>
					<li>Favoris</li>
					<li><button onClick={() => setShow(true)}>Créer</button></li>
				</ul>
			</div>
			<div className="right">
				<input type="text" id="nav-search" placeholder="Parcourir" />
				<p>Notif</p>
				<p>Thème</p>
				<p>Profil</p>
			</div>
			<Modal title="Créer un espace de travail" show={show} setShow={setShow}>
				<WorkspaceForm />
			</Modal>
		</nav>
	)
}

export default Navbar;