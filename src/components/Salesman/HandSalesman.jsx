import React from 'react' 
import hand from '../../assets/salesman-source/hand-salesman.png'

const HandSalesman = () => {
  return (
    <div>
        <div className='img-hand' style={{left: '66vw', top: '21.7vw'}}>
            
            <img 
            src={hand} 
            alt="mano izquierda" 
            style={{
                animation: 'move-hands-left 1.5s linear infinite'
            }} 
            />
            
        </div>

        <div className='img-hand' style={{left: '76vw', top: '21.7vw'}}>
            
            <img 
            src={hand} 
            alt="mano derecha" 
            style={{
                animation: 'move-hands-right 1.5s linear infinite'
            }} 
            />
            
        </div>

    </div>
  )
}

export default HandSalesman