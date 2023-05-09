import React from "react";

interface Props {
	id: string;
	name: string;
	type: string;
	placeholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props: Props) => {
	const { id, name, type, placeholder, onChange } = props;

	return (
		<input
			id={id}
			name={name}
			type={type}
			placeholder={placeholder}
			required
			onChange={onChange}
		/>
	)
}


export default Input;