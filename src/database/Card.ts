import { doc, getDoc } from "firebase/firestore";
import firestore from 'src/config/firebase';
import { getMember } from "./User";
import { getTag } from "./Tag";

export const getCard = async (id: string) => {
	const cardCollectionRef = doc(firestore, "cards", id);
	try {
		const querySnapshot = await getDoc(cardCollectionRef);
		if (!querySnapshot.exists()) {
			console.log("Aucun document trouvé !");
		} else {
			const documentData = querySnapshot.data();
			documentData.members = await Promise.all(documentData.members.map(async (id: string) => await getMember(id)));
			documentData.tags = await Promise.all(documentData.tags.map(async (id: string) => await getTag(id)));
			return documentData;
		}
	} catch (error) {
		console.error(error);
	}
}