import React from 'react'
import NavBar from '../NavBar/NavBar'
import Button from '../Elements/Button'

const siguiente = () => {

}

setInterval(() => {
    siguiente();
}, 4000);
function Section1(props){
    return (
        <div className='principal container-fluid'>
        <NavBar />
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active texto1">
                    <img src="./images/bicicleta.png" className="d-none d-md-block w-100" alt="Casilla rodante con Bicicleta y montañas" />
                    <img src="./images/bicicleta-mobile.png" className="d-block w-100 d-md-none" alt="Casilla rodante con Bicicleta y montañas" />
                    
                    <div className="carousel-caption">
                        <h5 className='titulo_carousel'>Vivir tus proyectos</h5>
                        <p className='texto_carousel d-none d-md-block'>Una opcion distinta para acompañar tus momentos</p>
                        <div className='carousel__button'>
                            <Button symbol={'Read More'} />
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <img src="./images/contact.png" className="d-none d-md-block w-100" alt="Globos en el aire" />
                    <img src="./images/contact.png" className="d-block w-100 d-md-none" alt="Gobos en el aire" />
                    
                    <div className="carousel-caption">
                        <h5 className='titulo_carousel'>La naturaleza te espera</h5>
                        <p className='texto_carousel d-none d-md-block'>Mar, rio, montañas o lagos pueden ser el lugar perfecto para que la naturaleza te sorprenda.</p>
                        <div className='carousel__button'>
                            <Button symbol={'Read More'} />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./images/casa-lago.png" className="d-none d-md-block w-100" alt="Casa lago" />
                    <img src="./images/casa-lago.png" className="d-block w-100 d-md-none" alt="Casa lago" />
                    
                    <div className="carousel-caption ">
                        <h5 className='titulo_carousel'>Historia que enamoran</h5>
                        <p className='texto_carousel d-none d-md-block'>Conoce las opiniones de nuestros clientes.</p>
                        <div className='carousel__button'>
                            <Button symbol={'Read More'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Section1;
