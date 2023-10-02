import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarComponent from './NavbarComponent'
import SidebarComponent from './SidebarComponent'
import FooterComponent from './FooterComponent'

const MainComponent = () => {
  const [datas, setDatas] = useState([])
  useEffect(() => {
    const user = localStorage.getItem('user')
    const accessToken = user.replace(/['"]+/g, '')
    const token = accessToken
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    axios.get(`https://devapi.seinoindomobil.co.id:2002/test/user`, { headers })
      .then((res) => {
        const resData = res.data.result
        setDatas(resData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
        <NavbarComponent />
      <div className="d-flex">
        {/* <div className="">
          
        </div> */}
        <SidebarComponent />
        <div className='container-fluid p-5'>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FooterComponent/>
    </>
  )
}

export default MainComponent
