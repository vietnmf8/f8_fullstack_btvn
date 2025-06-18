// 1. Create context
// 2. Provider
// 3. Consumer (Inject)



import {createContext, useContext} from "react";


// 1. Create context
const TableContext = createContext(null)


const Cell = ({text, name}) => {
    const {onClick} = useContext(TableContext);

    if(name === 'action') {
        return <td><button>Edit</button></td>
    }
    return (
        <td onClick={() => onClick(text)}>{text}</td>
    )
}

const Row = ({row}) => {
    const consumer = useContext(TableContext);
    const {columns} = consumer
    return (
        <tr>
            {
                columns.map((col, index) => {
                    return <Cell key={`table-cell-${row.id}-${col.name}`} text={row[col.name]} name={col.name}/>
                })
            }
        </tr>
    )
}



/* Component: Table */
export function Table({columns, rows}) {
    const onClick = (text) => {
        console.log(text)
    }

    const provider = {
        columns: columns,
        rows: rows,
        onClick: onClick
    }



    return (
        <TableContext value={provider}>
            <table width={'100%'} border={1} cellSpacing={0}>
                <thead>
                <tr>
                    {
                        columns.map((col) => {
                            return <th key={col.name}>{col.text}</th>
                        })
                    }
                </tr>
                </thead>

                <tbody>
                {
                    rows.map((row) => {
                        return <Row key={`table-row-${row.id}`} row={row}/>
                    })
                }
                </tbody>
            </table>
        </TableContext>
    )
};