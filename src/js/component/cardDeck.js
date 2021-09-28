import React, { useState } from "react";
import Card from "./card";

const CardDeck = props => {
	const [listaPersonajes, setListaPersonajes] = useState([
		{ name: "Luke", height: 170 },
		{ name: "Yoda", height: 100 }
	]);

	return (
		<div style={{ overflow: "auto" }}>
			{listaPersonajes.map((personaje, index) => {
				return <Card key={index} name={personaje.name} height={personaje.height} />;
			})}
		</div>
	);
};

export default CardDeck;
