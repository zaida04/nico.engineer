import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";

import { headings } from "./Navbar";
import { hoverable } from "../../utils/hoverable";

export default function MobileNavbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div className="flex justify-end mx-8 mt-6 mb-4">
                <FontAwesomeIcon className="w-8 text-white" icon={faBars} onClick={() => setIsExpanded(!isExpanded)} />
            </div>


            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isExpanded ? [0, 125] : [125, 0], opacity: isExpanded ? [0, 1] : [1, 0] }} // Animate the height change
                transition={{ duration: 0.35 }}
                className="flex flex-col text-white text-center gap-4 my-8">
                {Object.keys(headings).map((key) => (
                    <a key={key} className={`text-white ${hoverable}`} href={headings[key as keyof typeof headings]}>
                        {key}
                    </a>
                ))}
            </motion.div>

        </>
    );
}
