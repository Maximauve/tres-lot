/* eslint-disable indent */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Role, User } from 'src/interfaces/User';
import { createUser, getUserByUsername } from 'src/database/UserFunc';
import { auth } from 'src/config/firebase';
import Header from 'src/components/auth/Header';
import Input from 'src/components/auth/Input';

const Signup = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [username, setUsername] = useState('');
	const [error, setError] = useState('');

	const onSubmit = async (e: any) => {
		e.preventDefault()
		if (password !== confirm) {
			setError("Les mots de passe ne correspondent pas")
			return;
		}
		const user = await getUserByUsername(username);
		if (user) {
			setError("Ce nom d'utilisateur est déjà utilisé")
		} else {
			await createUserWithEmailAndPassword(auth, email, password)
				.then(async (newUser) => {
					// Signed in
					const user: User = {
						id: newUser.user.uid,
						email,
						username,
						password,
						roles: Role.USER,
						workspaces: [],
						cards: [],
						profilePicture: "",
					};
					await createUser(user);
					navigate("/login")
				})
				.catch((error) => {
					const errorMessage = error.message;
					switch (errorMessage.split(" ")[errorMessage.split(" ").length - 1]) {
						case "(auth/missing-password).":
							setError("Veuillez entrer un mot de passe")
							break;
						case "(auth/missing-email).":
							setError("Veuillez entrer un email")
							break;
						case "(auth/invalid-username).":
							setError("Veuillez entrer un nom d'utilisateur")
							break;
						case "(auth/email-already-in-use).":
							setError("Cet email est déjà utilisé")
							break;
						case "(auth/weak-password).":
							setError("Le mot de passe doit contenir au moins 6 caractères")
							break;
						default:
							setError("Une erreur est survenue")
							break;
					}
				});
		}
	}

	return (
		<main >
			<section>
				<div className="auth">
					<Header title="Créez votre compte" />
					{error && <p className="auth-error">{error}</p>}
					<div className="auth-redirect">
						<p className="auth-text">Vous avez déjà un compte ?</p>
						<NavLink to="/login">
							Connexion
						</NavLink>
					</div>
					<form>
						<Input type="text" id="username" name="username" placeholder="Nom d'utilisateur" onChange={(e) => setUsername(e.target.value)} />
						<Input type="email" id="email-address" name="email" placeholder="Adresse mail" onChange={(e) => setEmail(e.target.value)} />
						<Input type="password" id="password" name="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
						<Input type="password" id="confirm-password" name="confirm-password" placeholder="Confirmer le mot de passe" onChange={(e) => setConfirm(e.target.value)} />
						<button className="auth-button"
							type="submit"
							onClick={onSubmit}>
							Créez votre compte
						</button>
					</form>
				</div>
			</section>
		</main>
	)
}

export default Signup