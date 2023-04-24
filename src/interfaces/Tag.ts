import { ApiResource } from "../utils/types";

export interface Tag extends ApiResource {
	name?: string;
	color?: string;
	cards?: string[];
}
