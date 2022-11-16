
import classes from './App.module.css';
import {Outlet, useLocation} from "react-router-dom";
import React from "react";
import Landing from "./containers/Landing";
import Header from "./components/Header";

function App() {
    let location = useLocation();


  return (
    // <div className={classes.App}>
    <div className={classes.app__container}>
        <Header />
        { location.pathname === "/" ? <Landing /> : <Outlet /> }

        {/*<div className={classes.footer__container}>*/}
        {/*    <p>la vox de la developper/programmeur/analyste fonctionnel(jajajaja) en le laboratoire. honorer y faire confiance a Dieu</p>*/}
        {/*</div>*/}
    </div>
    // </div>
  );
}

export default App;
