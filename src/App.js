import React from 'react';
import {Route, BrowserRouter, Switch, Link} from "react-router-dom"
import HomeScreen from './HomeScreen'
import Chemistry from './Chemistry/Chemistry'
import MoleCalc from './Chemistry/MoleCalc/MoleCalc'
import Mole from './Chemistry/Mole/Mole'
import Stoichiometry from './Chemistry/Stoichiometry/Stoichiometry'
import Solution_chemistry from './Chemistry/Solution_chemistry/Solution_chemistry';
import Atomic from './Chemistry/Atomic/Atomic'

function App() {
  return(
        <div>
            <BrowserRouter>
                <h3><Link to={"/home"} id="title"> Practice Problem </Link></h3>
                <Switch>
                    <Route exact path={"/PracticeProblems/"} component={HomeScreen} />
                    <Route path={"/home"} component={HomeScreen} />
                    <Route path={"/Chemistry"} component={Chemistry} />
                    <Route path={"/MoleCalc"} component={MoleCalc} />
                    <Route path={"/Mole"} component={Mole} />
                    <Route path={"/Stoichiometry"} component={Stoichiometry} />
                    <Route path={"/Solution_chemistry"} component={Solution_chemistry} />
                    <Route path={"/Atomic"} component={Atomic} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;
