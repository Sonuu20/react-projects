import { useReducer} from 'react'
import DigitBtn from './compoents/DigitBtn'
import './style.css'
import './App.css'
import OperationBtn from './compoents/OperationBtn'

export const ACTIONS = {
  add_digit: 'add-digit',
  choose_operation: 'choose-operation',
  clear: 'clear',
  delete_digit: 'delete-digit',
  evalute: 'evaluate'
}

function reducer(state, {type, payload}){
  switch(type) {
    //case to add different digit in it
    case ACTIONS.add_digit:
      if(state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        }
      }

      if(payload.digit === '0' && state.currentOperand === '0') {
        return state
      }

      if(payload.digit === '.' && state.currentOperand == null) {
        return state
      }

      if(payload.digit === '.' && state.currentOperand.includes('.')){
        return state
      }


      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
      //case to calculate the opearation & add to it
    case ACTIONS.choose_operation:
        if(state.currentOperand == null && state.previousOprerand == null) {
          return state
        }

        if(state.currentOperand == null) {
          return{
            ...state,
            operation: payload.operation
          }
        }

        if(state.previousOprerand == null) {
          return {
            ...state,
            operation: payload.operation,
            previousOprerand: state.currentOperand,
            currentOperand: null
          }
        }
        return {
          ...state,
          previousOprerand: evaluate(state),
          operation: payload.operation,
          currentOperand: null
        }
        //case to clear the whole operation
    case ACTIONS.clear: 
      return {
        ...state,
        currentOperand: '0',
        previousOprerand: null,
        operation: null
      }
      //case to delete the number & clear it also if overwrite = true
    case ACTIONS.delete_digit:
      if(state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: '0'
        }
      }

      if(state.currentOperand === '0') return state

      if(state.currentOperand == null) return state

      if(state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null
        }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }
      //case to evalute the operation of it
    case ACTIONS.evalute: 

        if(state.operation == null || state.currentOperand == null || state.previousOprerand == null) {
          return state
        }

        return{
          ...state,
          overwrite: true,
          previousOprerand: null,
          operation: null,
          currentOperand: evaluate(state)
        }
  }
}

function evaluate({currentOperand, previousOprerand, operation}) {
  const prev = parseFloat(previousOprerand);
  const current = parseFloat(currentOperand);
  if(isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  switch(operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation =  prev * current;
      break;
    case "÷" :
      computation = prev/current;
      break;    
  }

  return computation.toString()

}

const Integer_Formater = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})

function formatOperand(operand){
  if(operand == null) return
  const [integer, decimal] = operand.split(".")
  if(decimal == null) return Integer_Formater.format(integer)
  return `${Integer_Formater.format(integer)}.${decimal}`
}

function App() {
  const [{currentOperand, previousOprerand, operation}, dispatch] = useReducer(reducer, {})

  return (
    <>
    <div className='calculator-grid'>
      <div className='output bg-slate-700 flex-col items-end justify-around p-3 break-words'>
        <div className='previous-op text-[#e9e0e0] text-lg'>{formatOperand(previousOprerand)} {operation}</div>
        <div className='current-op text-white text-3xl'>{formatOperand(currentOperand)}</div>
      </div>
      <button className='span-two bg-slate-200 hover:bg-slate-300 active:bg-slate-400  border border-slate-800 text-2xl' onClick={() => dispatch({type: ACTIONS.clear})}>AC</button>
      <button className=' bg-slate-200 hover:bg-slate-300 active:bg-slate-400 border border-slate-800 text-2xl' onClick={() => dispatch({type: ACTIONS.delete_digit})}>DEL</button>
      <OperationBtn operation="÷" dispatch={dispatch} />
      <DigitBtn digit="1" dispatch={dispatch}/>
      <DigitBtn digit="2" dispatch={dispatch}/>
      <DigitBtn digit="3" dispatch={dispatch}/>
      <OperationBtn operation="*" dispatch={dispatch} />
      <DigitBtn digit="4" dispatch={dispatch}/>
      <DigitBtn digit="5" dispatch={dispatch}/>
      <DigitBtn digit="6" dispatch={dispatch}/>
      <OperationBtn operation="+" dispatch={dispatch} />
      <DigitBtn digit="7" dispatch={dispatch}/>
      <DigitBtn digit="8" dispatch={dispatch}/>
      <DigitBtn digit="9" dispatch={dispatch}/>
      <OperationBtn operation="-" dispatch={dispatch} />
      <DigitBtn digit="." dispatch={dispatch}/>
      <DigitBtn digit="0" dispatch={dispatch}/>
      <button className='span-two bg-slate-200 hover:bg-slate-300 active:bg-slate-400 border border-slate-800 text-2xl' onClick={() => dispatch({type: ACTIONS.evalute})}>=</button>
    </div>
    </>
  )
}

export default App
