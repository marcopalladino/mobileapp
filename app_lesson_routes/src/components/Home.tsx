
import {Link} from "react-router-dom";

function Home(){
return (
   <>
      <h1>Benvenuto nella home!</h1>
      <Link to="/dashboard/1">
      <button>   vai alla pagina dashboard  </button>
      </Link>
    
   </>


);



}
export default Home;