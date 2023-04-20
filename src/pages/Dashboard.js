import React from 'react'
import {BsFillArrowDownRightCircleFill} from 'react-icons/bs'
import './Dashboard.css'
import { Column } from '@ant-design/plots';
import { Button, Table } from 'antd';
const columns = [
  {
    title: 'S.No',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const Dashboard = () => {
  
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 44,
    },
    {
      type: 'Oct',
      sales: 53,
    },
    {
      type: 'Nov',
      sales: 91,
    },
    {
      type: 'Dec',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color:()=>{
      return "#ffd333"
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.7,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <div className='hh'>
    <h3 className='mb-4'>Dashboard</h3>
    <div className="d-flex justify-content-between align-items-center gap-3">
      <div className="bg-white d-flex justify-content-between align-items-end p-3 rounded-3 flex-grow-1">
        <div>
          <p>Total</p> <h4 className='mb-0'>$1100</h4>
        </div>
        <div className="d-flex flex-column align-items-end">
          <h6 className='green'><BsFillArrowDownRightCircleFill className='me-2'/>36%</h6>
          <p className='mb-0'>Compared to april</p>
        </div>
      </div>
      <div className="bg-white d-flex justify-content-between align-items-end p-3 rounded-3 flex-grow-1">
        <div>
          <p>Total</p>
          <h4 className='mb-0'>$1100</h4>
        </div>
        <div className="d-flex flex-column align-items-end">
          <h6 className='red'><BsFillArrowDownRightCircleFill className='me-2'/>36%</h6>
          <p className='mb-0'>Compared to april</p>
        </div>
      </div>
      <div className="bg-white d-flex justify-content-between align-items-end p-3 rounded-3 flex-grow-1">
        <div>
        
          <p>Total</p>
          <h4 className='mb-0'>$1100</h4>
        </div>
        <div className="d-flex flex-column align-items-end">
          <h6 className='green'><BsFillArrowDownRightCircleFill className='me-2'/>36%</h6>
          <p className='mb-0'>Compared to april</p>
        </div>
      </div>
    </div>
    <div className='mt-4'>
      <h3 className='mb-5'>Income Statistics</h3>
      <div>
    <Column {...config} className='mb-5'/>
    </div>
    </div>
    <div>
      <h3 className='mb-5'>Recent Orders</h3>
      <div>
      <Table columns={columns} dataSource={data1} />

      </div>
    </div>
    </div>
  )
}

export default Dashboard