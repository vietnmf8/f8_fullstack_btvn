/* Click & Double-click */
import {Component, useContext, useEffect, useRef, useState} from "react";
import {TableContext} from "./const.jsx";
import './style.sass'

export default function () {
    const cellInputRef = useRef(null);
    const inputRef = useRef(null);
    const injector = useContext(TableContext)
    const {cursor, setCursor, rows, columns, onInput} = injector;


    const colName = columns[cursor.columnIndex].name;
    // console.log("colName: ", colName);

    const curRow = rows[cursor.rowIndex];
    // console.log("rowName: ", curRow);

    const [inputValue, setInputValue] = useState(curRow[colName]);
    // console.log("inputValue: ", inputValue);
    // console.log("curRow[colName]: ", curRow[colName]);


    //Double Click
    const onDoubleClick = () => {
        console.log('Double click');
        setCursor({
            ...cursor,
            isEditing: true,
        });
    }

    const onKeyDown = (e) => {
        if (!cursor.isEditing) {
            console.log("onKeyDown: ", e.key);
            setCursor({
                ...cursor,
                isEditing: true,
            });
            setInputValue(`${inputValue}${e.key}`);
        }

        //get input element
       setTimeout(() => {
           inputRef.current.focus();
       })

        if (e.key === 'Enter') {
            console.log("Đã nhấn Enter");
            // console.log("rowIndex: ", cursor.rowIndex)
            // console.log("colName: ", colName)
            // console.log(rows[cursor.rowIndex][colName]);
            // rows[cursor.rowIndex][colName] = 123
            onInput({
                rowIndex: cursor.rowIndex,
                columnIndex: cursor.columnIndex,
                value: inputValue
            });
        }
    }

    const onBlur = () => {
        onInput({
            rowIndex: cursor.rowIndex,
            columnIndex: cursor.columnIndex,
            value: inputValue
        });
    }



    // useEffect(() => {
    //     if (cursor.isEditing) {
    //         const inputRef = cellInputRef.current?.querySelector('input');
    //         if (inputRef) {
    //             inputRef.focus();
    //         }
    //     }
    // }, [cursor.isEditing]);



    // Update inputValue when this component have been reloaded
    useEffect(() => {
        setInputValue(curRow[colName])

        // focus in div tag when component have been reloaded
        cellInputRef.current.focus()
    }, [cursor.columnIndex, cursor.rowIndex, cursor.width])

    // console.log("cursor: ", cursor)





    return (
        <div
            tabIndex={0}
            ref={cellInputRef}
            className="cell-input"
            style={{
            position: "absolute",
            top: cursor.top,
            left: cursor.left,
            width: cursor.width,
            height: cursor.height,
        }}
            onDoubleClick={onDoubleClick}
            onKeyDown={onKeyDown}
        >
            {
                cursor.isEditing
                &&
                <input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={onBlur}
                />
            }
        </div>
    )
}