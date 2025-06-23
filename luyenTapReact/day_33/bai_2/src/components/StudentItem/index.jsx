export const StudentItem = ({student}) => {
    return (
        <>
            <h3>{student.name}</h3>
            <p>Tuoi: {student.age}</p>
            <p>Nganh hoc: {student.major}</p>
        </>
    )
}