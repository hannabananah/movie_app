import React from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
	return (
		<div className="nav flex">
			<Link className="bttn" to="/">Home</Link>
			<Link className="bttn" to="/about">About</Link>
		</div>
	)
}

export default Navigation