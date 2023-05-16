/* eslint-disable indent */

import { Action } from "src/interfaces/Action";
import { User } from "src/interfaces/User";

export enum UserActionType {
	SET_USER = "SET_USER",
	SET_LOADING = "SET_LOADING",
}

export interface UserState {
	user: User | null;
	loading: boolean;
}

export const initialUserState: UserState = {
	user: null,
	loading: false,
}

export const userReducer = (state: UserState, action: Action<UserActionType>): UserState => {
	switch (action.type) {
		case UserActionType.SET_USER:
			return {
				...state,
				user: action.payload,
				loading: true,
			}
		case UserActionType.SET_LOADING:
			return {
				...state,
				loading: action.payload,
			}
		default:
			return state;
	}
}