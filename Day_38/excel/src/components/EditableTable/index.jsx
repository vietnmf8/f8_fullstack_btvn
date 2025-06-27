import './style.sass'
import Row from './Row.jsx'
import CellSelection from "./CellSelection.jsx";
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
}


/* Component: EditableTable */
export default function ({columns, rows}) {


    const [cursor, setCursor] = useState({...defaultCursor});

    console.log(cursor)

    // Provider:
    const provider = {columns, rows, cursor, setCursor};
    return (
        <TableContext value={provider}>
           <div>
               <table className={'editable-table'}>
                   {/* Thead */}
                   <thead>
                   <tr>
                       {
                           columns.map(column => (
                               <th key={column.name}>{column.name}</th>
                           ))
                       }
                   </tr>
                   </thead>



                   {/* Tbody */}
                   <tbody>
                   {
                       rows.map((row) => (
                           <Row
                               key={row.id}
                               row={row}
                           />
                       ))
                   }
                   </tbody>
               </table>

               {/* Cell Selection */}
               <CellSelection/>
           </div>
        </TableContext>
    )
}