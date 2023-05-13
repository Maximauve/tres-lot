export interface Action<T> {
	type: T,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload?: any,
}
