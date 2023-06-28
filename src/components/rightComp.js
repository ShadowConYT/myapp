import React from 'react';
import More from '../assests/More.png';
import Akaza from '../assests/Akaza.jpg';
import Graph from './Graph';
import {Stack,Box} from '@mui/material';
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
                <img width={'50px'} height={'50px'} style={{marginRight:'50px', borderRadius:'15px' }} src={Akaza} />
            </div>
        </div>
        <Box style={{backgroundColor:'white',justifyContent:'center',alignItems:'center',margin:'20px 25px 0px 25px'}}>
            <Stack id='statistics' direction={'row'} style={{backgroundColor:'white',width:'90%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h1 style={{fontSize:'1em',marginBottom:'0px',marginTop:'2%',marginLeft:'3%'}}>Upcoming Hours</h1>
                <div style={{marginTop:'2%',marginLeft:'3%'}}>
                    <select name ='Rain Precipitation' id ='Rain Precipitation' class = 'Rain Precipitation' style = {{color: '#a7a7a7',fontWeight:'600',fontFamily:'Arial',fontSize: '12px',marginRight:'25px',fontStyle: 'normal',border:'2px solid #f1f1f1',borderRadius:'5px',backgroundColor: '#F1f1f1',padding: "2px"}}>
                    <option value = "#">Rain Precipitation 1</option>
                    <option value = "#">Rain Precipitation 2</option>
                    </select>
                    
                    <select name ='Next Day' id ='Next Day' class = 'Next Day' style = {{color: '#000000',marginRight:'30px',fontFamily:'Arial',fontWeight:'600',fontSize: '12px',fontStyle: 'normal',backgroundColor: '#F1f1f1',border:'2px solid #f1f1f1',borderRadius:'5px',padding: "2px"}}>
                    <option value = "#">Next Day</option>
                    <option value = "#">Yesterday</option>
                    </select>
                </div>
            </Stack>
            <Box>
            <table class="charts-css area" id="my-chart">

                <tbody>
                <tr>
                    <td style={{start:"0.2", size: "0.4"}}> <span class="data"> $ 40K </span> </td>
                </tr>
                <tr>
                    <td style={{start: 0.4, size: 0.8}}> <span class="data"> $ 80K </span> </td>
                </tr>
                <tr>
                    <td style={{start: 0.8, size: 0.6}}> <span class="data"> $ 60K </span> </td>
                </tr>
                <tr>
                    <td style={{start: 0.6, size: 1.0}}> <span class="data"> $ 100K </span> </td>
                </tr>
                <tr>
                    <td style={{start: '1.0', size: '0.3'}}> <span class="data"> $ 30K </span> </td>
                </tr>
                </tbody>

            </table>
            </Box>
        </Box>
    </div>
  )
}

export default RightComp