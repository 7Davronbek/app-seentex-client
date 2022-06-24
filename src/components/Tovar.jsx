import React, { useState } from 'react'
import { TabContent, TabPane, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { API_PATH, LANGUAGE } from '../tools/constants';
import { useEffect } from 'react';
import Tovar2 from './Tovar2';

const Tovar = () => {
    const [tabs, setTabs] = useState([])
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const getTabs1 = () => {
        axios.get(API_PATH + 'api/category/1')
            .then((res) => {
                setTabs(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getTabs1()
    }, [])

    return (
        <>
            <div className="tovar">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <div className="tovar_text">Категории-Cмесители</div>
                        </div>
                    </div>
                    <div className="row overflow-hidden">
                        <img src="/images/tovar_1.png" alt="" className="tovar_img" />
                    </div>
                    <div className="row justify-content-center gap-4 gap-xl-0 mt-4">
                        <div className="col-lg-8 col-xl-3">
                            <div className="list-group tab_list" id="list-tab" role="tablist">

                                <NavItem>
                                    {tabs && tabs.map((item, index) => {
                                        return (
                                            <>
                                                <NavLink
                                                    key={`${index + 1}`}
                                                    className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `${index + 1}` })}
                                                    onClick={() => { toggle(`${index + 1}`) }} >
                                                    {localStorage.getItem(LANGUAGE) === "uz" ? item.title : item.title_ru}
                                                    {/* {item.title} */}
                                                </NavLink>
                                            </>
                                        )
                                    })}
                                </NavItem>

                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="tab-content tab-pane fade show active tab" id="nav-tabContent">
                                <TabContent activeTab={activeTab}>
                                    {tabs && tabs.map((item, index) => {
                                        return (
                                            <>
                                                <TabPane key={`${index + 1}`} tabId={`${index + 1}`} className=''>
                                                    <Row className='align-items-center '>
                                                        <div className="col-xl-4">
                                                            <div className="tab_item">
                                                                <img
                                                                    className={"tab_item-img"}
                                                                    src={`${item.image}`}
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-8">
                                                            <div className="tab_desc">
                                                                <h3 className="tab_desc-title">

                                                                    {localStorage.getItem(LANGUAGE) === "uz" ? <span className="text-uppercase">{item.title}</span> : <span className="text-uppercase">{item.title_ru}</span>}
                                                                    {/* <span className="text-uppercase">{item.title}</span> */}
                                                                </h3>
                                                                <p className="tab_desc-text">
                                                                    {localStorage.getItem(LANGUAGE) === "uz" ? item.desc : item.desc_ru}
                                                                    {/* {item.desc} */}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Row>
                                                </TabPane>
                                            </>
                                        )
                                    })}

                                </TabContent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tovar2 />
        </>
    )
}

export default Tovar