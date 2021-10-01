import React from "react";
import "../../styles/home.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CardDeckCharacters from "../component/cardDeckCharacters";
import CardDeckPlanets from "../component/cardDeckPlanets";

export const Home = () => (
	<div className="container">
		<CardDeckCharacters />
		<CardDeckPlanets />
	</div>
);
