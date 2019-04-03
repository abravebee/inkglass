/* == Dependencies == */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = props => {
  return (
    <div className="Contact">
      <ul>
        <li onClick={() => window.open("http://www.github.com/abravebee")}>
          <FontAwesomeIcon icon={["fab", "github"]} />
        </li>
        <li
          onClick={() => window.open("https://www.linkedin.com/in/casey-baker-a52a30167/")}>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </li>
        <li onClick={() => window.open("http://www.twitter.com/thatbravebee")}>
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </li>
        <li>
        <a href = "mailto:inkglass@gmail.com?subject=Inkglass Inquiry">
            <FontAwesomeIcon icon="envelope" />
        </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
