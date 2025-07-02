import './style.sass'
import Row from './Row.jsx'
import CellSelection from "./CellSelection.jsx";
import CellInput from "./CellInput.jsx";
import {TableContext} from "./const.jsx";
import {useState} from "react";

// Biến theo dõi vị trị của ô (VD: Ô 1  = Hàng 1 giao Cột 1), top, left, width, height
const defaultCursor = {
    rowIndex: 0,
    columnIndex: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    isEditing: false,
}


/* Component: EditableTable */
export default function ({columns, rows, onInput}) {


    const [cursor, setCursor] = useState({...defaultCursor});

    // console.log(cursor)

    // Provider:
    const provider = {columns, rows, cursor, setCursor, onInput};


    return (
        <TableContext value={provider}>
           <div style={{ position: "relative" }}>
               <table className={'editable-table'}>
                   {/* Thead */}
                   <thead>
                   <tr>
                       {
                           columns.map(column => (
                               <th key={column.name} style={{
                                   width: column.width,
                               }}>{column.name}</th>
                           ))
                       }
                   </tr>
                   </thead>



                   {/* Tbody */}
                   <tbody>
                   {
                       rows.map((row, index) => (
                           <Row
                               key={row.id}
                               row={row}
                               rowIndex={index}
                           />
                       ))
                   }
                   </tbody>
               </table>

               {/* Cell Selection */}
               <CellSelection/>

               {/* Cell Input */}
               <CellInput/>
           </div>
        </TableContext>
    )
}