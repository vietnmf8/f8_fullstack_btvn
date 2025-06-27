import {useContext} from "react";
import {TableContext} from "./const.jsx";
import Cell from "./Cell.jsx";


/* Component: Row */
export default function ({row}) {

    const injector = useContext(TableContext)
    const {columns} = injector;

    return (
        <tr>
            {
                columns.map(column => (
                    <Cell
                        key={column.name}
                        row={row}
                        column={column}
                    />
                ))
            }
        </tr>
    )
}