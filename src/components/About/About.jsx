import React from "react";
import "./About.css";

function About () {
    return (
        <>
            <section id="about" className="about">
                <div className="about-text">
                    <p>Há mais de 5 anos atuando no mercado de reciclagem.</p>
                    <p>Coletamos materiais ferrosos, não ferrosos e sucatas em empresas e pós obras. Compramos e vendemos reciclagens de modo geral.</p>
                    <p>Agende seu horario através do nosso atendimento!</p>
                </div>

                <div className="contact-info">
                    <div className="location-info">
                        <h2>Nossa localização</h2>
                        <a href="https://maps.app.goo.gl/twkUvnpEyVcA7rBw5" target="_blank" rel="noopener noreferrer">
                           <i className="fas fa-map-marker-alt"></i>
                        <p>R. Serra de Ibicaba, 38 - Jardim Paranapanema, Campinas - SP, 13100-306</p>  </a>
                    </div>

                    <div className="google-page">
                        <h2>Nossa página no Google</h2>
                        <a href="https://share.google/3rmtyMSeXWUCsDfRb" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-google"></i>
                            <p>Ficou com alguma dúvida? Acesse para mais informações</p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About