import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Flex } from "@chakra-ui/react";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
     
      <div className="footer_contact">
        <h2>Contactanos</h2>
        <Link target="_blank" to={"https://wa.link/6cnj10"}>
          <Flex alignItems="center" gap={2}>
            <FontAwesomeIcon icon={faWhatsapp} fontSize={22} />
            <h4>1164212370</h4>
          </Flex>
        </Link>
        <Flex alignItems="center" gap={2}>
          <FontAwesomeIcon icon={faEnvelope} fontSize={22} />
          <button
            onClick={() => (window.location = "mailto:jdilernia99@gmail.com")}
          >
            jdilernia99@gmail.com
          </button>
        </Flex>
      
      </div>
      <div className="footer_networks">
        <h2>Social</h2>
        <div className="networks">
        <Link target="_blank" to={"https://www.instagram.com"}>
            <i><FontAwesomeIcon icon={faInstagram}/></i>
          </Link>
          <Link target="_blank" to={"https://www.twitter.com"}>
            <i><FontAwesomeIcon icon={faTwitter}/></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
