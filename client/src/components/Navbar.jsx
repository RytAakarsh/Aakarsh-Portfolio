import react , { useState } from 'react';
import { IoCode } from "react-icons/io5";
import { IoCodeSlash } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import { FlipLink } from './TextAnimation';


function Navbar () {
    const [menuopen , setmenuopen ] = useState(false);

    const togglemenu = () => {
        setmenuopen(!menuopen);
    }

    const menuVariants = {
    hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1, // delay between li items
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      when: "afterChildren",
    },
  },

  };


const AnimatedMenuItem = ({ text, href }) => (
  <a href={href} className="no-underline">
    <div className="overflow-hidden relative group h-[22px]  leading-none">
      <span className="block font-semibold lg:font-bold text-black group-hover:-translate-y-full transition-transform duration-300">
        {text}
      </span>
      <span className="block font-semibold lg:font-bold absolute top-0 left-0 text-black group-hover:-translate-y-full transition-transform duration-300">
        {text}
      </span>
      <span className="block font-semibold lg:font-bold absolute top-full left-0 text-black group-hover:-translate-y-full transition-transform duration-300">
        {text}
      </span>
    </div>
  </a>
);
  
    return (
        <nav className='relative z-50 flex justify-between p-4 bg-black lg:bg-transparent '>
            {/* right part */}

             <div>
                <span className='text-1xl md:text-2xl lg:text-xl font-bold leading-9 text-white'>
                    Aakarsh Mishra
                </span>
             </div>

             {/* Left Part */}
             <div >
                    <div onClick={togglemenu} className={`bg-white text-black px-4 py-3 lg:py-3 rounded-3xl hover:bg-[#7af298] hover:text-black transition duration-300 ease-in-out cursor-pointer w-full flex items-center justify-center gap-8 lg:gap-17 font-semibold lg:font-bold ${menuopen ? "bg-[#7af298] text-black hover:bg-[#7af298] hover:text-black" : "bg-white text-black"}`}>
                        <p>Menu</p>
                        <p> {menuopen ? <IoCodeSlash size={24}/> : <IoCode size={24} />} </p>
                    </div>
             </div>

              {/* Menu open   */}
        <AnimatePresence>
        {menuopen && (
            <motion.ul
              className="absolute top-20 right-4 bg-[#7af298] rounded-lg shadow-md p-4 flex flex-col gap-4 text-black w-30 lg:w-40"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
            >
          <li className='text-1xl lg:text-2xl text-black uppercase font-bold'><FlipLink href="#">Work</FlipLink></li>
          <li className='text-1xl lg:text-2xl text-black uppercase font-bold'><FlipLink href="#">Projects</FlipLink></li>
          <li className='text-1xl lg:text-2xl text-black uppercase font-bold'><FlipLink href="#">Contact</FlipLink></li>




          </motion.ul>
        )}
      </AnimatePresence>




        </nav>
    )
}
export default Navbar;