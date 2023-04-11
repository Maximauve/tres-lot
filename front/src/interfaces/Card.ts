import { ApiResource } from "../utils/types";

export interface Card extends ApiResource {
	title?: string;
	description?: string;
	members?: any;
	tags?: string[];
	comments?: string[];
	parent?: string;
	dueDate?: string;
	due_date?: string;
}
