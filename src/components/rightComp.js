import React from 'react';
import More from '../assests/More.png';
import Akaza from '../assests/Akaza.jpg';
import Graph from './Graph';
import {Stack,Box,Grid} from '@mui/material';
import Cloud from '../assests/Cloud.png';
import Sunblack from '../assests/Sunblack.png';
import RightbottomCard from './RightbottomCard';
import '../App.css';
const RightComp = () => {
  return (
    <div style={{backgroundColor:'#e4f1ff',borderTopLeftRadius:'40px',borderBottomLeftRadius:'40px',marginLeft:'2%', width:'80%'}}>
        <div className='headerRight' style={{display:'flex',justifyContent:'space-between',marginTop:'3vh'}}>
            <div style={{marginLeft:'5%',textAlign:'left'}}>
                <h1 style={{fontSize:'1em',marginBottom:'0px'}}>Welcome Back Akaza!</h1>
                <p style={{fontSize:'1em',marginTop:'0px'}}>Check out today's weather information</p>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>  
                <img width={'25px'} height={'30px'} style={{padding:'0 25px 0 25px'}} src={More}/>
                <img width={'50px'} height={'50px'} style={{marginRight:'65px', borderRadius:'15px' }} src={Akaza} />
            </div>
        </div>
        <Box style={{width:'90%',backgroundColor:'white',justifyContent:'center',alignItems:'center',margin:'10px 25px 20px 55px',borderRadius:'40px'}}>
            <Stack id='statistics' direction={'row'} style={{width:'90%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h1 style={{background:'none',fontSize:'1em',marginBottom:'0px',marginTop:'2%',marginLeft:'7%'}}>Upcoming Hours</h1>
                <div style={{marginTop:'2%',marginLeft:'9%'}}>
                    <select name ='Rain Precipitation' id ='Rain Precipitation' class = 'Rain Precipitation' style = {{color: '#a7a7a7',fontWeight:'600',fontFamily:'Arial',fontSize: '12px',marginRight:'20px',fontStyle: 'normal',border:'2px solid #f1f1f1',borderRadius:'5px',backgroundColor: '#F1f1f1',padding: "2px"}}>
                    <option value = "#">Rain Precipitation 1</option>
                    <option value = "#">Rain Precipitation 2</option>
                    </select>
                    
                    <select name ='Next Day' id ='Next Day' class = 'Next Day' style = {{color: '#000000',marginRight:'3px',fontFamily:'Arial',fontWeight:'600',fontSize: '12px',fontStyle: 'normal',backgroundColor: '#F1f1f1',border:'2px solid #f1f1f1',borderRadius:'5px',padding: "2px"}}>
                    <option value = "#">Next Day</option>
                    <option value = "#">Yesterday</option>
                    </select>
                </div>
            </Stack>
            <Stack direction={'row'} style={{justifyContent:'space-evenly',marginBottom:'10px',marginTop:'25px'}}>
                <span style={{fontWeight:'bold',fontFamily:'arial',fontSize:'12px'}}>Now</span>
                <span style={{fontFamily:'arial',fontSize:'12px'}}>11:00</span>
                <span style={{fontFamily:'arial',fontSize:'12px'}}>12:00</span>
                <span style={{fontFamily:'arial',fontSize:'12px'}}>13:00</span>
                <span style={{fontFamily:'arial',fontSize:'12px'}}>14:00</span>
                <span style={{fontFamily:'arial',fontSize:'12px'}}>15:00</span>
                <span style={{fontFamily:'arial',fontSize:'12px'}}>16:00</span>
                <span style={{fontFamily:'arial',fontSize:'12px'}}>17:00</span>
            </Stack>
            <Stack direction={'row'} style={{justifyContent:'space-evenly',}}>
                <img alt="" id='1' width={'25px'} src={Sunblack} />
                <img alt="" id='2' width={'25px'} src={Sunblack} />
                <img alt="" id='3' width={'25px'} src={Cloud} />
                <img alt="" id='4' width={'25px'} src={Cloud} />
                <img alt="" id='5' width={'25px'} src={Sunblack} />
                <img alt="" id='6' width={'25px'} src={Cloud} />
                <img alt="" id='7' width={'25px'} src={Cloud} />
                <img alt="" id='' width={'25px'} src={Sunblack} />
            </Stack>
            <Stack direction={'row'} style={{justifyContent:'space-evenly',marginBottom:'10px',marginTop:'25px'}}>
                <span style={{fontWeight:'bold',fontFamily:'arial',fontSize:'12px'}}>27°</span>
                <span style={{fontWeight:'bold',fontFamily:'arial',fontSize:'12px'}}>28°</span>
                <span style={{fontWeight:'bold',fontFamily:'arial',fontSize:'12px'}}>28°</span>
                <span style={{fontWeight:'bold',fontFamily:'arial',fontSize:'12px'}}>29°</span>
                <span style={{fontWeight:'bold',fontFamily:'arial',fontSize:'12px'}}>30°</span>
                <span style={{fontWeight:'bold',fontFamily:'arial',fontSize:'12px'}}>29°</span>
                <span style={{fontWeight:'bold',fontFamily:'arial',fontSize:'12px'}}>29°</span>
                <span style={{fontWeight:'bold',fontFamily:'arial',fontSize:'12px'}}>28°</span>
            </Stack>
            <Stack display="flex" marginLeft={'40px'} marginTop={'15px'}>
                <Graph/>
            </Stack>
        </Box>

        <Box>
            <RightbottomCard/>
        </Box>
    </div>
  )
}

export default RightComp