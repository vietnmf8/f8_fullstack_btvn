import './App.css'
import {useEffect, useState} from "react";
import {TableComponent, DialogEmployee, DialogDeleteConfirm} from "./components";
import {Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';


function App() {

    /* --------------------------- TOAST ---------------------------*/
    const errorNotify = (message) => toast.error(message);



    /* --------------------------- Data ---------------------------*/
    // Columns
    const columns = [
        { name: 'id', text: 'Id'},
        { name: 'name', text: 'Name'},
        { name: 'age', text: 'Age'},
        { name: 'address', text: 'Address'},
        { name: 'action', text: 'Hanh Dong'},
    ]
    // Rows
    const [employees, setEmployees] = useState([
        {id: 1, name: 'Nguyen Minh Viet', age: 25, address: 'Ha Noi'},
        {id: 2, name: 'Nguyen Thuy Quynh', age: 26, address: 'Nam Dinh'},
        {id: 3, name: 'Nguyen Kien Chung', age: 27, address: 'Phu Tho'},
    ])

    // State: Open Dialog
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    // State: Edit Mode
    const [isEditMode, setIsEditMode] = useState(false);

    // State: Open Delelte Dialog
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

    // curEmployee
    const [curEmployee, setCurEmployee] = useState(
        {id: null, name: '', age: '', address: ''}
    )

    /* Function: ADD NEW */
    const onAddNew = () => {
        setIsOpenDialog(true)
        setIsEditMode(false)
        setCurEmployee({id: null, name: '', age: '', address: ''})
    }

    /* Fucntion: CLOSE */
    const onClose = () => {
        setIsOpenDialog(false)
        setIsOpenDeleteDialog(false)
    }

    /* Function: EDIT */
    const onEdit = (employee) => {
        setIsOpenDialog(true)
        setIsEditMode(true)
        setCurEmployee({...employee})
    }

    /* Function: onInputChange */
    const onInputChange = (key, value) => {
        setCurEmployee(prev => ({
            ...prev,
            [key]: value
        }))
    }

    /* Function: Validate */
    const isValidate = () => {
        if (!curEmployee.name.trim()) {
            errorNotify('Name cannot be empty')
            return false;
        }
        if (!curEmployee.age.toString().trim()) {
            errorNotify('Age cannot be empty')
            return false;
        }
        if (!curEmployee.address.trim()) {
            errorNotify('Address cannot be empty')
            return false;
        }
        return true;
    }


    /* Function: SAVE */
    const onSave = () => {
        if (!isValidate()) return
        if (isEditMode) {
            setEmployees(employees.map((employee) => (
                    employee.id === curEmployee.id ? curEmployee : employee
                )
            ))
        }
        else {
            const newId = Math.max(...employees.map((employee) => (employee.id))) + 1
            const newEmployee = {...curEmployee, id: newId}
            setEmployees([...employees, newEmployee])
        }
        onClose()
    }

    /* Function: Delete */
    const onDelete = (employee) => {
        setIsOpenDeleteDialog(true)
        setCurEmployee({...employee})
    }

    /* Function: YES DELETE */
    const onYesDelete = (curEmployee) => {
        setEmployees([...employees.filter(employee => employee.id !== curEmployee.id)])
        onClose()
    }



    useEffect(() => {
        console.log('CurEmployee: ', curEmployee)
    },[curEmployee])




    /* --------------------------- RETURN ---------------------------*/
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {/* Table */}
            <TableComponent
                columns={columns}
                rows={employees}
                onEdit={onEdit}
                onDelete={onDelete}
            />

            {/* Addnew/Edit Dialog */}
            <DialogEmployee
                isOpen={isOpenDialog}
                curEmployee={curEmployee}
                onClose={onClose}
                onInput={onInputChange}
                onSave={onSave}
            />

            {/* Delete Dialog */}
            <DialogDeleteConfirm
                isOpen={isOpenDeleteDialog}
                curEmployee={curEmployee}
                employees={employees}
                onClose={onClose}
                onDelete={onDelete}
                onYesDelete={onYesDelete}
            />

            {/* Button: ADD NEW */}
            <Button
                variant="outlined"
                onClick={onAddNew}
            >
                ADD NEW
            </Button>
            <ToastContainer />
        </div>
    )
}

export default App
