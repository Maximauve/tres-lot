import { doc, getDoc } from "firebase/firestore";
import firestore from 'src/config/firebase';
import { getCard } from "./Card";


export const getList = async (id: string) => {
	const listCollectionRef = doc(firestore, "list", id);
	try {
		const querySnapshot = await getDoc(listCollectionRef);
		if (!querySnapshot.exists()) {
			console.log("Aucun document trouvé !");
		} else {
			const documentData = querySnapshot.data();
			documentData.cards = await Promise.all(documentData.cards.map(async (id: string) => await getCard(id)));
			return documentData;
		}
	} catch (error) {
		console.error(error);
	}
}