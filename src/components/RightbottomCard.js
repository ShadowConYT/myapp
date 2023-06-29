import React from 'react';
import { Stack, Box } from '@mui/material';
import '../App.css';
import Thermometer from '../assests/Thermometer.png';
import Umbrella from '../assests/Umbrella.png';

const RightbottomCard = () => {
  return (
    <Box>
        <Stack direction={'row'} style={{justifyContent:'space-evenly', margin:'20px 25px 20px 55px',width:'90%'}}>
                <div className='card'>
                    <div class="title">
                        <p class="title-text">
                            Feels Like</p>
                        <img src={Thermometer} width={'30px'} style={{borderRadius:'5px'}}/>
                    </div>

                    <div class="data">
                        <p style={{fontFamily:'arial'}}>30°</p>
                        <Stack direction={'row'} style={{justifyContent:'space-between',color:'#dcdcdc',fontWeight:'bold'}}>
                            <span>0°</span>
                            <span>25°</span>
                            <span>50°</span>
                        </Stack>
                        <div class="range">
                            <div class="fill"></div>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div class="title">
                        <p class="title-text">
                            Feels Like</p>
                        <img src={Thermometer} width={'30px'} style={{borderRadius:'5px'}}/>
                    </div>

                    <div class="data">
                        <p style={{fontFamily:'arial'}}>30°</p>
                        <Stack direction={'row'} style={{justifyContent:'space-between',fontSize:'0.81em',color:'#dcdcdc',fontSize:'0.81em',fontWeight:'bold'}}>
                            <span>0°</span>
                            <span>25°</span>
                            <span>50°</span>
                        </Stack>
                        <div class="range">
                            <div class="fill"></div>
                        </div>
                    </div>
                </div>

                <div className='card'>
                    <div class="title">
                        <p class="title-text">Chance of Rain</p>
                        <img src={Umbrella} width={'30px'} style={{borderRadius:'5px'}}/>
                    </div>

                    <div class="data">
                        <p style={{fontFamily:'arial'}}>42%</p>
                        <Stack direction={'row'} style={{justifyContent:'space-between',color:'#dcdcdc',fontSize:'0.81em',fontWeight:'bold'}}>
                            <span>0%</span>
                            <span>25%</span>
                            <span>50%</span>
                            <span>75%</span>
                            <span>100%</span>
                        </Stack>
                        <div class="range">
                            <div class="fill3"></div>
                        </div>
                    </div>
                </div>
        </Stack>

        <Stack direction={'row'} style={{justifyContent:'space-evenly', margin:'20px 25px 20px 55px',width:'90%'}}>
            <div className='card'>
                <div class="title">
                    <p class="title-text">
                        Feels Like</p>
                    <img src={Thermometer} width={'30px'} style={{borderRadius:'5px'}}/>
                </div>

                <div class="data">
                    <p style={{fontFamily:'arial'}}>30°</p>
                    <Stack direction={'row'} style={{justifyContent:'space-between',color:'#dcdcdc',fontWeight:'bold'}}>
                        <span>0°</span>
                        <span>25°</span>
                        <span>50°</span>
                    </Stack>
                    <div class="range">
                        <div class="fill"></div>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div class="title">
                    <p class="title-text">
                        Feels Like</p>
                    <img src={Thermometer} width={'30px'} style={{borderRadius:'5px'}}/>
                </div>

                <div class="data">
                    <p style={{fontFamily:'arial'}}>30°</p>
                    <Stack direction={'row'} style={{justifyContent:'space-between',fontSize:'0.81em',color:'#dcdcdc',fontSize:'0.81em',fontWeight:'bold'}}>
                        <span>0°</span>
                        <span>25°</span>
                        <span>50°</span>
                    </Stack>
                    <div class="range">
                        <div class="fill"></div>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div class="title">
                    <p class="title-text">Chance of Rain</p>
                    <img src={Umbrella} width={'30px'} style={{borderRadius:'5px'}}/>
                </div>

                <div class="data">
                    <p style={{fontFamily:'arial'}}>42%</p>
                    <Stack direction={'row'} style={{justifyContent:'space-between',color:'#dcdcdc',fontSize:'0.81em',fontWeight:'bold'}}>
                        <span>0%</span>
                        <span>25%</span>
                        <span>50%</span>
                        <span>75%</span>
                        <span>100%</span>
                    </Stack>
                    <div class="range">
                        <div class="fill3"></div>
                    </div>
                </div>
            </div>
        </Stack>
    </Box>
  )
}

export default RightbottomCard