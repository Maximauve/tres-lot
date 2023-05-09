import React from "react";

interface Props {
	title: string;
}

const Header: React.FC<Props> = (props: Props) => {
    const { title } = props;

    return (
        <div className="auth-header">
            <img src="/images/logo.png"
                alt="logo"
                className="auth-header-logo"
            />
            <div className="auth-header-title">
                {title}
            </div>
        </div>
    )
}


export default Header;