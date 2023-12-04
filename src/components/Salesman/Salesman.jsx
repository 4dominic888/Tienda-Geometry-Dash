import React from 'react'
import BodySalesman from './BodySalesman'
import HandSalesman from './HandSalesman'
import HeadSalesman from './HeadSalesman'
import './Salesman.css'

const Salesman = () => {
  return (
    <div>
        <BodySalesman/>
        <HandSalesman/>
        <HeadSalesman/>
    </div>
  )
}

export default Salesman