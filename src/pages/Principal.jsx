import React from "react";
import ButtonSwitch from "../components/ButtonSwitch";
import { NavLink } from "react-router-dom";
import NavContact from "../components/NavContact";

const Principal = () => {
  return (
    <>
    <NavContact />
      <div className="containerPrincipal">
        <div className="containerNameEtTitre">
          <p className="name">Tony TECHER</p>
          <p className="Porte">Porte</p>
          <p className="Folio">Folio</p>
          <div className="containerProjets">
            <h3 className="pro">Pro</h3>
            <h3 className="jets">jets :</h3>
            <section className="projectCard">
              <div className="projet1">
                <h1>Sharring is carring</h1>
                <a
                  href="https://dreallers.github.io/sharing_is_caring/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="sharring"
                    src="/images/sharring.png"
                    alt="sharring is carring"
                  />
                </a>
              </div>
              <div className="projet2">
                <h1>Wildclash</h1>
                <a
                  href="https://clash-heroes-eazaswc3f-techer-tonys-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="wildClash"
                    src="/images/wildClash.png"
                    alt="wildClash"
                  />
                </a>
              </div>
              <div className="projet3">
                <h1>WildTube</h1>
                <NavLink to="/EnCours">
                  <img
                    className="wildTube"
                    src="/images/wildTube.png"
                    alt="wildTube"
                  />
                </NavLink>
              </div>
            </section>
          </div>
        </div>
      </div>
      <ButtonSwitch />
    </>
  );
};

export default Principal;
