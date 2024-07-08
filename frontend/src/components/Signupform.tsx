import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Axios from 'axios'
import { BACKEND_URL } from "../config" 


 const Singupform = () => {

  const[email,setEmail]=useState("")
  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate() 

  async function handleSubmit(e:any){
    e.preventDefault()
    console.log(email,password,firstName,lastName)
      try {
         const response=await Axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
            email,
            firstName,
            lastName,
            password,
          })
          console.log(response)
          const jwt=response.data
          localStorage.setItem("token",jwt)
          navigate('/blog')
      } catch (error) {
         console.log(error)
      }

  }
  
   return <div className="h-screen w-full md:max-w-screen-md flex flex-col justify-center items-center">
     <div className="pb-5 text-4xl font-extrabold"> 
        Create Your Account
     </div>
     <div className="text-2xl font-bold text-gray-500">
        Already have an account? 
        <Link className="font-medium" to={'/signin'}> Login</Link>
     </div>
    <div className="flex flex-col pt-7 gap-y-5">
        {inputComponent("Email","email",(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value))}
        {inputComponent("First Name","First Name",(e:ChangeEvent<HTMLInputElement>)=>setFirstName(e.target.value))}
        {inputComponent("Second Name","Second Name",(e:ChangeEvent<HTMLInputElement>)=>setLastName(e.target.value))}
        {inputComponent("Password","password",(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value),'password')}
        <button onClick={handleSubmit} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full rounded-xl">Signup</button>
    </div>
    </div>
 }
 
 export default Singupform


 function inputComponent(label:string,placeholder:string,onChange:any,type?:string){
    return  <div>
    <label className=" block mb-2 text-sm font-bold text-gray-900">{label}</label>
    <input onChange={onChange} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
</div>  
 }

