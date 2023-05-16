import React, { PropsWithChildren, useContext, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "src/config/firebase";
import useAuth from "src/hooks/useAuth";

export const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
	const navigate = useNavigate();
	const [userAuth,] = useAuthState(auth);
	const { getAuth } = useAuth();

	useEffect(() => {

		if (userAuth === null || userAuth === undefined) {
			navigate("/login");
			return;
		}

		getAuth(userAuth.email!)
	}, [])

	return (
		<>
			{children}
		</>
	)
}