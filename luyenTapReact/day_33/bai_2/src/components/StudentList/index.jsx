import {StudentItem} from '../StudentItem'

export const StudentList = ({students}) => {
    return (
        <>
            <h1>Danh sach sinh vien</h1>
            {
                students.map(student => (
                    <StudentItem key={student.id} student={student} />
                ))
            }
        </>
    )
}