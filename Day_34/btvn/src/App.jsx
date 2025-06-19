import './App.css'
import {Table} from './components'
import {Button, DialogContent, DialogTitle, Dialog, TextField, DialogActions, Alert} from "@mui/material";
import {useState} from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function App() {
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [employees, setEmployees] = useState([
    {id: 1, name: 'viet', age: 23, address: '123/3 đường Lê Lợi, phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh'},
    {id: 2, name: 'viet nam', age: 23, address: '123/5B đường Lê Lợi, Phường 6, thành phố Tuy Hòa, tỉnh Phú Yên'},
    {id: 3, name: 'nam viet', age: 23, address: '123/5B đường Lê Lợi, Phường 6, thành phố Tuy Hòa, tỉnh Phú Yên'},
  ])

  // State cho form hiện tại
  const [curEmployee, setCurEmployee] = useState({
    id: null, name: '', age: '', address: ''
  })

  // State theo dõi chế độ Edit hay Add
  const [isEditMode, setIsEditMode] = useState(false)

  // State cho thông báo lỗi
  const [errorMessage, setErrorMessage] = useState('')

  const columns = [
    { name: 'id', text: 'Id'},
    { name: 'name', text: 'Name'},
    { name: 'age', text: 'Age'},
    { name: 'address', text: 'Address'},
    { name: 'action', text: ''},
  ]

  // Hàm mở dialog để thêm mới
  const handleAddNew = () => {
    setCurEmployee({ id: null, name: '', age: '', address: '' })
    setIsEditMode(false)
    setErrorMessage('')
    setIsOpenDialog(true)
  }

  // Hàm mở dialog để chỉnh sửa
  const handleEdit = (employee) => {
    setCurEmployee(employee)
    setIsEditMode(true)
    setErrorMessage('')
    setIsOpenDialog(true)
  }

  // Hàm xóa nhân viên
  const handleDelete = (employeeId) => {
    setEmployees(employees.filter(emp => emp.id !== employeeId))
  }

  // Hàm đóng dialog
  const handleCloseDialog = () => {
    setIsOpenDialog(false)
    setErrorMessage('')
  }

  // Hàm kiểm tra validation
  const validateForm = () => {
    if (!curEmployee.name.trim()) {
      setErrorMessage('Tên không được để trống')
      return false
    }
    if (!curEmployee.age.toString().trim()) {
      setErrorMessage('Tuổi không được để trống')
      return false
    }
    if (!curEmployee.address.trim()) {
      setErrorMessage('Địa chỉ không được để trống')
      return false
    }
    return true
  }

  // Hàm lưu dữ liệu
  const handleSave = () => {
    if (!validateForm()) return

    if (isEditMode) {
      setEmployees(employees.map(emp =>
          emp.id === curEmployee.id ? curEmployee : emp
      ))
    }
    else {
      const newId = Math.max(...employees.map(emp => emp.id)) + 1
      const newEmployee = { ...curEmployee, id: newId }
      setEmployees([...employees, newEmployee])
    }

    handleCloseDialog()
  }

  // Hàm cập nhật input
  const handleInputChange = (field, value) => {
    setCurEmployee(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
      <>
        {/* Dialog thêm/sửa nhân viên */}
        <Dialog open={isOpenDialog} onClose={handleCloseDialog}>
          <DialogTitle sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span>{isEditMode ? 'Chỉnh sửa nhân viên' : 'Thêm nhân viên mới'}</span>
            <CloseOutlinedIcon onClick={handleCloseDialog} sx={{cursor: 'pointer'}}/>
          </DialogTitle>
          <DialogContent>
            {/* Hiển thị thông báo lỗi */}
            {errorMessage && (
                <Alert severity="error" sx={{mb: 2}}>
                  {errorMessage}
                </Alert>
            )}

            <TextField
                fullWidth
                label="Tên"
                variant="standard"
                value={curEmployee.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                sx={{mb: 2}}
            />
            <TextField
                fullWidth
                label="Tuổi"
                variant="standard"
                type="number"
                value={curEmployee.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                sx={{mb: 2}}
            />
            <TextField
                fullWidth
                label="Địa chỉ"
                variant="standard"
                value={curEmployee.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button color={'error'} variant={'outlined'} onClick={handleCloseDialog}>
              Hủy
            </Button>
            <Button color={'info'} variant={'outlined'} onClick={handleSave}>
              {isEditMode ? 'Cập nhật' : 'Lưu'}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Container cho Table và Button */}
        <div style={{position: 'relative', width: '800px', margin: 'auto'}}>
          {/* Button Add New ở góc phải trên */}
          <Button
              variant="outlined"
              onClick={handleAddNew}
              style={{
                position: 'absolute',
                top: '10px',
                right: '0px',
                zIndex: 1
              }}
          >
            Thêm mới
          </Button>

          {/* Table với props mới */}
          <Table
              columns={columns}
              rows={employees}
              onEdit={handleEdit}
              onDelete={handleDelete}
          />
        </div>
      </>
  )
}

export default App