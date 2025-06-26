import {useEffect, useState} from "react";
import {get, post} from "../../utils/index.js";
import {ConfirmDeleteDialog, EmployeeDialog, FTable} from "../../components/index.js";
import {Button} from "@mui/material";

const initEmployee = {
    id: null, name: null, age: null, address: null
}

function Employees() {
    const [isOpenDialog, setIsOpenDialog] = useState(false)
    const [isOpenConfirmDeleteDialog, setIsOpenConfirmDeleteDialog] = useState(false)

    const [curEmployee, setCurEmployee] = useState({
        id: null, name: null, age: null, address: null
    })

    const columns = [
        { name: 'id', text: 'Id'},
        { name: 'name', text: 'Name'},
        { name: 'age', text: 'Age'},
        { name: 'address', text: 'Address'},
        { name: 'action', text: ''},
    ]

    const [employees, setEmployees] = useState([])

    const getEmployees = async () => {
        const data = await get('employees')
        console.log("data: ", data)
        // setEmployees(data || [])
        //nếu data là undefined, null, hoặc lỗi API trả về false, thì [] sẽ được dùng thay thế.
        if (data) setEmployees(data)
    }

    const onEdit = (employee) => {
        const newEmployee = { ...employee }
        setCurEmployee(newEmployee)
        console.log('newEmployee: ', newEmployee)
        setIsOpenDialog(true)
    }
    const onCreate = () => {
        setCurEmployee(initEmployee)
        setIsOpenDialog(true)
    }

    // Delete key id
    const toBody = (employee) => {
        return {
            name: employee.name,
            age: employee.age,
            address: employee.address,
        }
    }

    const onSave = async (employee) => {
        console.log('on save: ', employee)
        if (employee.id) {
            // update
        }
        else await post('employees', toBody(employee))
        // reload
        await getEmployees()
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <>
            <FTable columns={columns} rows={employees} onEdit={onEdit}/>
            <Button variant="outlined" onClick={onCreate}>Add new</Button>
            <EmployeeDialog
                isOpen={isOpenDialog}
                setIsOpen={setIsOpenDialog}
                employee={curEmployee}
                setEmployee={setCurEmployee}
                onSave={onSave}
            />
            <ConfirmDeleteDialog isOpen={isOpenConfirmDeleteDialog} setIsOpen={setIsOpenConfirmDeleteDialog}/>
        </>
    )
}

export default Employees