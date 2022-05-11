import React from 'react'

const Section3 = () => {
    return (

        <article className="section3 container-fluid" id="products">
            <div className="section3__casa">
                <div className="section3__recuardoNaranja">
                    <div id="segundo_carousel" className="carousel slide section3_carousel" data-bs-ride="carousel">
                        <div className="carousel-inner section3_carousel_texto">
                            <div className="carousel-item active">
                                <p className="segundo_carousel_texto1">Vivi tu experiencia</p>
                                <h3 className="segundo_carousel_titulo">Casillas rodantes.</h3>
                                <p className="segundo_carousel_texto2">Lo Que DEBES SABER De Ellas!</p>
                            </div>
                            <div className="carousel-item">
                                <p className="segundo_carousel_texto1">Libertad.</p>
                                <h3 className="segundo_carousel_titulo">Un mundo diferente.</h3>
                                <p className="segundo_carousel_texto2">Planificar cada uno de los movimientos</p>
                            </div>
                            <div className="carousel-item">
                                <p className="segundo_carousel_texto1">La vida es solo una</p>
                                <h3 className="segundo_carousel_titulo">Es hoy</h3>
                                <p className="segundo_carousel_texto2">Con las Casillas Rodantes tienes la libertad de poder disponer de tu tiempo.</p>
                            </div>
                        </div>
                        <div className="section3_botones">
                            <button className="carousel-control-prev section3_botones1" type="button" data-bs-target="#segundo_carousel"
                                data-bs-slide="prev"><img src='../images/button/left.svg'></img>
                            </button>
                            <button className="carousel-control-next section3_botones2" type="button" data-bs-target="#segundo_carousel"
                                data-bs-slide="next"><img src='../images/button/right.svg'></img>
                        
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    
    )
}

export default Section3
