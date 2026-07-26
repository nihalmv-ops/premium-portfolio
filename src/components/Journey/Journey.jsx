import "./Journey.css";

import { motion } from "framer-motion";

import journey from "../../data/journey";

import TimelineCard from "./TimelineCard";


function Journey(){

return (

<section className="journey" id="about">


<div className="container">


<motion.div

className="section-header"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:false,
amount:.3
}}

transition={{
duration:.7
}}

>


<p className="section-tag">

DEVELOPER JOURNEY

</p>


<h2 className="section-title">

Experience & Growth

</h2>


<p className="section-subtitle">

My journey building modern Full Stack MERN applications.

</p>


</motion.div>



<div className="timeline">


<div className="timeline-line"></div>



{journey.map((item,index)=>(

<TimelineCard

key={item.id}

item={item}

index={index}

/>

))}



</div>


</div>


</section>

)

}


export default Journey;