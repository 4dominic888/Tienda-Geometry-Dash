import React, { useRef, useState } from 'react'
import fondo from '../assets/Background.png'
import Salesman from './Salesman/Salesman';
import musicaTienda from '../assets/music/shop.mp3'
import musicOff from '../assets/buttons/music-off.png'
import musicOn from '../assets/buttons/music-on.png'

export const Background = () => {
  
  const audioRef = useRef();

  const [isPlay, setisPlaying] = useState(false);
  const [zoom, setZoom] = useState(false);

  const initMusic = () =>{
    if(audioRef.current){

      if(isPlay){
        audioRef.current.pause();
      }
      else{
        audioRef.current.loop = true;
        audioRef.current.play();
      }
      setisPlaying(!isPlay);
    }
  }

  const handleMouseDown = () => {
    setZoom(true);
  }
  const handleMouseUp = () => {
    setZoom(false);
    initMusic();
  }

  return (
    <div className='background'>

        <audio ref={audioRef} controls={false}>
          <source src={musicaTienda} type='audio/mp3'/>
        </audio>

        <img src={fondo} alt="Fondo tienda"/>
        <Salesman/>

        <div className={`btn-music ${zoom ? "active" : ""}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{top: '1vw', left: '1vw'}}>

          <img src={isPlay ? musicOn : musicOff} alt="musica-boton" />
        </div>
    </div>
  )
}
export default Background;
