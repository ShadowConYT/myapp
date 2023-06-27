import React from 'react'
import Loc from '../assests/Loc.png';
import Central from '../assests/Central.png';
import Sunrise from '../assests/Sunrise.png';
import Sunset from '../assests/Sunset.png';
import Add from '../assests/Add.png';
import Rightarr from '../assests/Rightarr.png';
import Sun from '../assests/Sun.png';


const LeftComp = () => {
  return (
       <div style={{backgroundColor:'#5c9ce5', width:'25%', height:'100vh'}}>
            <div style={{display:'flex',marginBottom:'25px',marginTop:'5vh',marginLeft:'35px'}}>
                <img src={Add} width={'30px'}/>
                <span style={{backgroundColor:'white',color:'white',margin:0,padding:0,fontSize:'5px',width:'15px',height:'5px',marginTop:'10px', borderRadius:'10px',marginLeft:'25%'}}>.</span>
                <span style={{backgroundColor:'gray',opacity:'75%',color:'white',margin:0,padding:0,fontSize:'5px',width:'5px',height:'5px',marginTop:'10px',marginLeft:'2%', borderRadius:'10px'}}>.</span>
                <span style={{backgroundColor:'gray',opacity:'75%',color:'white',margin:0,padding:0,fontSize:'5px',width:'5px',height:'5px',marginTop:'10px',marginLeft:'2%', borderRadius:'10px', marginRight:'20%'}}>.</span>
                <div style={{display:'flex'}}>
                    <span style={{marginRight:'10px',fontFamily:'monospace',color:'white',fontSize:'17px'}}>°C</span>
                    <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider"></span>
                    </label>
                    <span style={{marginLeft:'10px',fontFamily:'monospace',color:'white',fontSize:'17px'}}>°F</span>
                </div>
            
            </div>
            <div style={{marginBottom:'0px',padding:'0px'}}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{display:'flex',marginRight:'15%',marginLeft:'0%'}}>
                        <img src={Loc} width={'30px'} height={'30px'} style={{marginTop:'17px'}}/>
                        <p style={{fontWeight:'lighter',fontSize:'20px', fontFamily:'initial', color:'white',marginLeft:'5px'}}>Chennai, India</p>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src={Sunrise} width={'25px'} style={{marginTop:'0px'}}/>
                        <span style={{fontWeight:'lighter',fontSize:'20px', fontFamily:'monospace',color:'white',marginLeft:'5px'}}>06:09</span>
                    </div>
                </div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{marginRight:'20%',marginLeft:'5%',marginTop:'0px'}}>
                        <span style={{color:'white',font:'initial', fontSize:'20px'}}>Today 27 June</span></div>
                    <div>
                        <img src={Sunset} width={'25px'} height={'30px'} style={{marginTop:'-50%'}}/>
                        <span style={{fontWeight:'lighter',fontSize:'20px', fontFamily:'monospace',color:'white',marginLeft:'5px'}}>18:53</span>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'10%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={Rightarr} width={'40px'}style={{transform:'scaleX(-1)'}}/>
                <span style={{color:'white', fontWeight:'900',fontFamily:'sans-serif',fontSize:'6em',marginLeft:'16%',marginRight:'15%'}}>27°</span>
                <img src={Rightarr} width={'40px'}/>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={Sun} width={'25px'} style={{marginRight:'5%'}}/>
                <span style={{color:'white'}}>Sunny</span>
            </div>
            <img src={Central} width={'125%'} style={{position:'relative',left:'-8%',top:'11%' }} />
       </div>
  )
}

export default LeftComp