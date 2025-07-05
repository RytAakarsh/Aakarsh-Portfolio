import react from "react";
import { motion } from "framer-motion";

export const NameBold = ({ name }) => {
    return (
        <div>
            {name.split("").map((char , index) => {
                if (char === " ") {
                    return <span key={index} className="inline-block w-4" />;
                }

                return <span key={index} className="inline-block overflow-hidden whitespace-nowrap font-bold text-7xl mt-6 lg:mt-0 md:text-3xl lg:text-[155px] uppercase text-[#7af298]"
                >
                    {char}
                </span>
            })
            }
        </div>
    );
};
