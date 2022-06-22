import React, { useState } from 'react'
import { TabContent, TabPane, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { API_PATH } from '../tools/constants';
import { useEffect } from 'react';

const Tovar = () => {
    const [tabs, setTabs] = useState([])
    const [tabs2, setTabs2] = useState([])
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const getTabs1 = () => {
        axios.get(API_PATH + 'api/category/1')
            .then((res) => {
                setTabs(res.data.products)
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getTabs2 = () => {
        axios.get(API_PATH + 'api/category/2')
            .then((res) => {
                setTabs2(res.data.products)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getTabs1()
        getTabs2()
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
                                                    {item.title}
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
                                                                    <span className="text-uppercase">{item.title}</span>
                                                                </h3>
                                                                <p className="tab_desc-text">
                                                                    {item.desc}
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

                    <div className="col-12 mt-5 mb-2">
                        <div className="tovar_text">Категории-Kотельная</div>
                    </div>

                    <div className="row overflow-hidden mt-5">
                        <img src="/images/Prim_2.jpg" alt="" className="tovar_img" />
                    </div>

                    <div className="row justify-content-center gap-4 gap-xl-0 mt-4">
                        <div className="col-lg-8 col-xl-3">
                            <div className="list-group tab_list" id="list-tab" role="tablist">

                                <NavItem>
                                    {tabs2 && tabs2.map((item, index) => {
                                        return (
                                            <>
                                                <NavLink
                                                    key={`${index + 1}`}
                                                    className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `${index + 1}` })}
                                                    onClick={() => { toggle(`${index + 1}`) }} >
                                                    {item.title}
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
                                                                    <span className="text-uppercase">{item.title}</span>
                                                                </h3>
                                                                <p className="tab_desc-text">
                                                                    {item.desc}
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
        </>
    )
}

export default Tovar