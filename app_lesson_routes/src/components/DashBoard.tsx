import {Link} from "react-router";
import { useParams } from "react-router";
import {useState} from "react";

function DashBoard(){
    const { id } =useParams();
    const [userId,setUserId]=useState(0);
return (
      <>
      <h1>Benvenuto nella DashBoard {id}</h1>
  
      <input 
        type="number"
        placeholder="Inserisci lo userid qui"
        onChange={ (e) => {setUserId(e.target.value);}}
    />
   <Link to={`/dashboard/${userId}`} >

    <button>go to user!</button>
   </Link>
   </>
);



}
export default DashBoard;