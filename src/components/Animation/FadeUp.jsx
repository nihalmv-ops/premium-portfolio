import { motion } from "framer-motion";


function FadeUp({children}){


return(

<motion.div

initial={{

opacity:0,

y:60

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

{children}

</motion.div>


);


}


export default FadeUp;