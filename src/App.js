import React from "react";
import './App.css';
import {
    Switch,
    Route, BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Details from "./Details";

const App = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/detail/:id" component={Details}/>
                <Route path="/about" component={About}/>
            </Switch>
        </div>
    </BrowserRouter>

)

export default App;
