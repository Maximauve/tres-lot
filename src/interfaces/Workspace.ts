import { Table } from "./Table";
import { User } from "./User";

export interface Workspace {
	name: string;
	creationDate: Date;
	members?: User[];
	tables?: Table[];
	picture?: string;
}
