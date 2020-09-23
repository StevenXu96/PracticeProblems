import React from 'react'
import {Link} from "react-router-dom";
import "./Chemistry.css"

class Chemistry extends React.Component{

    render() {
        return (
            <div className="chemistry_home_screen">
                <div className="chapter">
                    <h4><Link to={'/MoleCalc'} id="moleCalc"> Mole Calculations </Link></h4>
                </div>
                <div className="chapter">
                    <h4><Link to={'/Mole'} id="mole"> Mole </Link></h4>
                </div>
                <div className="chapter">
                    <h4><Link to={'/Stoichiometry'} id="Stoichiometry"> Stoichiometry </Link></h4>
                </div>
                <div className="chapter">
                    <h4><Link to={'/Solution_chemistry'} id="Solution_chemistry"> Solution Chemistry </Link></h4>
                </div>
            </div>
        )
    }

}

export default Chemistry