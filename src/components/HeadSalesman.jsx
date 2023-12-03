import React from 'react'
import head1 from '../assets/head1-salesman.png'
import head2 from '../assets/head2-salesman.png'

const HeadSalesman = () => {
  return (
    <div>

        <div className='img-head' style={{top: '6.5vw', left: '66.1vw'}}>
            <img src={head2} alt="cabeza" />
        </div>

        <div className='img-head' style={{top: '12.4vw', left: '66.1vw'}}>
            <img src={head1} alt="mandibula" />
        </div>

    </div>
  )
}

export default HeadSalesman