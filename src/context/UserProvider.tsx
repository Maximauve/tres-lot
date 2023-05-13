import React, { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { UserActionType, UserState, initialUserState, userReducer } from "./userReducer";
import { Action } from "src/interfaces/Action";


export const UserContext = createContext<[UserState, Dispatch<Action<UserActionType>>]>([
	initialUserState,
	() => null,
]);

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, initialUserState);
	return (
		<UserContext.Provider value={[state, dispatch]}>
			{children}
		</UserContext.Provider>
	)
}

export default UserProvider;