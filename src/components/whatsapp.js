import React from "react";
import whatsappImg from './assets/whatsapp.png'

const WhatsappLogo =()=>{
    return(
        <>
        <div className="whatsapp-button">
        <a href="https://wa.me/9166676663">    <img src={whatsappImg}></img></a>
        </div>
        </>
    )
}

export default WhatsappLogo;