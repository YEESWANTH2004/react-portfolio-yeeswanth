import { CONTACT } from "../constants"
import { motion } from "motion/react"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 ">
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0 ,y:-100}}
      transition={{duration:0.5}}
       className="my-20 text-center text-4xl">Get In Touch</motion.h1>
      <div className="text-center">
        <motion.p 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0 ,x:-100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0 ,x:100}}
        transition={{duration:1}} 
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href={
          `mailto:${CONTACT.email}`} 
          className="border-b hover:text-blue-500"
          aria-label={`Email me at ${CONTACT.email}`}
        >
          {CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
