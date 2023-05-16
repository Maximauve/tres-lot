import React, { useContext, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/config/firebase';
// import { UserContext } from 'src/context/UserProvider';
// import { User } from 'src/interfaces/User';

const Home: React.FC = () => {

	const navigate = useNavigate();
	// const [state,] = useContext(UserContext);

	// const user = state.user as User;


	const handleLogout = () => {
		signOut(auth).then(() => {
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
				navigate("/login");
			}
		});
	}, []);

	return (
		<>
			<button onClick={handleLogout}>
				Logout
			</button>
		</>
	)
}

export default Home