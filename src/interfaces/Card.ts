import { Comment } from "./Comment";
import { List } from "./List";
import { Tag } from "./Tag";
import { User } from "./User";

export interface Card {
	title: string;
	description?: string;
	members?: User[];
	tags?: Tag[];
	comments?: Comment[];
	parent: List;
	dueDate?: string;
}
