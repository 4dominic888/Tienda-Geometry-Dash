import React from 'react'
import fondo from '../assets/Background.png'
import HandSalesman from './HandSalesman';
import BodySalesman from './BodySalesman';
import HeadSalesman from './HeadSalesman';

const estiloa = {
  left: '1vw'
};

export const Background = () => {
  return (
    <div className='background'>
        <img src={fondo} alt="Fondo tienda"/>
        <BodySalesman/>
        <HandSalesman/>
        <HeadSalesman/>
    </div>
  )
}
export default Background;
