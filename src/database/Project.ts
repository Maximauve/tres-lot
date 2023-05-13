import { collection, getDocs, query, where } from "firebase/firestore";
import firestore from 'src/config/firebase';
import { getList } from "./List";

export const getProject = async (slug: string) => {
	console.log("getproject with slug: ", slug);
	const projectsCollectionRef = collection(firestore, "project");
	const q = where("slug", "==", slug);
	try {
		const querySnapshot = await getDocs(query(projectsCollectionRef, q));
		if (querySnapshot.size === 0) {
			console.log("Aucun document trouvé !");
		}
		const projectData = querySnapshot.docs[0].data();
		projectData.lists = await Promise.all(projectData.lists.map(async (id: string) => await getList(id)));
		return projectData;
	} catch (error) {
		console.log("ERROR: ", error);
		return null;
	}
}