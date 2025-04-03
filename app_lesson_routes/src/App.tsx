import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

import {Routes, Route } from "react-router-dom";


function App(){
    return(
<Routes>
        <Route path="/" element={ <Home />} />
        <Route path="*" element={ <NotFound/>} />
        <Route path="/login" element={ <Login/>} />
        <Route path="/dashboard/:id" element={ <DashBoard />} />

</Routes>

  )
}

export default App;