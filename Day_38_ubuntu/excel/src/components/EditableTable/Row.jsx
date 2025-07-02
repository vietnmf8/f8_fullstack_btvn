import {useContext} from "react";
import {TableContext} from "./const.jsx";
import Cell from "./Cell.jsx";


/* Component: Row */
export default function ({row, rowIndex}) {

    const injector = useContext(TableContext)
    const {columns} = injector;

    return (
        <tr>
            {
                columns.map((column, index) => (
                    <Cell
                        key={column.name}
                        row={row}
                        column={column}
                        rowIndex={rowIndex}
                        columnIndex={index}
                    />
                ))
            }
        </tr>
    )
}