import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {

const [planets, setPlanets] = useState([]);
const {store, actions} = useContext(Context)

// Traer API

const getList = async ()=>{
    try {
        const response = await fetch("https://swapi.dev/api/planets/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        setPlanets(data.results)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

function agregarFavorito(id) {
	let valueExist;
	for (let i = 0; i < store.favoritos.length; i++) {
		if(store.favoritos[i].index == id){
			valueExist = true
		}
	}
	if (valueExist === true) {
		return true
	}
}

useEffect(()=>{
    getList()
},[])

return (
    <div className="container py-2 overflow-auto">
        <div className="mt-3 d-flex flex-row flex-nowrap">
            {planets.map((item, id)=>
                <div className="card m-3" style={{minWidth: "18rem"}} key={id}>
                    {id === 0 ?
						<img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="card-img-top" alt="..."/>
						:
						<img src={"https://starwars-visualguide.com/assets/img/planets/"+(id+1)+".jpg"} className="card-img-top" alt="..."/>
					}
                    <div className="card-body d-flex flex-column bg-dark">
                        <h5 className="card-title text-center">{ item.name }</h5>
                        <p className="card-text m-0">Population: {item.population}</p>
                        <p className="card-text m-0">Terrain: {item.terrain}</p>
                    
                        <div className="d-flex mt-auto">
                            <Link className="btn btn-outline-info" to={"/planet/"+(id+1)}>Learn more</Link>
                            <button className="btn btn-outline-warning ms-auto" onClick={()=> actions.agregarFavorito(("p-"+id), "(P) "+item.name)}>
                                <i className={agregarFavorito("p-"+id) === true ? "fas fa-heart text-warning" :"far fa-heart"}></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
);
}