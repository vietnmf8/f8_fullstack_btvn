import { useState } from 'react'
import './App.css'
import {Table} from './components'



function App() {
    const columns = [
        {name: 'id', text:'ID'},
        {name: 'name', text:'Ten'},
        {name: 'age', text:'Tuoi'},
        {name: 'address', text:'Dia chi'},
        {name: 'action', text:'Hanh Dong'},
    ]

    const rows = [
        {id: 1, name: "Nguyen Minh Viet", age: 20, address: 'Ha Noi'},
        {id: 2, name: "Tong Thanh Dat", age: 21, address: 'Thach That'},
        {id: 3, name: "Nguyen Thuy Quynh", age: 22, address: 'Nam Dinh'},
    ]


  return (
      <>
        <Table rows={rows} columns={columns} />
      </>
  )
}

export default App