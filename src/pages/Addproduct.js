import React from 'react'
import { useState } from "react"
import CustomInput from '../components/CustomInput'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
const Addproduct = () => {
    const [value,setValue] = useState("")
    const handleQuill = (e) =>{
        setValue(e);
    }
  return (
    <div>
        <h3>Add Product</h3>
        <div className='mt-4'>
            <form>
                <CustomInput type="text" label="Enter Product"/>  
                <div className='mb-4 '>
                <ReactQuill className="bg-light" theme="snow" value={value} onChange={(e)=>handleQuill(e)}/>
                </div>
                <CustomInput type="number" label="Enter Price"/> 
                <select name="" className="form-control py-3 mb-3 shadow-none" id="">
                <option value="">Select Brand</option>
               </select>
               <select name="" className="form-control py-3 mb-3 shadow-none" id="">
                <option value="">Select Category</option>
               </select>
               <select name="" className="form-control py-3 mb-3 shadow-none" id="">
                <option value="">Select Color</option>
               </select>
                
                <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
  <button className='btn btn-success my-5 rounded-3 border-0' type='submit'>Add Product</button>
            </form>
        </div>
    </div>
  )
}

export default Addproduct