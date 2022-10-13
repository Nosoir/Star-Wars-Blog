import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Vehicle = () => {

    const [vehicle, setVehicle] = useState([]);
    // const theid = useParams();
    // Traer API
    // +theid.theid
    const getList = async ()=>{
        try {
            const response = await fetch("https://swapi.dev/api/vehicles/1/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            setVehicle(data)
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
            <div className="card mb-3 rounded-0" style={{maxWidth: "900px"}} >
            <div className="row g-0">
                <div className="col-md-4">
                <img src="https://assets.adnradio.cl/2022/04/Tales-of-the-Jedi-Nueva-serie-animada-Star-Wars-925x470.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{vehicle.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
			<hr />
            <div className="row text-center text-danger">
                <div className="col"><b>Name</b></div>
                <div className="col"><b>Model</b></div>
                <div className="col"><b>Vehicle Class</b></div>
                <div className="col"><b>Manufacturer</b></div>
                <div className="col"><b>Cost</b></div>
                <div className="col"><b>Capacity</b></div>
            </div>

            <div className="row text-danger text-center">
                <div className="col">{vehicle.name}</div>
                <div className="col">{vehicle.model}</div>
                <div className="col">{vehicle.vehicle_class }</div>
                <div className="col">{vehicle.manufacturer }</div>
                <div className="col">{vehicle.cost_in_credits }</div>
                <div className="col">{vehicle.cargo_capacity }</div>
            </div>
        </div>
        </div>
	);
};


