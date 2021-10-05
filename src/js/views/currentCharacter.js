import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CurrentCharacter = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getCharacter(params.id);
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-6">
					<img src="https://via.placeholder.com/800x400" alt="" style={{ width: "100%" }} />
				</div>
				<div className="col-lg-6 col-6 text-center">
					<h1>{store.character.properties && store.character.properties.name}</h1>
					<p>{store.character.description}</p>
				</div>
			</div>
			<hr className="text-danger" />
			<div className="row">
				<div className="col-12">
					<table border="0" className="text-danger fw-bold text-center mx-auto fs-5">
						<thead>
							<tr>
								<th className="px-5 py-3">Name</th>
								<th className="px-5 py-3">Birth Year</th>
								<th className="px-5 py-3">Gender</th>
								<th className="px-5 py-3">Height</th>
								<th className="px-5 py-3">Skin Color</th>
								<th className="px-5 py-3">Eye Color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{store.character.properties && store.character.properties.name}</td>
								<td>{store.character.properties && store.character.properties.birth_year}</td>
								<td>{store.character.properties && store.character.properties.gender}</td>
								<td>{store.character.properties && store.character.properties.height}</td>
								<td>{store.character.properties && store.character.properties.skin_color}</td>
								<td>{store.character.properties && store.character.properties.eye_color}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default CurrentCharacter;
