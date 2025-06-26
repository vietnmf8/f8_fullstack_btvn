// 1. Create context
// 2. Provider
// 3. Consumer (Inject)

//1. Create context
import {createContext, useContext} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const TableContext = createContext(null)

/* Component: TableComponent */
export default function TableComponent({columns, rows, onEdit}) {
const provider  = {columns, rows, onEdit};
    /* Return */
    return (
        <TableContext value={provider}>
            <TableContainer>
                <Table
                    border="1"
                    cellPadding="0"
                    cellSpacing="0"
                    sx={{margin: "auto", width: "1000px"}}
                >
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((column, index) => {
                                    return (
                                        <th key={`header-index-${index}`}>{column.text}</th>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {
                            rows.map((row) => {
                                return <Row key={`row-index-${row.id}`} row={row} />
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </TableContext>

    );
}

/* Component: Row */
const Row = ({row}) => {
    const {columns} = useContext(TableContext);
    return (
        <TableRow>
            {
                columns.map((column) => {
                    return (
                        <Cell key={`cell-${column.name}-${row[column.name]}`} row={row} column={column}/>
                    )
                })
            }
        </TableRow>
    )
}


/* Component: Cell */
const Cell = ({row, column}) => {
    const {onEdit} = useContext(TableContext);
    return (
        <TableCell>
            {column.name === 'action' ?
                <>
                    <ModeEditOutlineOutlinedIcon color='success' onClick={() => onEdit(row)}/>
                    <DeleteOutlinedIcon color='error'/>
                </>

                :
                <span>{row[column.name]}</span>}
        </TableCell>
    )
}

