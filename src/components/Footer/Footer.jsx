import React from "react"
import "./Footer.css"

function Footer () {
    return (
        <>
            <footer id="footer" className="footer">
                <div className="contact-footer">
                    <h1>Contato</h1>
                    <p>Entre em contato conosco</p>
                    <div className="contact-info-item">
                        <a href="tel:+5519995014274">
                            <i className="fas fa-phone-alt"></i>
                            <span> 19 99501-4274</span>
                        </a>
                        
                    </div>
                    <div className="contact-info-item">
                        <a href="https://maps.app.goo.gl/LST1kg5VvG2DM4Xu8" target="_blank" >
                            <i className="fas fa-map-marker-alt"></i>
                            <span> R. Serra de Ibicaba, 38 - Jardim Paranapanema, Campinas - SP</span>
                        </a>  
                    </div>
                    <div className="contact-info-item">
                        <a href="https://share.google/3rmtyMSeXWUCsDfRb" target="_blank">
                            <i className="fab fa-google"></i>
                            <span>Google</span>
                        </a>
                        
                    </div>
                </div>

                <div className="copy-footer">
                    <p>&copy; 2025 W.Y Sucatas. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer