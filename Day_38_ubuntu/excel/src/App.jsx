import { useState } from 'react'
import './App.css'
import {EditableTable} from './components'

// Viết bên ngoài function App để tránh bị render lại!!!
//---------------------------------------------------------

/* Khai báo dữ liệu */
const columns = [
  {name: 'product', width: '60%'},
  {name: 'quantity', width: '10%'},
  {name: 'price', width: '10%'},
  {name: 'amount', width: '10%'},
  {name: 'comment', width: '10%'},
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

  const onInput = ({rowIndex, columnIndex, value}) => {
    console.log('vao day chua')
    console.log("rowIndex: ", rowIndex)
    console.log("columnIndex: ", columnIndex)
    console.log("value: ", value)

    const newData = [...rows]
    newData[rowIndex][columns[columnIndex].name] = value
    setRows(newData)
  }

  return (
    <>
      <EditableTable
          columns={columns}
          rows={rows}
          onInput={onInput}
      />
    </>
  )
}

export default App
