import { ApiResource } from "../utils/types";

export interface Table extends ApiResource {
	name?: string;
	cards?: string[];
	workspace?: string;
}
