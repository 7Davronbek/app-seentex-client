import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_PATH, LANGUAGE } from '../tools/constants'
import { TabContent, TabPane, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

const Tovar2 = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [tabs2, setTabs2] = useState([])

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
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
        getTabs2()
    }, [])

    return (
        <>
            <div className="tovar tovar2">
                <div className="container">

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
                                                    key={item.id}
                                                    className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `${index + 1}` })}
                                                    onClick={() => { toggle(`${index + 1}`) }} >
                                                    {localStorage.getItem(LANGUAGE) === "uz" ? item.title : item.title_ru}
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
                                    {tabs2 && tabs2.map((item, index) => {
                                        return (
                                            <>
                                                <TabPane key={item.id} tabId={`${index + 1}`} className=''>
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
                                                                </h3>
                                                                <p className="tab_desc-text">
                                                                    {localStorage.getItem(LANGUAGE) === "uz" ? item.desc : item.desc_ru}
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

export default Tovar2