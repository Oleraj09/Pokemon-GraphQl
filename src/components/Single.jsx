import React from 'react'
import Header from './Header'
function Single() {
    return (
        <div>
            <main>
                <section id="item-page">
                    <Header />
                    <div class="body">
                        <div class="left">
                            <div class="sideimage"><img src="./assets/media/Left.png" alt="" /></div>
                        </div>
                        <div class="center mt-5">
                            <div class="item">
                                <div class="row">
                                    <div class="col-4 px-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <h4>Pokemon Name</h4>
                                                <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Sed ex ea voluptatem</p>
                                            </div>
                                            <div class="col-12">
                                                <div class="box-item">
                                                    <div class="box-itemx">
                                                        <div class="item-list p-3">
                                                            <div class="row">
                                                                <div class="col-6 px-3 py-2">
                                                                    <h6 class="title">Height</h6>
                                                                    <p class="title">2.4"</p>
                                                                </div>
                                                                <div class="col-6 px-3 py-2">
                                                                    <h6 class="title">Category</h6>
                                                                    <p class="title">speed</p>
                                                                </div>
                                                                <div class="col-6 px-3 py-2">
                                                                    <h6 class="title">Weight</h6>
                                                                    <p class="title">11.4lbs</p>
                                                                </div>
                                                                <div class="col-6 px-3 py-2">
                                                                    <h6 class="title">Ability</h6>
                                                                    <p class="title">overgrow</p>
                                                                    <p class="title">Blaze</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 px-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="pokemon">
                                                    <img src="./assets/media/pokemon.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4 px-5">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="item mb-3">
                                                    <h6>Type</h6>
                                                    <button class="mybutton g px-3 py-0 me-2 rounded-1">Grass</button>
                                                    <button class="mybutton w px-3 py-0 me-2 rounded-1">Watter</button>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="item mb-3">
                                                    <h6>Weakness</h6>
                                                    <button class="mybutton g px-3 py-0 me-2 rounded-1">Grass</button>
                                                    <button class="mybutton w px-3 py-0 me-2 rounded-1">Watter</button>
                                                    <button class="mybutton g px-3 py-0 me-2 rounded-1">Grass</button>
                                                    <button class="mybutton w px-3 py-0 me-2 rounded-1">Watter</button>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="item mb-3">
                                                    <h6>Stats</h6>
                                                    <p class="tag">HP</p>
                                                    <div class="progress">
                                                        <div class="progress-bar w-50" role="progressbar" aria-valuenow="50"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="tag">Attack</p>
                                                    <div class="progress">
                                                        <div class="progress-bar w-75" role="progressbar" aria-valuenow="75"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="tag">Defence</p>
                                                    <div class="progress">
                                                        <div class="progress-bar w-50" role="progressbar" aria-valuenow="50"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="tag">Special Attack</p>
                                                    <div class="progress">
                                                        <div class="progress-bar w-25" role="progressbar" aria-valuenow="25"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="tag">Special Defence</p>
                                                    <div class="progress">
                                                        <div class="progress-bar w-50" role="progressbar" aria-valuenow="50"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                    <p class="tag">Speed</p>
                                                    <div class="progress">
                                                        <div class="progress-bar w-25" role="progressbar" aria-valuenow="25"
                                                            aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="buttonback d-flex justify-content-center">
                                <a href="/">
                                    <button class="homebutton px-4"><i class="fa-solid fa-house"></i> Back To Homepage</button>
                                </a>
                            </div>
                        </div>
                        <div class="right">
                            <div class="sideimage"><img src="./assets/media/Left.png" alt="" /></div>
                        </div>
                    </div>
                </section>
            </main>


        </div>
    )
}

export default Single