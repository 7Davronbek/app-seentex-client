import React from 'react'
import { getText } from '../locales'

const Galary = () => {
    return (
        <>

            <div className="gallery">
                <div className="container">
                    <div className="gallery_text">
                        <h1>{getText("galereya")}</h1>
                    </div>

                    <div className="popur">
                        <div className="top_bar">
                            <p className="img_name"></p>
                            <span className="close_btn"></span>
                        </div>
                        <img src="./images/ser_1_page-0001.jpg" alt="" className="large_img" />
                    </div>

                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-6 gallery_box">
                            <img src="./images/galery_1.jpg" className="gallery_img" alt="" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 gallery_box">
                            <img src="./images/galery_2.jpg" className="gallery_img" alt="" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 gallery_box">
                            <img src="./images/galery_3.jpg" className="gallery_img" alt="" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 gallery_box">
                            <img src="./images/galery_4.jpg" className="gallery_img" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-6 gallery_box">
                            <img src="./images/galery_1.jpg" className="gallery_img" alt="" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 gallery_box">
                            <img src="./images/galery_2.jpg" className="gallery_img" alt="" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 gallery_box">
                            <img src="./images/galery_3.jpg" className="gallery_img" alt="" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 gallery_box">
                            <img src="./images/galery_4.jpg" className="gallery_img" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Galary