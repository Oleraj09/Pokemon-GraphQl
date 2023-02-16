import React from 'react'
import Header from './Header'
function Single() {
    return (
        <div>
            <main>
                <section id="item-page">
                    <Header />
                    <div className="body">
                        <div className="left">
                            <div className="sideimage"><img src="./assets/media/Left.png" alt="" /></div>
                        </div>
                        <div className="center mt-5">
                            <div className="item">
                                <div className="row">
                                    <div className="col-4 px-5">
                                        <div className="row">
                                            <div className="col-12">
                                                <h4>Pokemon Name</h4>
                                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Sed ex ea voluptatem</p>
                                            </div>
                                            <div className="col-12">
                                                <div className="box-item">
                                                    <div className="box-itemx">
                                                        <div className="item-list p-3">
                                                            <div className="row">
                                                                <div className="col-6 px-3 py-2">
                                                                    <h6 className="title">Height</h6>
                                                                    <p className="title">2.4"</p>
                                                                </div>
                                                                <div className="col-6 px-3 py-2">
                                                                    <h6 className="title">Category</h6>
                                                                    <p className="title">speed</p>
                                                                </div>
                                                                <div className="col-6 px-3 py-2">
                                                                    <h6 className="title">Weight</h6>
                                                                    <p className="title">11.4lbs</p>
                                                                </div>
                                                                <div className="col-6 px-3 py-2">
                                                                    <h6 className="title">Ability</h6>
                                                                    <p className="title">overgrow</p>
                                                                    <p className="title">Blaze</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 px-5">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="pokemon">
                                                    <img src="./assets/media/pokemon.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 px-5">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="item mb-3">
                                                    <h6>Type</h6>
                                                    <button className="mybutton g px-3 py-0 me-2 rounded-1">Grass</button>
                                                    <button className="mybutton w px-3 py-0 me-2 rounded-1">Watter</button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="item mb-3">
                                                    <h6>Weakness</h6>
                                                    <button className="mybutton g px-3 py-0 me-2 rounded-1">Grass</button>
                                                    <button className="mybutton w px-3 py-0 me-2 rounded-1">Watter</button>
                                                    <button className="mybutton g px-3 py-0 me-2 rounded-1">Grass</button>
                                                    <button className="mybutton w px-3 py-0 me-2 rounded-1">Watter</button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="item mb-3">
                                                    <h6>Stats</h6>
                                                    <p className="tag">HP</p>
                                                    <div className="progress">
                                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="tag">Attack</p>
                                                    <div className="progress">
                                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="tag">Defence</p>
                                                    <div className="progress">
                                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="tag">Special Attack</p>
                                                    <div className="progress">
                                                        <div className="progress-bar w-25" role="progressbar" aria-valuenow="25"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="tag">Special Defence</p>
                                                    <div className="progress">
                                                        <div className="progress-bar w-50" role="progressbar" aria-valuenow="50"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p className="tag">Speed</p>
                                                    <div className="progress">
                                                        <div className="progress-bar w-25" role="progressbar" aria-valuenow="25"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttonback d-flex justify-content-center">
                                <a href="/">
                                    <button className="homebutton px-4"><i className="fa-solid fa-house"></i> Back To Homepage</button>
                                </a>
                            </div>
                        </div>
                        <div className="right">
                            <div className="sideimage"><img src="./assets/media/Left.png" alt="" /></div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}

export default Single