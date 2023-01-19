import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userType } from '../Redux/actions/userSlice'
import { increment, decrement } from '../Redux/actions/counterSlice'

const Component3 = () => {
  const dispatch = useDispatch()
  const [data,setData] = useState([])
  const handleChange = (e) => {
    const { name , value } = e.target
    setData({...data, [name]: value})
  }
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div>
          <input name='name' value={data.name} onChange={(e) => handleChange(e)}/>
          <button
          aria-label="Updation"
          onClick={() => dispatch(userType(data.name))}
        >
          Update
        </button>
        </div>

      </div>


    </div>

  )
}
export default Component3;