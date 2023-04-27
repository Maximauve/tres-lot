import db from "src/config/firebase"
import { DocumentReference, addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { User } from "src/interfaces/User";
import { Collections } from "./Collections";

export const getUser = async (id: string): Promise<User | null> => {
	const userRef = doc(db, Collections.USER, id);
	const docSnap = await getDoc(userRef as DocumentReference<User>);
	if (!docSnap.exists()) {
		return null;
	}
	return docSnap.data() as User;
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
	const q = query(collection(db, Collections.USER), where("email", "==", email));
	const qSnap = await getDocs(q);
	if (qSnap.empty) {
		return null;
	}
	return qSnap.docs[0].data() as User;
}

export const getUserByUsername = async (username: string): Promise<User | null> => {
	const q = query(collection(db, Collections.USER), where("username", "==", username));
	const qSnap = await getDocs(q);
	if (qSnap.empty) {
		return null;
	}
	return qSnap.docs[0].data() as User;
}

export const createUser = async (user: User): Promise<void> => {
	const user1 = await getUserByEmail(user.email);
	const user2 = await getUserByUsername(user.username);
	if (user1) {
		throw new Error("Cet email est déjà utilisé");
	}
	if (user2) {
		throw new Error("Ce nom d'utilisateur est déjà utilisé");
	}
	const userRef = collection(db, Collections.USER);
	await addDoc(userRef, user);
}

export const getAllUsers = async (): Promise<User[]> => {
	const qSnap = await getDocs(collection(db, Collections.USER));
	return qSnap.docs.map(doc => doc.data() as User);
}