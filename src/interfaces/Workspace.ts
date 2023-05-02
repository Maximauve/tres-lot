import { Project } from "./Project";
import { User } from "./User";

export interface Workspace {
	name: string;
	creationDate: Date;
	members?: User[];
	projects?: Project[];
	picture?: string;
}
