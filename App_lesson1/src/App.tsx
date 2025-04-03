import {Message,MyFooter,MyHeader} from "./Message";
import NavBar_Toogle from "./components/NavBar_Toogle";
import NavBar_Base from "./components/NavBar_base";
import NavBar_Footer from "./components/NavBar_Footer";
import ListGroup from "./components/ListGroup";
//import NavbarImageText from "./components/NavbarImageText";
function App(){
  return (
  <>
   <div><NavBar_Base  Titolo="Think Tank v1.01"/></div>
    <div><ListGroup items={[]} onSelect={function (item: string): void {
        throw new Error("Function not implemented.");
      } }/></div>
  <div><NavBar_Toogle/></div>
  <div><NavBar_Footer Titolo="Autore MP" Message="Informazioni al seguente link:" /></div>
 </>
  );
}

export default App;