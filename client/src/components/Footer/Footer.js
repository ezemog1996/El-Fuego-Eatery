import React from 'react';
import "./style.css";

function Footer() {
    return (
        <footer className="d-flex justify-content-center pt-2 text-white" style={{"backgroundColor": "black", position: "fixed", bottom: "0", left: "0", right: "0", color: "black"}}>
            <h5>
                <i className="fas fa-utensils"></i> El Fuego Eatery Company <i className="fas fa-cocktail"></i>
            </h5>
            <p>
                (123) 456-7890
            </p>
        </footer>
    )
}

export default Footer;