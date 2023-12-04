import React, { useEffect } from 'react'
import eye from '../../assets/salesman-source/eye-salesman.png'
import pupil from '../../assets/salesman-source/pupil-salesman.png'
import parpado from '../../assets/salesman-source/parpado-salesman.png'

const EyeSalesman = () => {

    function moverPupila(bottom, left, item){
        item.style.bottom = bottom;
        item.style.left = left;
    }

    useEffect(() =>{

        //Parpadeo
        const invervalID = setInterval(() => {
            const ojos = document.querySelectorAll('.img-eye');
            const parpados = document.querySelectorAll('.img-parpado');

            ojos.forEach((item)=>{
                item.style.opacity = '0'
            })
            parpados.forEach((item)=>{
                item.style.opacity = '1'
            })

            setTimeout(() => {
                ojos.forEach((item)=>{
                    item.style.opacity = '1'
                })
                parpados.forEach((item)=>{
                    item.style.opacity = '0'
                })
            }, 90);
        }, 4500);


        const miradaID = setInterval(() => {
            const pupila1 = document.getElementById('pupil1');
            const pupila2 = document.getElementById('pupil2');
            
            moverPupila('0.3vw', '1.6vw', pupila1);
            moverPupila('0.3vw', '1.6vw', pupila2);

            setTimeout(() => {
                moverPupila('0.3vw', '0.6vw', pupila1);
                moverPupila('0.3vw', '0.6vw', pupila2);
            }, 1000);

            setTimeout(() => {
                moverPupila('0.8vw', '1.3vw', pupila1);
                moverPupila('0.8vw', '0.75vw', pupila2);
            }, 2500);

        }, 12000);

        return () => {
            clearInterval(invervalID);
            clearInterval(miradaID);    
        };
    }, []);

    return (
        <div>
            <div>
                <div className="img-eye" style={{bottom: '9.5vw', left: '2vw'}}>
                    <img src={eye} alt="ojo"/>

                    <div className="img-pupil" id='pupil1' style={{left: '1.3vw'}}>
                        <img
                        src={pupil}
                        alt="pupila"/>
                    </div>
                </div>
                <div className='img-parpado' style={{bottom: '11.4vw', left: '2vw'}}>
                    <img src={parpado} alt="ccc" />
                </div>
            </div>

            <div>
                <div className="img-eye" style={{bottom: '13.5vw', left: '8.2vw'}}>
                    <img src={eye} alt="ojo"/>

                    <div className="img-pupil" id='pupil2' style={{left: '0.75vw'}}>
                        <img
                        src={pupil}
                        alt="pupila"/>
                    </div>
                </div>

                <div className='img-parpado' style={{bottom: '15.4vw', left: '8.3vw'}}>
                <img src={parpado} alt="ccc" />
                </div>
            </div>
        </div>
    )
}

export default EyeSalesman