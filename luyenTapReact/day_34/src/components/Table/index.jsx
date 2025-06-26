import {createContext, useContext} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// Table Context
const TableContext = createContext(null);
export default function TableComponent({columns, rows, onEdit, onDelete}) {
    const provider = {columns, rows, onEdit, onDelete};
    return (
        <TableContext value={provider}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((column, index) => (
                                    <TableCell
                                        sx={{fontWeight: 'bold'}}
                                        key={`header-cell-${index}`}
                                    >
                                        {column.text}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            rows.map((row, index) => (
                                <Row key={`row-index-${index}`} row={row}/>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </TableContext>

    )
}

/* Component: Row */
const Row = ({row}) => {
    const {columns} = useContext(TableContext);
    return (
        <TableRow>
            {
                columns.map((column, index) => (
                    <Cell key={`cell-index-${index}`} row={row} column={column}/>
                ))
            }
        </TableRow>
    )
}

/* Component: Cell */
const Cell = ({row, column}) => {
    const {onEdit, onDelete} = useContext(TableContext);
    return (
        <TableCell>
            {
                column.name === 'action' ?
                    <>
                        <CreateOutlinedIcon
                            color='success'
                            sx={{cursor: 'pointer'}}
                            onClick={() => {
                                console.log('Edit: ', row)
                                onEdit(row)
                            }}
                        />
                        <DeleteOutlinedIcon
                            color='error'
                            sx={{cursor: 'pointer'}}
                            onClick={() => {
                                console.log('Delete')
                                onDelete(row)
                            }}
                        />
                    </>
                    :
                    <span>{row[column.name]}</span>
            }
        </TableCell>
    )
}


