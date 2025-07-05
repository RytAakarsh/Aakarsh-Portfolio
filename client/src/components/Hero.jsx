import react from "react";
import { motion } from "framer-motion";
import { FlipLink } from "./TextAnimation";
import './WavingHand.css';
import { NameBold } from "./NameBold";

export const Hero = () => {
    return (
        <div className="bg-[#191818] h-screen w-full ">
             {/* Intro */}
             <div className="px-4">
                <p className="text-white text-2xl font-bold">Hey,<span className="wave"> 👋</span> I'm a Full Stack Developer</p>
             </div>

             {/* Name */}
             <div className="px-4 py-2">
                <NameBold name="Aakarsh  Mishra" />
             </div>

             {/* Image */}
             <div></div>
        </div>
    )
}