import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "src/components/navbar/Navbar"

export const GlobalLayout: React.FC = () => {
	return (
		<div className="main">
			<Navbar />
			<div className="content">
				<Outlet />
			</div>
		</div>
	)
}
