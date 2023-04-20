import React from 'react'
import CustomInput from '../components/CustomInput'

const ForgotPassword = () => {
  return (
    <div className='py-5' style={{backgroundColor:"#ffd333",minHeight:"100vh"}}>
        <div className='my-25 w-25 bg-white rounded-3 mx-auto p-3' style={{margin:"10%"}}>
            <form action='/'>
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center'>Please enter your register Email to reset your password</p>
            <CustomInput type="email" label="Email Address" id="email"/>
        
            <button className='px-3 py-2 border-0 w-100 text-white fw-bold'
             style={{backgroundColor:"#ffd333"}} 
             type='submit'>Send Link</button>
             </form>
        </div>
    </div>
  )
}

export default ForgotPassword