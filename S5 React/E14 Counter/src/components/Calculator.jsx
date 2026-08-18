import {useState} from 'react'

const Calculator = () => {
const [InputVal, SetInputVal]=useState('')

const Display=(Value)=>SetInputVal(InputVal+Value)

const Calculate=()=>SetInputVal(eval(InputVal))

const Clear=()=> SetInputVal("")

  return (
    <form className='Calculator' name="Calc"> 

<input type="text" className='Value' value={InputVal}/>

<span className="NumClear" onClick={()=>Clear()}>C</span>

<span onClick={()=>Display('/')}>/</span>
<span onClick={()=>Display('*')}>*</span>
<span onClick={()=>Display('7')}>7</span>
<span onClick={()=>Display('8')}>8</span>
<span onClick={()=>Display('9')}>9</span>
<span onClick={()=>Display('-')}>-</span>
<span onClick={()=>Display('4')}>4</span>
<span onClick={()=>Display('5')}>5</span>
<span onClick={()=>Display('6')}>6</span>
<span className="Plus"onClick={()=>Display('+')}>+</span>

<span onClick={()=>Display('1')}>1</span>
<span onClick={()=>Display('2')}>2</span>
<span onClick={()=>Display('3')}>3</span>
<span onClick={()=>Display('0')}>0</span>
<span onClick={()=>Display('00')}>00</span>
<span onClick={()=>Display('.')}>.</span>
<span className='NumEqual' onClick={()=>Calculate()}>=</span>
    </form>
  )
}

export default Calculator