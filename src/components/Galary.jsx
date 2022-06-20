import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getText } from '../locales'
import { API_PATH } from '../tools/constants'

const Galary = () => {
    const [galary, setGalary] = useState([])

    const getGalary = () => {
        axios.get(API_PATH + 'api/gallery')
            .then((res) => {
                setGalary(res.data)
            })
    }

    useEffect(() => {
        getGalary()
    }, [])
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

                        {galary && galary.map((item, index) => (
                            <>
                                <div key={index} className="col-md-3 col-lg-3 col-sm-6 gallery_box">
                                    <img src={item.image} className="gallery_img" alt="" />
                                </div>
                            </>
                        ))}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Galary