import {Link} from "react-router-dom";

function NotFound(){

return (
   <>
      <h1>Pagina non trovata</h1>
      <Link to="/">
      <button>   ritorna alla Home  </button>
      </Link>
   
   
   
   </>


);
}
export default NotFound;