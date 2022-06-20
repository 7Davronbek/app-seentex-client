import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TabContent, TabPane, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { API_PATH } from '../tools/constants';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
    }

    const [image, setImage] = useState('')
    const [header, setHeader] = useState([])

    const [g, setG] = useState('')
    const [galary, setGalary] = useState([])

    const postGalary = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("image", g)

        axios.post(API_PATH + 'api/gallery', formData, config)
            .then((res) => {
                setG('')
                getGalary()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const deleteGalary = (id) => {
        axios.delete(`${API_PATH}api/gallery/${id}`)
            .then((res) => {
                getGalary()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getGalary = () => {
        axios.get(API_PATH + 'api/gallery')
            .then((res) => {
                setGalary(res.data)
            })
    }

    const postHeader = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("image", image)

        axios.post(API_PATH + 'api/header', formData, config)
            .then((res) => {
                setImage('')
                getHeader()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const deleteHeader = (id) => {
        axios.delete(`${API_PATH}api/header/${id}`)
            .then((res) => {
                getHeader()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getHeader = () => {
        axios.get(API_PATH + 'api/header')
            .then((res) => {
                setHeader(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getHeader()
        getGalary()
    }, [])

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
                                    Gallery
                                </NavLink>
                                <NavLink
                                    className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `3` })}
                                    onClick={() => { toggle(`3`) }} >
                                    Tabs
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
                                                <form onSubmit={postHeader}>
                                                    <input onChange={e => setImage(e.target.files[0])} type="file" />
                                                    <button type='submit'>Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="row">
                                        {header && header.map((item, index) => (
                                            <>
                                                <div key={index} className="col-lg-4 mt-4 h-100">
                                                    <div className="cards">
                                                        <img src={item.image} alt="" className='w-100 h-100' />
                                                        <button onClick={(id => { deleteHeader(item.id) })} className='btn btn-danger ms-auto d-block mt-2'>Delete</button>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </TabPane>
                                <TabPane tabId="2" className=''>
                                    <Row className='align-items-center'>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <form onSubmit={postGalary}>
                                                    <input onChange={e => setG(e.target.files[0])} type="file" />
                                                    <button type='submit'>Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="row">
                                        {galary && galary.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={index.toString()} className="col-lg-4  mt-4 h-100">
                                                        <div className="cards ">
                                                            <img className='w-100 h-100' src={item.image} alt="" />
                                                            <button onClick={(id => { deleteGalary(item.id) })} className='btn btn-danger ms-auto d-block mt-2'>Delete</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </TabPane>
                                <TabPane tabId="3" className=''>
                                    <Row className='align-items-center'>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <form 
                                                // onSubmit={post}
                                                >
                                                    <input onChange={e => setG(e.target.files[0])} type="file" />
                                                    <button type='submit'>Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="row">
                                        {galary && galary.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={index.toString()} className="col-lg-4  mt-4 h-100">
                                                        <div className="cards ">
                                                            <img className='w-100 h-100' src={item.image} alt="" />
                                                            <button onClick={(id => { deleteGalary(item.id) })} className='btn btn-danger ms-auto d-block mt-2'>Delete</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
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