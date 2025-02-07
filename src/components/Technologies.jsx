import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa6";
import { SiRedux } from "react-icons/si";
import { motion } from "motion/react"

const iconVariants = (duration) => ({
  initial: {y: -10},
  animate:{
    y:[10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 !important">
      <motion.h1 
      whileInView={{opacity: 1, y:0}}
      initial={{opacity:0 ,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity: 1, x:0}}
      initial={{opacity:0 ,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4" >
          <FaReact className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4" >
          <SiMongodb className="text-5xl text-green-600" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4" >
          <SiTailwindcss className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4" >
          <FaNodeJs className="text-5xl text-green-800" />
        </motion.div>
        
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4" >
          <IoLogoJavascript className="text-5xl text-yellow-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4" >
          <FaPython className="text-5xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4" >
          <SiRedux className="text-5xl text-violet-600" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
