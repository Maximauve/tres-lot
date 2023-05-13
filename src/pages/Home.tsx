import React, { useContext, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/config/firebase';
import { UserContext } from 'src/context/UserProvider';

const Home: React.FC = () => {

	const navigate = useNavigate();

	const [state,] = useContext(UserContext);
	if (!state.user) {
		navigate("/login");
		return null;
	}

	const handleLogout = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			navigate("/");
			console.log("Signed out successfully")
		}).catch((error) => {
			console.log("Sign out error -> ", error)
		});
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				console.log("user is logged out")
			}
		});
		if (!state.user) return navigate("/login");
	}, [state]);

	return (
		<>
			<p>Bonjour, {state.user.username} !</p>
			<button onClick={handleLogout}>
				Logout
			</button>
		</>
	)
}

export default Home