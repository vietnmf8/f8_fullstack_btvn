// Component -> Hiển thị danh sách sản phẩm
import {StudentItem} from "./StudentItem.jsx";

export const StudentList = ({students}) => {
    return (
        <>
          <h1>Danh sách sản phẩm</h1>
            {
                students.map(student => (
                    <StudentItem
                        key={student.id}
                        student={student}
                    />
                ))
            }
        </>
    )
}