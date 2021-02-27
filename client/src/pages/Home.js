import React from 'react';
import ReservationForm from "../components/ReservationForm/ReservationForm.js";
import MainImage from "../components/MainImage/MainImage.js";
import Images from "../components/Images/Images.js";
import About from "../components/About/About.js";
import Footer from "../components/Footer/Footer.js";

function Home() {
    return (
        <div className="container py-4 px-5">
            <h1 className="row d-flex justify-content-center" style={{"fontSize": "5rem"}}>El Fuego Eatery</h1>
            <main className="row">
                <ReservationForm />
                <MainImage />
            </main>
            <Images />
            <About />
            <Footer />
        </div>
    )
}

export default Home;