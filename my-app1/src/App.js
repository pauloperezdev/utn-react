import logo from './logo.svg';
import './App.css';
import Producto from './Components/Producto';


function App(){
  return(
    <div className="App">
      <p>Detalle Del Producto:</p>
      <hr/>
      <Producto/>
    </div>
  );
}
export default App;