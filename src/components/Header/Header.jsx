import React from "react";

import "./header.css";
import BarMenu from "../../images/bar-menu.png";

import H1 from "../../components/Title/Title-H1";
import { routesList } from "./routesSystemList.js";

export default function Header(props) {
	return (
		<header className="Header">
			<div className="List-Container">
				<img src={BarMenu} alt="barra do menu" className="Image-bar" />
				<ul className="Lista-de-Rotas">
					{routesList.map((objct, index) => (
						<li key={index}>
							<a href={objct.routeLink}>{objct.routeName}</a>
						</li>
					))}
				</ul>
			</div>
			<div className="Titel-Header">
				<H1>InJobs</H1>
			</div>
			<div className="Buttons-container">
				<button onClick={()=> alert('Usúario saiu!')}>Log Out</button>
			</div>
		</header>
	);
}
