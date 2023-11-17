import { ACTIONS } from "../App"

export default function DigitBtn({dispatch, digit}) {

    return (
        <button className=' bg-slate-200 hover:bg-slate-300 active:bg-slate-400 border border-slate-800 text-2xl' onClick={() => dispatch({type: ACTIONS.add_digit, payload: {digit}})}>{digit}</button>
    )
}