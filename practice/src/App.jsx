import { useSelector,useDispatch } from 'react-redux'
import './App.css'



function App() {
 

  const count = useSelector(state => state.count)
 const dispatch = useDispatch()
  return (
    <>
    <h1>count :{count}</h1>
    <button onClick={()=>dispatch({type:'INC'})}>+</button>
    <button onClick={()=>dispatch({type:'DEC'})}>-</button>
    </>
  )
}

export default App
