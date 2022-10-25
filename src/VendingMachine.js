import React from "react";
import {v4 as uuid} from "uuid";
import { NavLink } from "react-router-dom";
import snackList from "./snackList";

function VendingMachine(){

    return (
        <div className="VendingMachine">
            {snackList.map(item => (
                <div className="Vending Snack" key={uuid()}>
                    <NavLink exact="true"
                             to={item.route}
                             key={uuid()}
                    > {item.name}
                    </NavLink>
                </div>))
            }
        </div>
    )
}

export default VendingMachine;
