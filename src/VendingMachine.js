import React from "react";
import {v4 as uuid} from "uuid";
import { NavLink } from "react-router-dom";
import snackList from "./snackList";
import "./VendingMachine.css";

function VendingMachine(){

    return (
        <div id="Vending-machine-container">
            <div className="Vending-machine-outer">
                <div className="Vending-machine-inner">
                    <div className="Vending-machine-screen">
                        {snackList.map(item => (
                                <NavLink className="Vending-snack-link"
                                         exact="true"
                                         to={item.route}
                                         key={uuid()}>
                                    <div className="Vending-snack">
                                        {item.name}
                                    </div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="Vending-machine-tray"></div>
        </div>
    )
}

export default VendingMachine;
