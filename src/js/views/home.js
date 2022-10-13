import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => (
	<>

		{/* Mostrar personajes */}
		<h2 className="container text-danger my-1">
			Characters
		</h2>
		< Characters />

		{/* Mostrar Planetas  */}
		<h2 className="container text-danger my-3">
			Planets
		</h2>
		< Planets />

		{/* Mostrar Vehiculos  */}
		<h2 className="container text-danger my-3">
			Vehicles
		</h2>
		< Vehicles />
		<hr/>
	</>
);
