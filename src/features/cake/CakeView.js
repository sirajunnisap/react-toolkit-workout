import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { ordered,restocked } from './cakeSlice'

export const CakeView = ()=>{
    const numOfCakes = useSelector((state) => state.cake.numberOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>number of cakes -{numOfCakes}</h2>
            <button onClick={()=>dispatch(ordered())}>order cake</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock cakes</button>
        </div>
    )
}