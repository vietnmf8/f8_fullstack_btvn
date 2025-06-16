import { useState } from 'react'
import './App.css'
import {} from "./components";

//Component: Cell
const Cell = ({text}) => {
    return (
        <td>{text}</td>
    )
}

//Component: Row
const Row = ({row, colums}) => {

    return (
        <tr>
            {
                colums.map((col) => {
                    return <Cell text={row[col]}/>
                })
            }
        </tr>
    )
}




function App() {

    const columns = ['id', 'name', 'age']

    const rows = [
        {id: 1, name: 'A', age: 10},
        {id: 2, name: 'B', age: 11},
        {id: 3, name: 'C', age: 12}
    ]


  return (
    <>
        <h1>Danh sach nhan vien: </h1>


        <table width={'100%'} border="1" cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    {
                        columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))

                    }

                </tr>
            </thead>

            <tbody>
            {
                rows.map((row, index) => {
                    return <Row row={row} colums={columns} />
                })
            }
            </tbody>
        </table>
    </>
  )
}

export default App
