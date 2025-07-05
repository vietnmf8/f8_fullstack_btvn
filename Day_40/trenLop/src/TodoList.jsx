import {memo, useReducer} from "react";


const Item = memo(({job}) => {
    return (
        <div className="item">
            <span>{job.name}</span>
            <div>
                <button>Sửa</button>
                <button>Xoá</button>
                <button>Done!</button>
            </div>
        </div>
    )
})

const reducer = (state, action) => {
    if (action.type === 'inputtingJob/change') {
        return {
            ...state,
            inputtingJob: action.payload
        }
    }

    if (action.type === 'jobs/add') {
       const jobs = [...state.jobs]
        return {
           ...state,
            jobs: [...state.jobs, {name: action.payload, status: 'Doing'}],
        }
    }

    return state
}



export default function () {

    const onSave = () => {
        dispatch({type: 'jobs/add', payload: state.inputtingJob})
    }

    const [state, dispatch] = useReducer(reducer, {
        jobs: [
            {name: 'Nấu ăn', status: 'Done'},
            {name: 'Rửa bat', status: 'Done'},
            {name: 'Lau nhà', status: 'Doing'},
        ],
        inputtingJob: null
    })




    return (
        <>
            <div className="item">
                <input
                    type="text"
                    value={state.inputtingJob || ''}
                    onChange={(e) => dispatch(
                        {type: 'inputtingJob/change', payload: e.target.value}
                    )}

                />
                <button onClick={onSave}>Save</button>
            </div>

            <div>
                {
                    state.jobs.map((job, index) => (
                        <Item key={index} job={job} />
                    ))
                }
            </div>
        </>
    )
}