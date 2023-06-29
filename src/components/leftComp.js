import React from 'react'
import Loc from '../assests/Loc.png';
import Central from '../assests/Central.png';
import Sunrise from '../assests/Sunrise.png';
import Sunset from '../assests/Sunset.png';
import Add from '../assests/Add.png';
import Rightarr from '../assests/Rightarr.png';
import Sun from '../assests/Sun.png';
import { Stack } from '@mui/material';


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
                    <div style={{display:'flex',marginRight:'15%',marginLeft:'-2%'}}>
                        <img src={Loc} width={'20px'} height={'20px'} style={{marginTop:'23px'}}/>
                        <p style={{fontWeight:'bold',fontSize:'20px', fontFamily:'fonty', color:'white',marginLeft:'5px'}}>Chennai, India</p>
                    </div>
                    <div style={{textAlign:'center',marginLeft:'-5px'}}>
                        <img src={Sunrise} width={'25px'} style={{marginTop:'0px'}}/>
                        <span style={{fontWeight:'lighter',fontSize:'17px', fontFamily:'fonty',color:'white',marginLeft:'5px'}}>06:09</span>
                    </div>
                </div>
                <Stack direction={'row'}>
                    <div style={{marginRight:'0%',marginLeft:'10%',marginTop:'-20px',fontWeight:'lighter'}}>
                        <span style={{color:'white',fontFamily:'fonty',fontWeight:'', fontSize:'20px'}}>Today 27 June</span></div>
                    <div style={{marginTop:'-20px', marginLeft:'22%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <img src={Sunset} width={'25px'} height={'30px'} style={{}}/>
                        <span style={{fontWeight:'lighter',fontSize:'17px', fontFamily:'fonty',color:'white',marginLeft:'5px',marginTop:'10px'}}>18:53</span>
                    </div>
                </Stack>
            </div>

            <div style={{marginTop:'10%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={Rightarr} width={'40px'}style={{transform:'scaleX(-1)'}}/>
                <span style={{color:'white', fontWeight:'900',fontFamily:'fonty',fontSize:'6em',marginLeft:'16%',marginRight:'15%'}}>27°</span>
                <img src={Rightarr} width={'40px'}/>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src={Sun} width={'25px'} style={{marginRight:'5%'}}/>
                <span style={{color:'white',fontFamily:'fonty'}}>Sunny</span>
            </div>
            <img src={Central} width={'125%'} style={{position:'relative',left:'-8%',top:'12%' }} />
       </div>
  )
}

export default LeftComp