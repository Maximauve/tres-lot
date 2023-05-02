import { List } from "./List";
import { Workspace } from "./Workspace";

export interface Project {
	name: string;
	slug: string;
	lists?: List[];
	workspace: Workspace;
}