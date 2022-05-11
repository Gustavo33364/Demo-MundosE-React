import React from 'react'

const Section4 = () => {
    return (
        <article className="section4_acordion_container" id="corredor">
                <div className="section4_acordion">
                    <div className="accordion accordion-flush section4_acordion_texto" id="accordionCorredor">
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Diferentes Destinos en un Solo Viaje.
                                </button>
                            </h4>
                            <div id="flush-collapseOne" className="accordion-collapse collapse p-4" aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionCorredor">
                                <div className="accordion-body accordion_texto">Suele suceder que cuando pensamos en  unas vacaciones, decidirnos por el lugar de destino puede ser complicado. Sin embargo, si tienes el tiempo necesario y te equipas bien, puedes lograr llegar a diferentes destinos en un solo viaje, sin la necesidad de adquirir tours costosos.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Siempre en Familia.
                                </button>
                            </h4>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse p-4" aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionCorredor">
                                <div className="accordion-body accordion_texto">Viajar en familia es realmente gratificante, pero poder viajar en las Casillas Rodantes en una experiencia totalmente diferente, ya que es como estar dentro de casa. Esto es por todas las comodidades que esta te ofrece, pero saber que en cada momentos estás más cerca a tu destino
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h4 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed accordion_titulo" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Disminuir los gastos.
                                </button>
                            </h4>
                            <div id="flush-collapseThree" className="accordion-collapse collapse p-4" aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionCorredor">
                                <div className="accordion-body accordion_texto">Te has puesto a pensar cuánto gastas en hoteles en vacaciones, ¿no? Pues déjame decirte que es mucho lo que se gasta en hotelería. Y más si viajas en familia, esto sin contar con los gasto de comida que representa estar dentro de un hotel.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </article>
    )
}

export default Section4
