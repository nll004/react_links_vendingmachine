import React from "react";
import { NavLink } from "react-router-dom";
import {v4 as uuid} from "uuid";
import snackList from "./snackList";

function NavBar(){

    return (
        <nav>
            <NavLink exact="true" to="/">Vending Home</NavLink>
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
