import React from 'react'
import { getText } from '../locales'

const Section = () => {
    return (
        <>

            <div className="section">
                <div className="container">
                    <div className="row tovar pb-4">
                        <div className="col-12">
                            <div className="tovar_text">
                                <p>{getText("benefist")}</p>
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
                                    style={{ height: "250px", width: "250px" }}
                                >
                                </lord-icon>
                                <p>{getText("benefist1")}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-3 tovar_box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/nocovwne.json"
                                    trigger="loop"
                                    colors="primary:#252c58,secondary:#000000"
                                    stroke="70"
                                    className="icons"
                                    style={{ height: "250px", width: "250px" }}
                                >
                                </lord-icon>
                                <p>{getText("benefist2")}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-3 tovar_box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/gqzfzudq.json"
                                    trigger="loop"
                                    delay="550"
                                    colors="primary:#252c58,secondary:#000000"
                                    className="icons"
                                    style={{ height: "250px", width: "250px" }}
                                >
                                </lord-icon>
                                <p>{getText("benefist3")}</p>
                            </div>
                            <div className="col-md-6 col-sm-12 col-lg-3 tovar_box">
                                <lord-icon
                                    src="https://cdn.lordicon.com/nkmsrxys.json"
                                    trigger="loop"
                                    delay="550"
                                    colors="primary:#252c58,secondary:#000000"
                                    stroke="70"
                                    className="icons"
                                    style={{ height: "250px", width: "250px" }}
                                >
                                </lord-icon>
                                <p>{getText("benefist4")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section