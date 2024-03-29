import React from "react";

import "./footer.css";

import config from "../../../config";
import FormContact from "@components/FormContact";
import Box from "@components/Box";
import Text from "@components/Text";

interface Props {
  onClose: any;
  isVisible: any;
}

const Footer:React.FC<Props> = ({ onClose, isVisible }: Props) => (
  <footer id="footer" className={`panel ${isVisible ? "active" : ""}`}>
    <div className="inner split">

      <Box>
        <section>
          <Text variant="h3" color="white">Contact</Text>
          <Box height="100%" width="100%">
            <FormContact />
          </Box>

        </section>
      </Box>

      <Box>

        <section>
          <ul className="icons">
            {config.socialLinks.map((social) => {
              const { icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} style={{ zoom: 10 }}>
                    <div className={`icon ${icon}`}>
                      <span className="label">{name}</span>
                    </div>
                  </a>

                </li>
              );
            })}


            <li>
              <a
                className="bmc-button"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.buymeacoffee.com/resciplined"
              >
                <img
                  src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                  alt="Buy me a coffee"
                />
                <span
                  style={{ marginLeft: "5px", fontSize: "28px", fontFamily: "Roboto" }}
                >
                  Buy me a coffee
                </span>
              </a>
            </li>


          </ul>
        </section>
      </Box>

    </div>

    <div
      className="closer"
      onClick={(e) => {
        e.preventDefault();
        onClose();
      }}
    />
  </footer>
);

export default Footer;
