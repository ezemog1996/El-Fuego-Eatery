import React from 'react';
import "./style.css";

function Footer() {
    return (
        <footer className="d-flex justify-content-center pt-2" style={{"backgroundColor": "chocolate", position: "fixed", bottom: "0", left: "0", right: "0", color: "black"}}>
            <h5>
                <i className="fas fa-utensils"></i> El Fuego Eatery Company <i className="fas fa-cocktail"></i>
            </h5>
        </footer>
    )
}

export default Footer;