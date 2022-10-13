import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {

const [characters, setCharacters] = useState([]);
const {store, actions} = useContext(Context)

// Traer API

const getList = async ()=>{
    try {
        const response = await fetch("https://swapi.dev/api/people/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        setCharacters(data.results)
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


// Hacer carta de información
return (
    <div className="container py-2 overflow-auto">
        <div className="mt-3 d-flex flex-row flex-nowrap">
            {characters.map((item, id)=>
                <div className="card m-3" style={{minWidth: "18rem"}} key={id}>
                    <img src={"https://starwars-visualguide.com/assets/img/characters/"+(id+1)+".jpg"} className="card-img-top" alt="..."/>
                    <div className="card-body d-flex flex-column bg-dark">
                        <h5 className="card-title text-center">{ item.name }</h5>
                        <p className="card-text m-0">Gender: {item.gender}</p>
                        <p className="card-text m-0">Hair Color: {item.hair_color}</p>
                        <p className="card-text m-0 mb-5">Eye Color: {item.eye_color}</p>

                        <div className="d-flex mt-auto">
                            <Link className="btn btn-outline-info" to={"/character/"+(id+1)}>Learn more</Link>
                            <button className="btn btn-outline-warning ms-auto" onClick={()=> actions.agregarFavorito(("c-"+id), "(C) "+item.name)}>
                                 <i className={agregarFavorito("c-"+id) === true ? "fas fa-heart text-warning" :"far fa-heart"} ></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
);
}