import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-dark mb-3 position-sticky top-0" style={{zIndex: "100"}}>
			<Link to="/">
				<img src="https://cdn.shopify.com/s/files/1/0013/7332/files/product.star-wars.logo.png" style={{width: "100px"}}/>
			</Link>
			<div className="dropdown mx-3">
			
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				<i className="far fa-heart"></i> Favorties 
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {store.favoritos.length}
                </span>
  				</button>
				<ul className="dropdown-menu dropdown-menu-end">
                    {(store.favoritos == "")
                    ?
                        <li className="text-dark text-center">No hay favoritos</li>
                    :
                        store.favoritos.map((item, id) => {
                            return ( 
                                item.label.includes("(C)")
                                ?
                                    <li key={id} className="d-flex justify-content-between align-items-center">
                                        <Link className="dropdown-item d-inline" to={"/character/"+(id+1)}>
                                            {item.label} 
                                        </Link>
                                        <i className="far fa-trash-alt d-inline me-2" role="button" onClick={()=> actions.borrarFavorito(id)}></i> 
                                    </li>
                                :
                                    <li key={id} className="d-flex justify-content-between align-items-center">
                                        <Link className="dropdown-item d-inline" to={"/planet/"+(id+1)} >
                                            {item.label} 
                                        </Link>
                                        <i className="far fa-trash-alt d-inline me-2" role="button" onClick={()=> actions.borrarFavorito(id)}></i> 
                                    </li>
                        )})
                    }
				</ul>
		</div>
		</nav>
	);
};
