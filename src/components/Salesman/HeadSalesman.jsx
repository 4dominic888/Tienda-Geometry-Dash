import React from 'react'
import head1 from '../../assets/salesman-source/head1-salesman.png'
import head2 from '../../assets/salesman-source/head2-salesman.png'
import EyeSalesman from './EyeSalesman'

const HeadSalesman = () => {
  return (
    <div>

        <div className='img-head' style={{top: '6.5vw', left: '66.1vw'}}>
            <img src={head2} alt="cabeza" />
        </div>

        <div className='img-head' style={{top: '12.4vw', left: '66.1vw'}}>
            <img src={head1} alt="mandibula" />
            <EyeSalesman/>
        </div>

    </div>
  )
}

export default HeadSalesman