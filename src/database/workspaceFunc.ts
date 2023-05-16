import { Workspace } from "src/interfaces/Workspace";
import { Collections } from "./Collections";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import db from "src/config/firebase"

export const createWorkspace = async (workspace: Workspace): Promise<void> => {
	const workspaceRef = collection(db, Collections.WORKSPACE);

	const userWorkspaces = await getWorkspacesByUser(workspace.createdBy.id as string);
	if (userWorkspaces) {
		if (userWorkspaces.filter(ws => ws.name === workspace.name).length > 0) {
			throw new Error("Vous avez déjà un workspace avec ce nom");
		}
	}
	console.log("<WORKPACE_FUNC> workspace -> ", workspace);

	const workspaceDoc = {
		...workspace,
		createdBy: workspace.createdBy.id,
	}
	const docRef = await addDoc(workspaceRef, workspaceDoc);
	console.log(docRef);

}


export const getWorkspacesByUser = async (userId: string): Promise<Workspace[] | null> => {
	const q = query(collection(db, Collections.WORKSPACE), where("createdBy", "==", userId));
	const qSnap = await getDocs(q);

	if (qSnap.empty) {
		return null;
	}
	const workspaces: Workspace[] = qSnap.docs.map(doc => doc.data() as Workspace);

	return workspaces;

}
