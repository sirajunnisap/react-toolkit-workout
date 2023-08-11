import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { ordered,restocked } from "./icecreamSlice"


export const IcecreamView = ()=>{
    const [value,setValue] = React.useState(1)
    const numOfIcecreams = useSelector((state)=>state.icecream.numberOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>number of ice creams -{numOfIcecreams}</h2>
            <button onClick={()=>dispatch(ordered)}>order ice cream</button>
            <input 
             type="number"
             value={value} 
             onChange={(e)=>setValue(parseInt(e.target.value))}></input>
            <button onClick={()=>dispatch(restocked(value))}>Restock ice creams</button>
        </div>
    )
}