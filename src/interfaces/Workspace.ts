import { Project } from "./Project";
import { User } from "./User";

export interface Workspace {
	name: string;
	slug: string;
	description?: string;
	creationDate: Date;
	members?: User[];
	createdBy: User;
	projects?: Project[];
	picture?: string;
}
