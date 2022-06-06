import React from 'react'

const About = () => {
    return (
        <>

            <div className="about">
                <div className="container">
                    <div className="about_box_h">О НАШЕЙ КОМПАНИИ SEENTEX</div>
                    <div className="about_box pb-5">
                        <div className="row mt-lg-5 justify-content-between align-items-center">
                            <div className="col-lg-5 about_box_text">
                                "SEENTEX" гроуп образовалась в 2022 году и поставляет сантехнику
                                по всему Узбекистану под брендом "SEENTEX". На основании договоров
                                с самыми известными предприятиями КНР поставляет нашему народу
                                качественную сантехнику. Одной из основных целей компании является
                                обеспечение рынка качественными товарами. Высшая цель –F
                                ориентированно на качество. В настоящее время, благодаря спросу
                                нашего народа, мы начали предлагать различные модели смесителей и
                                котлов в различных дизайнах. Стратегия компании заключается в
                                расширении ассортимента сантехнической продукции и удовлетворении
                                населения путем обеспечения его качественными товарами.
                            </div>
                            <div className="col-lg-7">
                                <video className='video'
                                    autoPlay
                                    loop
                                    playsInline
                                    muted >
                                    <source
                                        src="/images/video.mp4"
                                        type="video/mp4"
                                        id="bgvid"
                                        className="video"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About