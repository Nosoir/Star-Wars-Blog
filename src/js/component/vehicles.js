import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Vehicles = () => {

const [vehicles, setVehicles] = useState([]);

// Traer API

const getList = async ()=>{
    try {
        const response = await fetch("https://swapi.dev/api/vehicles/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        setVehicles(data.results)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
    getList()
},[])


// Hacer carta de información
return (
    <div className="container py-2 overflow-auto">
        <div className="mt-3 d-flex flex-row flex-nowrap">

            {/* Imagen y texto de la carta */}
            {vehicles.map((item, id)=>
                <div className="card m-3" style={{minWidth: "18rem"}} key={id}>
                    <img src="https://assets.adnradio.cl/2022/04/Tales-of-the-Jedi-Nueva-serie-animada-Star-Wars-925x470.png" className="card-img-top" />
                    <div className="card-body d-flex flex-column bg-dark">
                        <h5 className="card-title text-center">{ item.name }</h5>
                        <p className="card-text m-0">Vehicle Class: {item.vehicle_class }</p>
                        <p className="card-text m-0">Manufacturer: {item.manufacturer }</p>
                        <p className="card-text m-0">Cost: {item.cost_in_credits }</p>

                        {/* Botones */}
                        <div className="d-flex mt-auto">
                            <Link className="btn btn-outline-info" to={""}>Learn more</Link>
                            <button className="btn btn-outline-warning ms-auto">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
);
}