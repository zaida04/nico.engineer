import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


function Email(props: React.SVGProps<SVGSVGElement>) {
  return (
    <FontAwesomeIcon width="1.75em" height="1.75em" fill="white" color="white" icon={faEnvelope} />
  );
}

export default React.memo(Email);