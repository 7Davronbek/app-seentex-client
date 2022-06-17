import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <>
        <div className="admin">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Link to='/'>Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Admin