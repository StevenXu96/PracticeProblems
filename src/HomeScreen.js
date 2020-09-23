import React from 'react'
import {Link} from "react-router-dom";

class HomeScreen extends React.Component{



    render() {
        return (
            <div className="home_screen">
                <div className="subjects">
                    <button><Link to={"/Chemistry"} id="Chemistry"> Chemistry Practice Problem </Link></button>
                </div>
            </div>
        )
    }

}

export default HomeScreen;