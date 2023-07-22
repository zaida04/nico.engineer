import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

            {isExpanded && (
                <div className="flex flex-col text-white text-center gap-4 my-8">
                    {Object.keys(headings).map((key) => (
                        <a key={key} className={`text-white ${hoverable}`} href={headings[key as keyof typeof headings]}>
                            {key}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}
