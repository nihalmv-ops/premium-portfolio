import "./Contact.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";


function Contact(){

return (

<section className="contact" id="contact">


<div className="container">


<motion.div

className="contact-box"

initial={{
opacity:0,
y:80
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
duration:.8
}}

>


<div className="contact-badge">

<span></span>

Open For Opportunities

</div>



<h2>

Let's Build Something
<br/>

<span>
Amazing Together
</span>

</h2>



<p>

I am a Full Stack MERN Developer
focused on building modern,
responsive and scalable web applications.

</p>



<div className="contact-buttons">


<a

href="mailto:yourmail@gmail.com"

className="contact-btn primary"

>

<FaEnvelope/>

Email Me

</a>



<a

href="https://github.com/"

target="_blank"

className="contact-btn"

>

<FaGithub/>

GitHub

</a>



<a

href="https://linkedin.com/"

target="_blank"

className="contact-btn"

>

<FaLinkedin/>

LinkedIn

</a>



</div>


</motion.div>


</div>


</section>

)

}


export default Contact;