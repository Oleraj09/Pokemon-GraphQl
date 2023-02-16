import React from 'react'
import Header from './Header'
import Charecter from '../api/charecter'
function Home() {
    return (
        <div>
            <main>
                <section id="top-section">
                    <div className="container texture">
                        <Header />
                        <Charecter />
                    </div>
                </section>

                <section id="bottom d-flex">
                    <div className="lefthome"><img src="/assets/media/Left.png" style={{ width: "80px" }} alt="" /></div>
                    <div className="centerhome">
                        <div className="title">
                            <h3 className="intro">
                                <p className="text">Ash and Pickacu Arrive In <br /> Pokemon Universe</p>
                            </h3>
                            <div className="desc">
                                <div className="row">

                                    <div className="col-6 py-3 text-justify">
                                        <div className="row">
                                            <div className="col-9">
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime ut
                                                    minus quas labore adipisci et vitae reiciendis excepturi aperiam vero,
                                                    ducimus reprehenderit harum earum!</p>
                                                <div className="row">
                                                    <div className="col-8">Lorem ipsu consectetur adipisicing elit. Repellendus,
                                                        nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                                                        consequuntur illo cum voluptate exercitationem ad fuga reprehenderit
                                                        aperiam consectetur. Unde! dvoluptate deleniti ratione accusamus laborum
                                                        cupiditate aperiam vel?</div>
                                                    <div className="col-4">
                                                        <div className="image-text py-2">
                                                            <img src="/assets/media/Image04.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime ut
                                                    minus quas labore adipisci et vitae reiciendis excepturi aperiam vero,
                                                    ducimus reprehenderit harum earum!</p>
                                            </div>
                                            <div className="col-3">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="image-text py-2">
                                                            <img src="/assets/media/Image03.png" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="image-text py-2">
                                                            <img src="/assets/media/Image02.png" alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum
                                                    doloremque excepturi odio voluptatum quaerat mollitia cumque eum illum iure!
                                                    Lorem ipsum, dolor sit amet con repellat numq rum nesciunt sint ut ratione
                                                    perfe Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
                                                    voluptate? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    Accusamus, deserunt? rendis exercitationem voluptatem velit
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6 py-3 text-justify">
                                        <div className="row">
                                            <div className="col-12">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Dolor obcaecati libero voluptas. Inventore maiores beatae, ex quia
                                                    omnis voluptate
                                                    aliquid illo corrupti, ipsum natus dolore consequatur nulla quae ea
                                                    obcaecati? Commodi
                                                </p>
                                            </div>
                                            <div className="col-3">
                                                <div className="image-text py-2">
                                                    <img src="/assets/media/Image03.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi
                                                    nulla unde quod, ipsum quidem eum praesentium harum quia, eaque blanditiis
                                                    necessitatibus dolor aliquam fugiat, totam fuga alias! Voluptates molestiae
                                                    soluta neque vitae ex quis possimus ratione non esse incidunt.
                                                </p>
                                            </div>
                                            <div className="col-3">
                                                <div className="image-text py-2">
                                                    <img src="/assets/media/Image01.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-9">
                                                <p>
                                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet eligendi
                                                    nulla unde quod, ipsum quidem eum praesentium harum quia, eaque blanditiis
                                                    necessitatibus dolor aliquam fugiat, totam fuga alias! Voluptates molestiae
                                                    soluta neque vitae ex quis possimus ratione non esse incidunt.
                                                </p>
                                            </div>
                                            <div className="col-12">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae id nobis
                                                    eaque porro quasi omnis recusandae autem enim odio mollitia qui laudantium,
                                                    consequatur fuga? Corporis nisi ullam nam dolorem similique.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="righthome"><img src="/assets/media/Left.png" alt="" style={{ width: "80px" }} /></div>
                </section>
            </main>
        </div>
    )
}

export default Home