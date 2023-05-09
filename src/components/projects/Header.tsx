import React from "react";

interface Props {
	title: string;
}

const Header: React.FC<Props> = (props: Props) => {
	const { title } = props;

	return (
		<div className="project-header">
			<textarea className="project-list-title" maxLength={512} defaultValue={title} />
		</div>
	)
}


export default Header;