import React, { useState } from 'react'
import { TabContent, TabPane, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

const Tovar = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

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
                                    <NavLink
                                        className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `1` })}
                                        onClick={() => { toggle(`1`) }} >
                                        Hазвание бренда
                                    </NavLink>
                                    <NavLink
                                        className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `2` })}
                                        onClick={() => { toggle(`2`) }} >
                                        Hазвание бренда
                                    </NavLink>
                                    <NavLink
                                        className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `3` })}
                                        onClick={() => { toggle(`3`) }} >
                                        Hазвание бренда
                                    </NavLink>
                                    <NavLink
                                        className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `4` })}
                                        onClick={() => { toggle(`4`) }} >
                                        Hазвание бренда
                                    </NavLink>
                                    <NavLink
                                        className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `5` })}
                                        onClick={() => { toggle(`5`) }} >
                                        Hазвание бренда
                                    </NavLink>
                                    <NavLink
                                        className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `6` })}
                                        onClick={() => { toggle(`6`) }} >
                                        Hазвание бренда
                                    </NavLink>
                                </NavItem>

                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="tab-content tab-pane fade show active tab" id="nav-tabContent">
                                <TabContent activeTab={activeTab}>
                                    <TabPane tabId="1" className=''>
                                        <Row className='align-items-center'>
                                            <div className="row">
                                                <div className="col-xl-4">
                                                    <div className="tab_item">
                                                        <img
                                                            className="tab_item-img"
                                                            src="/images/tovar_1.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8">
                                                    <div className="tab_desc">
                                                        <h3 className="tab_desc-title">
                                                            <span className="text-uppercase">Hазвание бренда</span>
                                                        </h3>
                                                        <p className="tab_desc-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Orci, mauris neque, gravida amet diam cum nisl enim.
                                                            Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                            vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                            amet, lorem vitae lectus risus diam <br /><br />
                                                            nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                            sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                            parturient sed
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2" className=''>
                                        <Row className='align-items-center'>
                                            <div className="row">
                                                <div className="col-xl-4">
                                                    <div className="tab_item">
                                                        <img
                                                            className="tab_item-img"
                                                            src="/images/tovar_1.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8">
                                                    <div className="tab_desc">
                                                        <h3 className="tab_desc-title">
                                                            <span className="text-uppercase">Hазвание бренда</span>
                                                        </h3>
                                                        <p className="tab_desc-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Orci, mauris neque, gravida amet diam cum nisl enim.
                                                            Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                            vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                            amet, lorem vitae lectus risus diam <br /><br />
                                                            nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                            sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                            parturient sed
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3" className=''>
                                        <Row className='align-items-center'>
                                            <div className="row">
                                                <div className="col-xl-4">
                                                    <div className="tab_item">
                                                        <img
                                                            className="tab_item-img"
                                                            src="/images/tovar_1.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8">
                                                    <div className="tab_desc">
                                                        <h3 className="tab_desc-title">
                                                            <span className="text-uppercase">Hазвание бренда</span>
                                                        </h3>
                                                        <p className="tab_desc-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Orci, mauris neque, gravida amet diam cum nisl enim.
                                                            Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                            vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                            amet, lorem vitae lectus risus diam <br /><br />
                                                            nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                            sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                            parturient sed
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="4" className=''>
                                        <Row className='align-items-center'>
                                            <div className="row">
                                                <div className="col-xl-4">
                                                    <div className="tab_item">
                                                        <img
                                                            className="tab_item-img"
                                                            src="/images/tovar_1.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8">
                                                    <div className="tab_desc">
                                                        <h3 className="tab_desc-title">
                                                            <span className="text-uppercase">Hазвание бренда</span>
                                                        </h3>
                                                        <p className="tab_desc-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Orci, mauris neque, gravida amet diam cum nisl enim.
                                                            Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                            vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                            amet, lorem vitae lectus risus diam <br /><br />
                                                            nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                            sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                            parturient sed
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="5" className=''>
                                        <Row className='align-items-center'>
                                            <div className="row">
                                                <div className="col-xl-4">
                                                    <div className="tab_item">
                                                        <img
                                                            className="tab_item-img"
                                                            src="/images/tovar_1.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8">
                                                    <div className="tab_desc">
                                                        <h3 className="tab_desc-title">
                                                            <span className="text-uppercase">Hазвание бренда</span>
                                                        </h3>
                                                        <p className="tab_desc-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Orci, mauris neque, gravida amet diam cum nisl enim.
                                                            Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                            vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                            amet, lorem vitae lectus risus diam <br /><br />
                                                            nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                            sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                            parturient sed
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="6" className=''>
                                        <Row className='align-items-center'>
                                            <div className="row">
                                                <div className="col-xl-4">
                                                    <div className="tab_item">
                                                        <img
                                                            className="tab_item-img"
                                                            src="/images/tovar_1.png"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xl-8">
                                                    <div className="tab_desc">
                                                        <h3 className="tab_desc-title">
                                                            <span className="text-uppercase">Hазвание бренда</span>
                                                        </h3>
                                                        <p className="tab_desc-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Orci, mauris neque, gravida amet diam cum nisl enim.
                                                            Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                            vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                            amet, lorem vitae lectus risus diam <br /><br />
                                                            nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                            sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                            parturient sed
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </TabPane>
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
                                <a
                                    className="list-group-item list-group-item-action tab_list-link active"
                                    id="Ism_7_list"
                                    data-bs-toggle="list"
                                    href="#list_7"
                                    role="tab"
                                    aria-controls="list_1"
                                >Hазвание бренда</a
                                >
                                <a
                                    className="list-group-item list-group-item-action tab_list-link"
                                    id="List_8_list"
                                    data-bs-toggle="list"
                                    href="#List_8"
                                    role="tab"
                                    aria-controls="List_4"
                                >Hазвание бренда</a
                                >
                                <a
                                    className="list-group-item list-group-item-action tab_list-link"
                                    id="List_9_list"
                                    data-bs-toggle="list"
                                    href="#List_9"
                                    role="tab"
                                    aria-controls="List_2"
                                >Hазвание бренда</a
                                >
                                <a
                                    className="list-group-item list-group-item-action tab_list-link"
                                    id="List_10_list"
                                    data-bs-toggle="list"
                                    href="#List_10"
                                    role="tab"
                                    aria-controls="List_3"
                                >Hазвание бренда</a
                                >
                                <a
                                    className="list-group-item list-group-item-action tab_list-link"
                                    id="List_11-list"
                                    data-bs-toggle="list"
                                    href="#List_11"
                                    role="tab"
                                    aria-controls="List_5"
                                >Hазвание бренда</a
                                >
                                <a
                                    className="list-group-item list-group-item-action tab_list-link"
                                    id="list-12-list"
                                    data-bs-toggle="list"
                                    href="#list-12"
                                    role="tab"
                                    aria-controls="list-6"
                                >Hазвание бренда</a
                                >
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-9">
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active tab"
                                    id="list_7"
                                    role="tabpanel"
                                    aria-labelledby="Ism_1_list"
                                >
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="tab_item">
                                                <img
                                                    className="tab_item-img"
                                                    src="/images/category_2_1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <h3 className="tab_desc-title">
                                                    <span className="text-uppercase">Hазвание бренда</span>
                                                </h3>
                                                <p className="tab_desc-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Orci, mauris neque, gravida amet diam cum nisl enim.
                                                    Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                    vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                    amet, lorem vitae lectus risus diam <br /><br />
                                                    nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                    sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                    parturient sed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade tab"
                                    id="List_8"
                                    role="tabpanel"
                                    aria-labelledby="List_4_list"
                                >
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="tab_item">
                                                <img
                                                    className="tab_item-img"
                                                    src="/images/kategory_1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <h3 className="tab_desc-title">
                                                    <span className="text-uppercase">Hазвание бренда</span>
                                                </h3>
                                                <p className="tab_desc-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Orci, mauris neque, gravida amet diam cum nisl enim.
                                                    Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                    vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                    amet, lorem vitae lectus risus diam <br /><br />
                                                    nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                    sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                    parturient sed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade tab"
                                    id="List_9"
                                    role="tabpanel"
                                    aria-labelledby="List_2_list"
                                >
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="tab_item">
                                                <img
                                                    className="tab_item-img"
                                                    src="/images/kategory_1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <h3 className="tab_desc-title">
                                                    <span className="text-uppercase">Hазвание бренда</span>
                                                </h3>
                                                <p className="tab_desc-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Orci, mauris neque, gravida amet diam cum nisl enim.
                                                    Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                    vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                    amet, lorem vitae lectus risus diam <br /><br />
                                                    nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                    sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                    parturient sed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade tab"
                                    id="List_10"
                                    role="tabpanel"
                                    aria-labelledby="List_3_list"
                                >
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="tab_item">
                                                <img
                                                    className="tab_item-img"
                                                    src="/images/kategory_1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <h3 className="tab_desc-title">
                                                    <span className="text-uppercase">Hазвание бренда </span>
                                                </h3>
                                                <p className="tab_desc-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Orci, mauris neque, gravida amet diam cum nisl enim.
                                                    Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                    vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                    amet, lorem vitae lectus risus diam <br /><br />
                                                    nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                    sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                    parturient sed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade tab"
                                    id="List_11"
                                    role="tabpanel"
                                    aria-labelledby="List_5-list"
                                >
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="tab_item">
                                                <img
                                                    className="tab_item-img"
                                                    src="/images/kategory_1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <h3 className="tab_desc-title">
                                                    <span className="text-uppercase">Hазвание бренда</span>
                                                </h3>
                                                <p className="tab_desc-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Orci, mauris neque, gravida amet diam cum nisl enim.
                                                    Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                    vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                    amet, lorem vitae lectus risus diam <br /><br />
                                                    nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                    sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                    parturient sed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade tab"
                                    id="list-12"
                                    role="tabpanel"
                                    aria-labelledby="list-6-list"
                                >
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="tab_item">
                                                <img
                                                    className="tab_item-img"
                                                    src="/images/kategory_1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <h3 className="tab_desc-title">
                                                    <span className="text-uppercase">Hазвание бренда</span>
                                                </h3>
                                                <p className="tab_desc-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Orci, mauris neque, gravida amet diam cum nisl enim.
                                                    Vestibulum, risus, maecenas et nisi lobortis malesuada
                                                    vel. Neque, sem tellus sed a, enim egestas. Mi mi id
                                                    amet, lorem vitae lectus risus diam <br /><br />
                                                    nunc. Eget nunc eget lectus amet feugiat lobortis sit
                                                    sit non eu. Nunc, mauris viverra quis sapien quam. Non
                                                    parturient sed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tovar