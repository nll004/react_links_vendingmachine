import React from "react";
import { NavLink } from "react-router-dom";
import {v4 as uuid} from "uuid";
import snackList from "./snackList";
import "./NavBar.css";

function NavBar(){

    return (
        <nav>
            <NavLink to="/" end>Vending Home</NavLink>
            {snackList.map( item => (
                    <NavLink exact="true"
                             to={item.route}
                             key={uuid()}
                    > {item.name}
                    </NavLink>
                ))
            }
        </nav>
    )
}

export default NavBar;
