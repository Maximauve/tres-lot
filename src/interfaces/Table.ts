import { Card } from "./Card";
import { Workspace } from "./Workspace";

export interface Table {
	name: string;
	cards?: Card[];
	workspace: Workspace;
}
