import {TableComponent, EmployeeDialog, ConfirmDeleteDialog} from "./components";
import {Button} from "@mui/material";
import {useState} from "react";



function App() {

    /* ? Open Dialog */
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [isOpenConfirmDeleteDialog, setIsOpenConfirmDeleteDialog] = useState(false);

    /* Data */
    const columns = [
        {name: 'id', text: 'Ma nhan vien'},
        {name: 'name', text: 'Ho va ten'},
        {name: 'age', text: 'Tuoi'},
        {name: 'address', text: 'Dia chi'},
        {name: 'action', text: 'Hanh dong'},
    ]
    const employees = [
        {id: 1, name: 'Viet', age: 20, address: 'Ha Noi'},
        {id: 2, name: 'Quynh', age: 25, address: 'Ha Nam'},
        {id: 3, name: 'Nam', age: 30, address: 'Bac Ninh'},
    ]

    /* Employee hien tai */
    const [currentEmployee, setCurrentEmployee] = useState(
        {id: null, name: '', age: '', address: ''},
    );

    //onEdit
    const onEdit = (employee) => {
        setCurrentEmployee(employee);
        setIsOpenDialog(true);
    }

    const initEmployee = {
        id: null, name: '', age: '', address: ''
    }

    const onCreate = () => {
        setCurrentEmployee(initEmployee);
        setIsOpenDialog(true);
    }











    /* Return */
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Table */}
            <TableComponent
                columns={columns}
                rows={employees}
                onEdit={onEdit}
            />

            {/* Button */}
            <Button
                sx={{width: '1000px', margin: '20px auto'}}
                variant="outlined"
                onClick={onCreate}
            >
                ADD NEW
            </Button>

            {/* Dialog */}
            <EmployeeDialog
                isOpen={isOpenDialog}
                setIsOpen={setIsOpenDialog}
                employee={currentEmployee}
                setEmployee={setCurrentEmployee}
            />

            <ConfirmDeleteDialog
                isOpen={isOpenConfirmDeleteDialog}
                setIsOpen={setIsOpenConfirmDeleteDialog}
            />

        </div>
    );
}

export default App;
