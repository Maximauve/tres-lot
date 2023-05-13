import { doc, getDoc } from "firebase/firestore";
import firestore from 'src/config/firebase';

export const getMember = async (id: string) => {
	const memberCollectionRef = doc(firestore, "user", id);
	try {
		const querySnapshot = await getDoc(memberCollectionRef);
		if (!querySnapshot.exists()) {
			console.log("Aucun document trouvé !");
		} else {
			const documentData = querySnapshot.data();
			return documentData;
		}
	} catch (error) {
		console.error(error);
	}
}