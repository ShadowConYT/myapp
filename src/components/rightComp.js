import React from 'react';
import More from '../assests/More.png';
import Akaza from '../assests/Akaza.jpg';
const RightComp = () => {
  return (
    <div style={{backgroundColor:'#e4f1ff',borderRadius:'40px 0px 0px 40px',marginLeft:'2%', width:'80%'}}>
        <div className='headerRight' style={{display:'flex',justifyContent:'space-between',marginTop:'3vh'}}>
            <div id='headerRight01' style={{marginLeft:'5%',textAlign:'left'}}>
                <h1 style={{fontSize:'1em',marginBottom:'0px'}}>Welcome Back Akaza!</h1>
                <p style={{fontSize:'1em',marginTop:'0px'}}>Check out today's weather information</p>
            </div>
            <div id='headerRight02'>  
                <img width={'25px'} height={'30px'} style={{padding:'0 25px 0 25px'}} src={More}/>
                <img width={'50px'} height={'50px'} style={{padding:'0 50px 0 0px',borderRadius:'10px 10px 10px 10px'}} src={Akaza}/>
            </div>
        </div>
    </div>
  )
}

export default RightComp