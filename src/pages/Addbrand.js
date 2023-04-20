import React from 'react'
import CustomInput from '../components/CustomInput'

const Addbrand = () => {
  return (
    <div>
        <h3>Add brand</h3>
        <div className='mt-4'>
            <form>
                <CustomInput type="text" label="Enter Brand"/>
                <button className='btn btn-success my-5 rounded-3 border-0' type='submit'>Add Brand</button>
            </form>
        </div>
    </div>
  )
}

export default Addbrand