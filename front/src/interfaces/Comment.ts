import { ApiResource } from "../utils/types";

export interface Comment extends ApiResource {
  author?: any;
  content?: string;
  date?: string;
  card?: string;
}
