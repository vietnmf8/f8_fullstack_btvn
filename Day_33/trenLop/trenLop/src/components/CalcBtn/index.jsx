// Component: Index
// props: {text, backgroundColor} is Object
export const CalcBtn = (props) => {
    const {text, backgroundColor} = props

    const onclick = () => {
        console.log('click')
    }

    return (
        <div
            style={{backgroundColor: backgroundColor}}
            className="btn"
            onClick={onclick}

        >
            {text}
        </div>
    )
}