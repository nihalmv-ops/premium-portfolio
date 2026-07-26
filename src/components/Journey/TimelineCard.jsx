import { motion } from "framer-motion";


function TimelineCard({ item, index }) {

  const isLeft = index % 2 === 0;


  return (

    <motion.div

      className={`timeline-item ${
        isLeft ? "left" : "right"
      }`}

      initial={{
        opacity:0,
        x:isLeft ? -100 : 100,
      }}

      whileInView={{
        opacity:1,
        x:0,
      }}

      viewport={{
        once:false,
        amount:0.3,
      }}

      transition={{
        duration:0.8,
        ease:"easeOut",
      }}

    >


      {/* Timeline Dot */}

      <motion.div

        className="timeline-dot"

        initial={{
          scale:0,
        }}

        whileInView={{
          scale:1,
        }}

        viewport={{
          once:false,
        }}

        transition={{
          duration:.5,
        }}

      />


      {/* Card */}

      <div className="journey-card">


        <span className="journey-year">

          {item.year}

        </span>


        <h3>

          {item.title}

        </h3>


        <p>

          {item.description}

        </p>



        <div className="journey-skills">


          {item.skills.map((skill,index)=>(

            <motion.span

              key={skill}

              initial={{
                opacity:0,
                y:20
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:false
              }}

              transition={{
                delay:index * .1
              }}

            >

              {skill}

            </motion.span>


          ))}


        </div>


      </div>


    </motion.div>

  );

}


export default TimelineCard;