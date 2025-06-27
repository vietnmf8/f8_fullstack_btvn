import { useState } from 'react'
import './App.css'
import {EditableTable} from './components'

// Viết bên ngoài function App để tránh bị render lại!!!
//---------------------------------------------------------

/* Khai báo dữ liệu */
const columns = [
  {name: 'product'},
  {name: 'quantity'},
  {name: 'price'},
  {name: 'amount'},
  {name: 'comment'},
]

function App() {

  const [rows, setRows] = useState([
    {
      id: 1,
      product: 'product 1',
      quantity: '50',
      price: '10000',
      amount: '500000',
      comment: 'This is a comment 1'
    },
    {
      id: 2,
      product: 'product 2',
      quantity: '50',
      price: '10000',
      amount: '500000',
      comment: 'This is a comment 2'
    },
  ])

  return (
    <>
      <EditableTable
          columns={columns}
          rows={rows}
      />
    </>
  )
}

export default App
