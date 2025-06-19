import {createContext, useContext} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const TableContext = createContext(null)

const Cell = ({row, column}) => {
  const injector = useContext(TableContext)
  const {onEdit, onDelete} = injector // Lấy functions từ context

  return (
      <TableCell>
        {column.name === 'action'
            ? <>
              {/* Icon Edit với sự kiện click */}
              <ModeEditOutlineOutlinedIcon
                  color={'success'}
                  sx={{cursor: 'pointer', mr: 1}}
                  onClick={() => onEdit(row)}
              />
              {/* Icon Delete với sự kiện click */}
              <DeleteOutlineOutlinedIcon
                  color={'error'}
                  sx={{cursor: 'pointer'}}
                  onClick={() => onDelete(row.id)}
              />
            </>
            : <span>{row[column.name]}</span>
        }
      </TableCell>
  )
}

const Row = ({row}) => {
  const injector = useContext(TableContext)
  const {columns} = injector

  return (
      <TableRow>
        {
          columns.map((col, index) => {
            return <Cell key={`f-table-cell-${row.id}-${col.name}`} row={row} column={col}/>
          })
        }
      </TableRow>
  )
}

export default function ({columns, rows, onEdit, onDelete}) {
  const provider = {
    columns,
    rows,
    onEdit,   // Truyền function onEdit vào context
    onDelete  // Truyền function onDelete vào context
  }

  return (
      <TableContext.Provider value={provider}>
        <TableContainer>
          <Table sx={{width: 800, margin: 'auto'}}>
            <TableHead>
              <TableRow>
                {
                  columns.map((col) => {
                    return <TableCell sx={{fontWeight: 600}} key={col.name}>{col.text}</TableCell>
                  })
                }
              </TableRow>
            </TableHead>

            <TableBody>
              {
                rows.map((row) => {
                  return <Row key={`f-table-row-${row.id}`} row={row}/>
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </TableContext.Provider>
  )
}