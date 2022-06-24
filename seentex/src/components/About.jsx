import React from 'react'
import { getText } from '../locales'

const About = () => {
    return (
        <>

            <div className="about">
                <div className="container">
                    <div className="about_box_h">{getText("aboutUs")}</div>
                    <div className="about_box pb-5">
                        <div className="row mt-lg-5 justify-content-between align-items-center">
                            <div className="col-lg-5 about_box_text">{getText("aboutUsP")}</div>
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