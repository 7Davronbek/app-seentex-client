import React from 'react'
import { Link } from 'react-router-dom'
import { getText } from '../locales'

const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="container">
                    <div className="row footer_box">
                        <div className="col-lg-5 d-flex flex-column align-items-center">
                            <div className="spinner mt-4">
                                <span><img src="./images/logo_org.png" alt="" /></span>
                                <span>S</span>
                                <span>E</span>
                                <span>E</span>
                                <span>N</span>
                                <span>T</span>
                                <span>E</span>
                                <span>X</span>
                            </div>
                            <div className="footer_logo_text">{getText("footer")}</div>
                        </div>
                        <div className="col-lg-3 footer_link">
                            <h3 className='mb-4'>{getText("footer1")}</h3>
                            <a href="!#" className="footer_2_a">{getText("navbar1")}</a>
                            <a href="!#" className="footer_2_a">{getText("navbar2")}</a>
                            <a href="!#" className="footer_2_a">{getText("navbar3")}</a>
                            <Link to='/admin' href="!#" className="footer_2_a">{getText("navbar4")}</Link>
                        </div>
                        <div className="col-lg-4 footer_link_2">
                            <h3 className='mb-5'>{getText("footer2")}</h3>
                            <div className="footer_link_2_box">
                                <div className="footer_net">
                                    <a href="https://t.me/+LHavaShLtpxmYjZi"
                                    ><i className="fab fa-telegram net_1"></i
                                    ></a>
                                    <a href="!#"><i className="fab fa-facebook net_1"></i></a>
                                    <a
                                        href="https://instagram.com/sontexnika_elektrotovari_?utm_medium=copy_link"
                                    >
                                        <i className="fab fa-instagram net_1"></i
                                        ></a>
                                    <a href="!#"><i className="fab fa-youtube-square net_1"></i></a>
                                </div>

                                <a
                                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=Seentex_group@mail.ru"
                                    className="footer_news"
                                >
                                    <i className="fas fa-envelope"></i>
                                    <p>Seentex_group@mail.ru</p>
                                </a>
                                <a href="tel:+998940710101" className="footer_news">
                                    <i className="fas fa-phone-alt"></i>
                                    <p>+998 94 071-01-01</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="koko">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a rel="noreferrer" target={'_blank'} href='https://kokoagency.uz/'>Created by kOkO digital agency. All rights reserved.</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer