import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
    // A mensagem já vai com %20 para representar o espaço
    const message = "Vim pelo site e gostaria de mais informacoes.";
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "5519995014274";

    return (
        <a 
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`} 
            className="whatsapp-button"
            target="_blank" 
            rel="noopener noreferrer"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    );
}

export default WhatsAppButton;