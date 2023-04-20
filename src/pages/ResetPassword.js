import React from 'react'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
  return (
    <div className='py-5' style={{backgroundColor:"#ffd333",minHeight:"100vh"}}>
    <div className='my-25 w-25 bg-white rounded-3 mx-auto p-3' style={{margin:"10%"}}>
        <form action='/'>
    <h3 className='text-center'>Reset Password</h3>
    <p className='text-center'>Please enter your new Password</p>
        <CustomInput type="password" label="New Password" id="pass"/>
        <CustomInput type="password" label="Confirm Password" id="confirmpass"/>
        <button className='px-3 py-2 border-0 w-100 text-white fw-bold'
         style={{backgroundColor:"#ffd333"}} 
         type='submit'>Send Link</button>
         </form>
    </div>
</div>
  )
}

export default ResetPassword