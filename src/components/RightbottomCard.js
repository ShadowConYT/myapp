import React from 'react';
import { Stack } from '@mui/material';
import '../App.css';
import Thermometer from '../assests/Thermometer.png';

const RightbottomCard = () => {
  return (
    <Stack>
        <div className='card'>
            <div class="title">
                <p class="title-text">
                    Feels Like</p>
                <img src={Thermometer} width={'30px'} style={{borderRadius:'5px'}}/>
            </div>

    <div class="data">
        <p>
            30°
        </p>
        <Stack direction={'row'} style={{justifyContent:'space-between',color:'#dcdcdc',fontWeight:'bold'}}>
                <span>0°</span>
                <span>25°</span>
                <span>50°</span>
            </Stack>
        <div class="range">
            <div class="fill">
            </div>
        </div>
        </div>
        </div>
    </Stack>
  )
}

export default RightbottomCard