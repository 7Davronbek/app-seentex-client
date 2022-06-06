import React from 'react'

const Section = () => {
    return (
        <>

            <div className="section">
                <div className="container">
                    <div className="row tovar pb-4">
                        <div className="col-12">
                            <div className="tovar_text">
                                <p>НАШИ ПРЕИМУЩЕСТВА</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-lg-3 tovar_box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/gqdnbnwt.json"
                                    trigger="loop"
                                    colors="primary:#252c58,secondary:#000000"
                                    stroke="65"
                                    className="icons"
                                >
                                </lord-icon>
                                <p>ОПТИМАЛЬНОЕ СООТНОШЕНИЕ ЦЕНЫ И КАЧЕСТВА ТОВАРА.</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-3 tovar_box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/nocovwne.json"
                                    trigger="loop"
                                    colors="primary:#252c58,secondary:#000000"
                                    stroke="70"
                                    className="icons"
                                >
                                </lord-icon>
                                <p>100% КАЧЕСТВeнные и безопасные ТОВАРы.</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-3 tovar_box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/gqzfzudq.json"
                                    trigger="loop"
                                    delay="550"
                                    colors="primary:#252c58,secondary:#000000"
                                    className="icons"
                                >
                                </lord-icon>
                                <p>международный Компаний сотрудничают с нами</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-3 tovar_box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/nkmsrxys.json"
                                    trigger="loop"
                                    delay="550"
                                    colors="primary:#252c58,secondary:#000000"
                                    stroke="70"
                                    className="icons"
                                >
                                </lord-icon>
                                <p>есть призы нашим постоянным клиентам</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section