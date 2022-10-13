import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Character = () => {

    
const [character, setCharacter] = useState([]);
const theid = useParams();
// Traer API

const getList = async ()=>{
    try {
        const response = await fetch("https://swapi.dev/api/people/"+theid.theid, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        setCharacter(data)
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
                    <img src={"https://starwars-visualguide.com/assets/img/characters/"+theid.theid+".jpg"} className="card-img-top" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
			<hr />
            <div className="row text-danger text-center">
                <div className="col"><b>Name</b></div>
                <div className="col"><b>Birthday Year</b></div>
                <div className="col"><b>Gender</b></div>
                <div className="col"><b>Height</b></div>
                <div className="col"><b>Skin Color</b></div>
                <div className="col"><b>Eye Color</b></div>
            </div>
            <div className="row text-danger text-center">
                <div className="col">{character.name}</div>
                <div className="col">{character.birth_year}</div>
                <div className="col">{character.gender}</div>
                <div className="col">{character.height}</div>
                <div className="col">{character.skin_color}</div>
                <div className="col">{character.eye_color}</div>
            </div>
        </div>
        </div>
	);
};
