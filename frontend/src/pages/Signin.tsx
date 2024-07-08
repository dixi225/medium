import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import Axios from 'axios'
 


 const Signin = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  function handleSubmit(e:any):void{
    e.preventDefault()
    Axios.post("",{
      email,
      password,
    })
  }
  
   return <div className="h-screen w-full  flex flex-col justify-center items-center">
     <div className="text-2xl font-bold text-gray-500">
        Don't have an account?
        <Link className="font-medium" to={'/signup'}> Register</Link>
     </div>
    <div className="flex flex-col pt-7 gap-y-5">
        {inputComponent("Email","email",(e:ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value))}
        {inputComponent("Password","password",(e:ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value),'password')}
        <button onClick={handleSubmit} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full rounded-xl">Sign in</button>
    </div>
    </div>
 }
 
 export default Signin


 function inputComponent(label:string,placeholder:string,onChange:any,type?:string){
    return  <div>
    <label className=" block mb-2 text-sm font-bold text-gray-900">{label}</label>
    <input onChange={onChange} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
</div>  
 }

