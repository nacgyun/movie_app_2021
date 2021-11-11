import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./routes/Home"
import Navigation from "./components/Navigation";
import Rooms from "./routes/Rooms";
import Room from "./routes/Room"
import Addroom from "./routes/Addroom";
import ReceivePhoto from "./routes/ReceivePhoto";
import MannerRate from "./routes/MannerRate";

function App () {
  return (
    <BrowserRouter>
    <Navigation />
    <div>
    <Switch>
      <Route path="/" exact={true} component={Home} ></Route>
      <Route path="/rooms/addRoom" exact={true} component={Addroom} ></Route>
      <Route path="/rooms/:rid" exact={true} component={Room} ></Route>
      <Route path="/rooms/:rid/mannerRate" exact={true} component={MannerRate} ></Route>
      <Route path="/rooms/:rid/photo" component={ReceivePhoto} ></Route>
      <Route path="/rooms" exact={true} component={Rooms} ></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;