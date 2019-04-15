import React, { Component } from "react"
import { NavLink } from "react-router-dom"


import "./Header.css"

class Header extends Component {
	render() {
		return (
			<div className="Header-header">
				<NavLink exact to="/" activeClassName="selected" className="link">
					Accueil
        </NavLink>
				<NavLink to="/history" activeClassName="selected" className="link">
					Notre Histoire
        </NavLink>
				<NavLink to="/end" activeClassName="selected" className="link">
					La fin d'une Histoire
        </NavLink>
				{/* <div className="Header-link">Link</div>
        <div className="Header-link">Link</div>
        <div className="Header-link">Link</div> */}
			</div>
		)
	}
}

export default Header