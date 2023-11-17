import { ACTIONS } from "../App"

export default function OperationBtn({dispatch, operation}) {

    return(
        <button className=' bg-slate-200 hover:bg-slate-300 active:bg-slate-400 border border-slate-800 text-2xl' onClick={() => dispatch({type: ACTIONS.choose_operation, payload: {operation}})}>{operation}</button>
    )
}