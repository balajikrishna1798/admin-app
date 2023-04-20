import React from 'react'
import CustomInput from '../components/CustomInput'

const Addblogcat = () => {
  return (
    <div>
        <h3>Add blog category</h3>
        <div className='mt-4'>
            <form>
                <CustomInput type="text" label="Enter Blog category"/>
                <button className='btn btn-success my-5 rounded-3 border-0' type='submit'>Add Blog Category</button>
            </form>
        </div>
    </div>
  )
}

export default Addblogcat