import React from 'react'
import Loc from '../assests/Loc.png';
import Tanjore from '../assests/Tanjore.png';
import Sunrise from '../assests/Sunrise.png';
import Sunset from '../assests/Sunset.png';

const LeftComp = () => {
  return (
    <div>
       <div style={{backgroundColor:'#5c9ce5', width:'25%', height:'100vh'}}>
            <div style={{display:'flex'}}>
                <div>
                    <img src={Loc} width={'25px'}/>
                    <span style={{fontWeight:'900', fontFamily:'sans-serif', color:'white'}}>Chennai, India</span>
                </div>
                <div>
                    <img src={Sunrise} width={'25px'}/>
                    <span style={{fontWeight:'900', fontFamily:'sans-serif',color:'white'}}>06:09</span>
                </div>

            </div>
            <img src={Tanjore} style={{position:'relative', }} />
       </div>


    </div>
  )
}

export default LeftComp