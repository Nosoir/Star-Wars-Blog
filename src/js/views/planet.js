import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Planet = () => {

    const [planet, setPlanet] = useState([]);
    const theid = useParams();
    // Traer API
   
    const getList = async ()=>{
        try {
            const response = await fetch("https://swapi.dev/api/planets/"+theid.theid, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            setPlanet(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        getList()
    },[])
    

	return (
		<div className="container d-flex justify-content-center">
            <div className="card mb-3 rounded-0 bg-dark" style={{maxWidth: "900px"}} >
            <div className="row g-0">
                <div className="col-md-4">
                {theid.theid === "1" ?
                    <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="img-fluid h-100 w-100" alt="..."/>
                :
                    <img src={"https://starwars-visualguide.com/assets/img/planets/"+theid.theid+".jpg"} className="img-fluid h-100 w-100" alt="..."/>
                }
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
			<hr />
            <div className="row text-center text-danger">
                <div className="col"><b>Name</b></div>
                <div className="col"><b>Climate</b></div>
                <div className="col"><b>Population</b></div>
                <div className="col"><b>Orbital Period</b></div>
                <div className="col"><b>Rotation Period</b></div>
                <div className="col"><b>Diameter</b></div>
            </div>

            <div className="row text-danger text-center">
                <div className="col">{planet.name}</div>
                <div className="col">{planet.climate}</div>
                <div className="col">{planet.population}</div>
                <div className="col">{planet.orbital_period}</div>
                <div className="col">{planet.rotation_period}</div>
                <div className="col">{planet.diameter}</div>
            </div>
        </div>
        </div>
	);
};


