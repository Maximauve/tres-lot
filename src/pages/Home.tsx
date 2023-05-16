import React, { useContext, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Home: React.FC = () => {

	const navigate = useNavigate();
	const [user, loading] = useAuthState(auth);

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
		if (loading) return;
		if (!user) return navigate("/login");
	}, [user, loading]);

	return (
		<>
			<button onClick={handleLogout}>
				Logout
			</button>
		</>
	)
}

export default Home