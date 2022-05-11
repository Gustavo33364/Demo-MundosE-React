import React from 'react';
import Formulario from './Formulario';


const Section5 = () => {
    return (
        <div>
            <div className="formulario_globo">
                <div className="formulario_globo__form" id="contact">
                    <div className="formulario_globo__content">
                        <h4 className="formulario_globo__content__h4">Contactanos <span className='formulario_globo__content_text_orange'>Se parte de nuestro mundo!</span></h4>
                        <Formulario/>
                    </div>
                    <div className="formulario_globo__imagen-contacto">
                        <img src="./images/contact.png" alt="contacto"/>
                    </div>
                </div>
            </div>
            <footer>
                <div className="pie-pagina">
                    <p className="pie-pagina__p5"><sup>2022 © All rights reserved</sup></p>
                    <div className="footer_logo">
                        <img className="pie-pagina__footer-logo" src="./images/footer-logo.png" alt="Logo 25 WATTS"/>
                    </div>
                </div>
            </footer>
        </div>




        
    )
}

export default Section5
