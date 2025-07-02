import {useContext, useRef} from "react";
import {TableContext} from "./const.jsx";

/* Component: Cell */
export default function ({row, column, rowIndex, columnIndex}) {

    const injector = useContext(TableContext)
    const {cursor, setCursor} = injector;

    // Sử dụng useRef để tham chiếu vào <td>
    const cellRef = useRef(null)

    // Nội dung trong ô
    const cell = row[column.name]

    // Function: onClick
    const onClick = () => {
        console.log('cellRef: ', cellRef.current)

        if (cellRef.current) {
            // offset: Kích thước thực tế hiển thị
            const top = cellRef.current.offsetTop;
            const left = cellRef.current.offsetLeft;
            const width = cellRef.current.offsetWidth;
            const height = cellRef.current.offsetHeight;

            //set
            setCursor({
                ...cursor,
                top: top,
                left: left,
                width: width,
                height: height,
                rowIndex: rowIndex,
                columnIndex: columnIndex,
                isEditing: false,
            })
        }
    }


    return (
        <td
            onClick={onClick}
            ref={cellRef}
        >
            {cell}
        </td>
    )
}