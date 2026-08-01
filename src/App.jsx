import "./App.css";

import Background from "./components/Background/Background";
import Cursor from "./components/Cursor/Cursor";
import Loader from "./components/Loader/Loader";

import useLenis from "./hooks/useLenis";

function App(){

useLenis();

return(

<>

<Loader/>

<Cursor/>

<Background/>

<div style={{height:"500vh"}}></div>

</>

);

}

export default App;