import React, { MouseEvent, useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom'
import "src/styles/Auth.scss";
import Header from '../components/auth/Header';
import { auth } from 'src/config/firebase';
import Input from 'src/components/auth/Input';
import { UserContext } from 'src/context/UserProvider';
import { UserActionType } from 'src/context/userReducer';
import { getUserByEmail } from 'src/database/UserFunc';

const Login: React.FC = () => {
	const navigate = useNavigate();

	const [state, dispatch] = useContext(UserContext);
	if (state.user) {
		navigate("/");
	}

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const onLogin = (e: MouseEvent) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				getUserByEmail(email).then((user) => {
					// console.log("<LOGIN> user => ", user); // le user est bien récupéré
					dispatch({ type: UserActionType.SET_USER, payload: user });
					// console.log("<LOGIN> state user => ", state.user); // le user n'est pas dans le state

				}).finally(() => {
					dispatch({ type: UserActionType.SET_LOADING, payload: false });
					navigate("/");
				});
			})
			.catch(() => {
				setPassword('');
				setError(true);
			});
	}

	return (
		<>
			<main>
				<section>
					<div className="auth">
						<Header title="Connectez vous à votre compte" />
						{error && <p className="auth-error">Mot de passe ou email incorrect</p>}
						<div className="auth-redirect">
							<p className="auth-text">Vous n'avez pas encore de compte ?</p>
							<NavLink to="/signup">
								Créer votre compte
							</NavLink>
						</div>
						<form>
							<Input id="email-address" name="email" type="email" placeholder="Adresse mail" onChange={(e) => setEmail(e.target.value)} />
							<Input id="password" name="password" type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
							<button className="auth-button"
								onClick={onLogin}>
								Connexion
							</button>
						</form>
					</div>
				</section>
			</main>
		</>
	)
}

export default Login