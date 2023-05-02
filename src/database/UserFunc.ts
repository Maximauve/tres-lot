import db from "src/config/firebase"
import { DocumentReference, addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { User } from "src/interfaces/User";
import { Collections } from "./Collections";
import { Card } from "src/interfaces/Card";
import { Workspace } from "src/interfaces/Workspace";

const fillUserInfo = async (user: User): Promise<User> => {
	const cards = user.cards ?? [].map(async cardId => (await getDoc(doc(db, Collections.CARD, cardId) as DocumentReference<Card>)).data() as Card);
	user.cards = await Promise.all(cards);

	const workspaces = user.workspaces ?? [].map(async workspaceId => (await getDoc(doc(db, Collections.WORKSPACE, workspaceId) as DocumentReference<Workspace>)).data() as Workspace);
	user.workspaces = await Promise.all(workspaces);

	return user;
}

export const getUser = async (id: string): Promise<User | null> => {
	const userRef = doc(db, Collections.USER, id);
	let docSnap = await getDoc(userRef as DocumentReference<User>);
	if (!docSnap.exists()) {
		return null;
	}
	let user = docSnap.data() as User;

	user = await fillUserInfo(user);

	return user;
}

export const getUserByEmail = async (email: string): Promise<User | null> => {
	let q = query(collection(db, Collections.USER), where("email", "==", email));
	let qSnap = await getDocs(q);
	if (qSnap.empty) {
		return null;
	}

	let user = qSnap.docs[0].data() as User;

	user = await fillUserInfo(user);

	return user;
}

export const getUserByUid = async (uid: string): Promise<User | null> => {
	let q = query(collection(db, Collections.USER), where("uid", "==", uid));
	let qSnap = await getDocs(q);
	if (qSnap.empty) {
		return null;
	}

	let user = qSnap.docs[0].data() as User;

	user = await fillUserInfo(user);

	return user;
}

export const getUserByUsername = async (username: string): Promise<User | null> => {
	const q = query(collection(db, Collections.USER), where("username", "==", username));
	const qSnap = await getDocs(q);
	if (qSnap.empty) {
		return null;
	}

	let user = qSnap.docs[0].data() as User;

	user = await fillUserInfo(user);

	return user;
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