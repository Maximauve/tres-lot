import { doc, getDoc } from "firebase/firestore";
import firestore from 'src/config/firebase';

export const getTag = async (id: string) => {
	const tagCollectionRef = doc(firestore, "tag", id);
	try {
		const querySnapshot = await getDoc(tagCollectionRef);
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