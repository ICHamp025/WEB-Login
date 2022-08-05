import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';    
import "./Profile.css"

const Profile = () => {
        const navigate = useNavigate()
        const [data,  setData] = useState([]);
            
        useEffect(() => {
            const token = localStorage.getItem('token')
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + token);
            
            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            fetch("http://api.nitirat.co.th/user/profile", requestOptions)
              .then(response => response.json())
              .then(result => {
                if(result.message === 'OK'){
                    setData(result.data)
                }        
                console.log(result)
            })           
              .catch(error => console.log('error', error));
          }, [])
          const logout = () => {
            localStorage.removeItem('token')
            navigate('/')
          }
           
        return (     
            <section className='profile-sec'>
              <div className = "box">
                <div className = "pro">PROFILE</div>
                <div>ID         : {data.id}</div>
                <div>createdAt  : {data.createdAt}</div>
                <div>updatedAt  : {data.updatedAt}</div>
                <div>deletedAt  : {data.deletedAt}</div>
                <div>employeeId : {data.employeeId}</div>
                <div>username   : {data.username}</div>
                <div>password   : {data.password}</div>
                <div>firstname  : {data.firstname}</div>
                <div>lastName   : {data.lastName}</div>
                <div>nickname   : {data.nickname}</div>
                <div>team       : {data.team}</div>
                <div>role       : {data.role}</div>
                <div>isActive   : {data.isActive}</div>
                <div className='logout'>
                <Button onClick = {logout}>Logout</Button>
                </div>
              </div>
            </section>
    )}

export default Profile;