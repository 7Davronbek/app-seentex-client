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

    const [client, setClient] = useState([])
    const [c, setC] = useState('')

    const [t, setT] = useState('')
    const [title, setTitle] = useState('')
    const [title_ru, setTitle_ru] = useState('')
    const [desc, setDesc] = useState("")
    const [desc_ru, setDesc_ru] = useState("")
    const [category, setCategory] = useState("")
    const [tabs, setTabs] = useState([])

    const getTabs = () => {
        axios.get(API_PATH + 'api/product')
            .then((res) => {
                setTabs(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const postTabs = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("image", t)
        formData.append("title", title)
        formData.append("title_ru", title_ru)
        formData.append("category", category)
        formData.append("desc", desc)
        formData.append("desc_ru", desc_ru)
        axios.post(API_PATH + 'api/product', formData, config)
            .then((res) => {
                getTabs()
                setTitle('')
                setTitle_ru('')
                setCategory('')
                setDesc('')
                setDesc_ru('')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const deleteTabs = (id) => {
        axios.delete(`${API_PATH}api/product/${id}`)
            .then((res) => {
                getTabs()
            })
            .catch((err) => {
                console.log(err);
            })
    }


    const getClient = () => {
        axios.get(API_PATH + 'api/client')
            .then((res) => {
                setClient(res.data)
            })
    }

    const postClient = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("image", c)
        axios.post(API_PATH + 'api/client', formData, config)
            .then((res) => {
                setC('')
                getClient()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const deleteClient = (id) => {
        axios.delete(`${API_PATH}api/client/${id}`)
            .then((res) => {
                getClient()
            })
            .catch((err) => {
                console.log(err);
            })
    }


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
        getClient()
        getTabs()
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

                    <div className="row my-5 py-5">
                        <div className="col-lg-3 mb-5">

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
                                    Klients
                                </NavLink>
                                <NavLink
                                    className={`list-group-item list-group-item-action tab_list-link ` + classnames({ active: activeTab === `4` })}
                                    onClick={() => { toggle(`4`) }} >
                                    Tabs
                                </NavLink>
                            </NavItem>

                        </div>

                        <div className="col-lg-9 ">
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1" className=''>
                                    <Row className='align-items-center'>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <form onSubmit={postHeader}>
                                                    <input className='form-control mb-3' require onChange={e => setImage(e.target.files[0])} type="file" />
                                                    <button type='submit' className='btn btn-outline-primary px-4'>Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="row">
                                        {header && header.map((item, index) => (
                                            <>
                                                <div key={index} className="col-lg-6 mt-4 h-100">
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
                                                    <input className='form-control mb-3' require onChange={e => setG(e.target.files[0])} type="file" />
                                                    <button type='submit' className='btn btn-outline-primary px-4'>Send</button>
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
                                                    onSubmit={postClient}
                                                >
                                                    <input className='form-control mb-3' require onChange={e => setC(e.target.files[0])} type="file" />
                                                    <button type='submit' className='btn btn-outline-primary px-4'>Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </Row>
                                    <div className="row">
                                        {client && client.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={index.toString()} className="col-lg-4  mt-4 h-100">
                                                        <div className="cards ">
                                                            <img className='w-100 h-100' src={item.image} alt="" />
                                                            <button onClick={(id => { deleteClient(item.id) })} className='btn btn-danger ms-auto d-block mt-2'>Delete</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>
                                </TabPane>
                                <TabPane tabId="4" className=''>

                                    <Row className='align-items-center'>
                                        <div className="col-xl-8">
                                            <div className="tab_desc">
                                                <form
                                                    className='d-flex flex-column'
                                                    onSubmit={postTabs}
                                                >
                                                    <input className='form-control mb-3' require onChange={e => setT(e.target.files[0])} type="file" />
                                                    <input className='form-control mb-3' require value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Uz Title' name='title' />
                                                    <input className='form-control mb-3' require value={title_ru} onChange={e => setTitle_ru(e.target.value)} type="text" placeholder='Ru Title' name='title_ru' />
                                                    <select className='form-control mb-3' onChange={e => { setCategory(e.target.value) }} name="category">
                                                        <option>**************</option>
                                                        <option value="1">Cмесители</option>
                                                        <option value="2">Kотельная</option>
                                                    </select>
                                                    <textarea className='form-control mb-3' required value={desc} onChange={e => setDesc(e.target.value)} name="desc" placeholder='Description Uz' cols="30" rows="10"></textarea>
                                                    <textarea className='form-control mb-3' required value={desc_ru} onChange={e => setDesc_ru(e.target.value)} name="desc_ru" placeholder='Description Ru' cols="30" rows="10"></textarea>
                                                    <button type='submit' className='btn btn-outline-primary px-4'>Send</button>
                                                </form>
                                            </div>
                                        </div>
                                    </Row>

                                    <div className="row">
                                        {tabs && tabs.map((item, index) => {
                                            return (
                                                <>
                                                    <div key={index.toString()} className="col-lg-6  mt-4 h-100">
                                                        <div className="cards px-3 py-2 border shadow tasbsCard h-auto">
                                                            <h6>Category: {item.category}</h6>
                                                            <img className='w-100 h-100' src={item.image} alt="" />
                                                            <h3 className='d-flex align-items-center'><span>uz:</span> {item.title}</h3>
                                                            <h3 className='d-flex align-items-center'><span>ru:</span> {item.title_ru}</h3>
                                                            {item.desc && item.desc.map((item2, index2) => {
                                                                return (
                                                                    <>
                                                                        <p key={index2.toString()}><span>uz:</span> {item2}</p>
                                                                    </>
                                                                )
                                                            })}
                                                            {item.desc_ru && item.desc_ru.map((item2, index2) => {
                                                                return (
                                                                    <>
                                                                        <p key={index2.toString()}><span>uz:</span> {item2}</p>
                                                                    </>
                                                                )
                                                            })}
                                                            <button onClick={(id => { deleteTabs(item.id) })} className='btn btn-danger ms-auto d-block mt-2'>Delete</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div>

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