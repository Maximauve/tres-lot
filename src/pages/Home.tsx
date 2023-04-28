import React, { useEffect } from 'react';
import Navbar from 'src/components/navbar/Navbar';	
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/config/firebase';
 
const Home = () => {
	
	const [user, loading] = useAuthState(auth);

	const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
			console.log("Sign out error -> ", error)
        });
    }
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log("uid", uid)
            } else {
              console.log("user is logged out")
            }
          });
		if (loading) return;
		if (!user) return navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);
 
	return (
		<>
				<Navbar />
				<p>
					Welcome Home
				</p>

				<div>
					<button onClick={handleLogout}>
						Logout
					</button>
				</div>
		</>
	)
}
 
export default Home