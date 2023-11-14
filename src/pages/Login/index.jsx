import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () =>{
    const indianStates = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
        'Andaman and Nicobar Islands',
        'Chandigarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Lakshadweep',
        'Delhi',
        'Puducherry'
      ];


      
      const [status,setStatus] = useState(true)
      const [data,setData] = useState({"collegename":"","state":"","city":"","email":"","password":""})
      const [pass,setPass] = useState('')
      const [loginData,setLoginData] = useState({"email":"","password":""})
      const [error,setError] = useState('')
      const [errorStatus,setErrorStatus] = useState(false)
      const navigate = useNavigate()

      const setCollege = (e) =>{
        data.collegename = e.target.value
      }

      const setState = e =>{
        data.state = e.target.value
      }

      const setCity = e =>{
        data.city = e.target.value
      }
      const setEmail = e =>{
        data.email = e.target.value
      }
      const setPassword = e =>{
        data.password = e.target.value
      }
      const setConPassword = e =>{
        setPass(e.target.value)
      }

      const setLogin = (e) =>{
            setStatus(false)
            setErrorStatus(false)
      }
      const setSignup = () =>{
        setStatus(true)
        setErrorStatus(false)
      }
      const SubmitForm = (e) =>{
        e.preventDefault();
        
      }
      const setRegister = async() =>{
        if(pass === data.password){
          let url = "http://localhost:3001/users"
          console.log(data)
          let requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
          };
          console.log(requestOptions)
          const res = await fetch(url, requestOptions)
          const data1 = await res.json()
          console.log(res.status)
          if(res.status == 400){
            setErrorStatus(true)
            setError(data1)
          }else{
            setErrorStatus(false)
          }
          console.log(data1)
          
        }else{
            alert('Password must be same')
        }
      }
      const loginEmail = e =>{
        loginData.email = e.target.value
      }
      const loginPass = e =>{
        loginData.password = e.target.value
      }
      const goLogin = async() =>{
         let url = "http://localhost:3001/login"
         let requestOptions = {
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginData)
         }
         const res = await fetch(url, requestOptions)
         const data1 = await res.json()
         if(res.status == 400){
          setErrorStatus(true)
          setError(data1)
        }else{
          setErrorStatus(false)
          navigate('/')
        }

      }
      
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
            <div style={{color:'white'}}>
                <form onSubmit={SubmitForm} style={{borderStyle:'inset',borderWidth:'1px',borderColor:'white',borderRadius:'12px'}} className="p-5">
                    <div style={{textAlign:'center'}}>
                        <button className={`btn ${status ? 'btn-light' : 'btn-outline-light'} mb-3 pl-5 pr-5`} onClick={setSignup}>Signup</button>
                        <button className={`btn ${!status ? 'btn-light' : 'btn-outline-light'} mb-3 ml-3 pl-5 pr-5`} onClick={setLogin}>Loin</button>
                    </div>
                    
                        {status ?
                        <div>
                            <input type="text" className="form-control mb-4  mt-3" onChange={setCollege} placeholder="College Name"/>
                            <select className="mb-4 form-control" onChange={setState} >
                                {indianStates.map(each =>(
                                    <option>{each}</option>
                                ))}
                            </select>
                            <input type="text" className="form-control mb-4" placeholder="City" onChange={setCity}/>
                            <input type="text" className="form-control mb-4" placeholder="Email" onChange={setEmail}/>
                            <input type="password" className="form-control mb-4" placeholder="Password" onChange={setPassword}/>
                            <input type="password" className="form-control mb-4" placeholder="Confirm Password" onChange={setConPassword}/>
                            <div style={{textAlign:'center'}}>
                                <button className="btn btn-outline-light" onClick={setRegister}>Register</button>
                            </div>
                            {errorStatus && <p style={{color:'white',textAlign:"center"}} className="mt-3">{error}</p>}
                        </div>
                                    :
                        <div>
                            <label>Role</label>
                            <select className="form-control">
                                <option>Admin</option>
                                <option>Student</option>
                            </select>
                            <label className="mt-3">Enter Email</label>
                            <input type="text" className="form-control mb-3 " placeholder="Email" onChange={loginEmail}/>
                            <label className="mt-3">Enter Password</label>
                            <input type="password" className="form-control mb-4" placeholder="Password" onChange={loginPass}/>
                            <div style={{textAlign:'center'}}>
                                <button className="btn btn-outline-light" onClick={goLogin}>LOGIN</button>
                            </div>
                            {errorStatus && <p style={{color:'white',textAlign:'center'}}>{error}</p>}
                        </div>}
                    
                    
                    
                </form>
            </div>
        </div>
    )
}

export default Login