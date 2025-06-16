
// Component -> Hiển thị thông tin sản phẩm
export const StudentItem = ({student}) => {
    return (
        <div>
            <h3>{student.name}</h3>
            <p>Tuổi: {student.age}</p>
            <p>Ngành học: {student.major}</p>
        </div>
    )
}