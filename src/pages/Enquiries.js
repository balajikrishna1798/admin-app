import React from 'react'
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
const Enquiries = () => {
  return (
    <div>
      <h3>Enquiries</h3>
      <Table columns={columns} dataSource={data1} />

    </div>
  )
}

export default Enquiries