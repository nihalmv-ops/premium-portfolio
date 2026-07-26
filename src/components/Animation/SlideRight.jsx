import { motion } from "framer-motion";

function SlideRight({children}) {


return (

<motion.div

initial={{
opacity:0,
x:120
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:false,
amount:.3
}}

transition={{

duration:.8,

ease:[0.22,1,0.36,1]

}}

>

{children}

</motion.div>

);


}

export default SlideRight;
