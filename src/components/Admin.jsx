import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TabContent, TabPane, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const [image, setImage] = useState('')
    
    return (
        <>
            <div className="admin">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to='/'>Home</Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">

                            <NavItem>
                                <NavLink
                                    className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `1` })}
                                    onClick={() => { toggle(`1`) }} >
                                    Glavniy
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

                        <div className="col-9">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className=''>
                                    <Row className='align-items-center'>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <input type="file"  />
                                                <button>Send</button>
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
            </div>
        </>
    )
}

export default Admin