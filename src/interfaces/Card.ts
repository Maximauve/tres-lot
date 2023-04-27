import { Comment } from "./Comment";
import { Table } from "./Table";
import { Tag } from "./Tag";
import { User } from "./User";

export interface Card {
	title: string;
	description?: string;
	members?: User[];
	tags?: Tag[];
	comments?: Comment[];
	parent: Table;
	dueDate?: string;
}
