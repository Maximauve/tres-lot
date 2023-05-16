import { CollectionReference, collection, getDoc, getDocs, query, where } from "firebase/firestore"
import { useContext } from "react"
import { UserContext } from "src/context/UserProvider"
import db from "src/config/firebase"
import { User } from "src/interfaces/User"
import { UserActionType } from "src/context/userReducer"

const useAuth = () => {
	const [, dispatch] = useContext(UserContext)

	const getAuth = async (email: string) => {

		const q = query(collection(db, 'user') as CollectionReference<User>, where('email', '==', email));

		getDocs(q)
			.then((querySnapshot) => {
				dispatch({
					type: UserActionType.SET_USER,
					payload: querySnapshot.docs[0].data()
				})
			}).catch((error) => {
				console.log("Error getting documents: ", error);
			}).finally(() => {
				dispatch({
					type: UserActionType.SET_LOADING,
					payload: false
				})
			});
	}

	return { getAuth }
}

export default useAuth