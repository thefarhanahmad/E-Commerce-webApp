import React from 'react'
import { useParams } from 'react-router-dom'

const OrderDetails = () => {

    const {id} = useParams()

  return (
    <div>
      <h1>Order from {id}</h1>
    </div>
  )
}

export default OrderDetails
