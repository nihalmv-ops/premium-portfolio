import "./Loader.css";
import { useEffect,useState } from "react";

export default function Loader(){

const[hide,setHide]=useState(false);

useEffect(()=>{

const t=setTimeout(()=>{

setHide(true);

},2500);

return ()=>clearTimeout(t);

},[]);

return(

<div className={`loader ${hide?"hide":""}`}>

<h1>NM</h1>

<p>Loading Portfolio...</p>

<div className="bar">

<div className="progress"></div>

</div>

</div>

);

}