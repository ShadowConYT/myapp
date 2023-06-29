import React from 'react';
import { Stack, Box} from '@mui/material';
import '../App.css';
import Thermometer from '../assests/Thermometer.png';
import Umbrella from '../assests/Umbrella.png';
import Water from '../assests/Water.png';
import Wind from '../assests/Wind.png';
import Rain from '../assests/Rain.png';
import SunBG from '../assests/SunBG.png';

const RightbottomCard = () => {
  return (
    <Box >
        <h1 style={{fontSize:'15px',textAlign:'left',marginLeft:'5%'}}>More Details of today's weather</h1>
        <Stack direction={'row'} style={{justifyContent:'space-between', margin:'20px 25px 20px 55px',width:'90%'}}>
                
                <div className='card'>
                    <div class="title" style={{display:'flex',justifyContent:'space-between'}}>
                        <p class="title-text">
                            Humidity</p>
                        <img src={Water} width={'30px'} style={{borderRadius:'5px',marginTop:'12px'}}/>
                    </div>

                    <div class="data">
                        <p style={{fontFamily:'arial'}}>82%<span style={{marginBottom:'0px',marginLeft:'5px',fontSize:'20px',fontWeight:'lighter',fontFamily:'sans-serif'}}>bad</span></p>
                        <Stack direction={'row'} style={{justifyContent:'space-between',color:'#dcdcdc',fontWeight:'bold'}}>
                            <span>good</span>
                            <span>normal</span>
                            <span>bad</span>
                        </Stack>
                        <Stack direction={'row'} style={{justifyContent:'space-between'}}>
                            <div class="range1">
                                <div class="fill1" style={{width:'100%'}}></div>
                            </div>
                            <div class="range1">
                                <div class="fill1" style={{width:'100%'}}></div>
                            </div>
                            <div class="range1">
                                <div class="fill1"></div>
                            </div>
                        </Stack>
                    </div>
                </div>

                <div className='card'>
                    <div class="title">
                        <p class="title-text">
                            Wind</p>
                        <img src={Wind} width={'30px'} style={{borderRadius:'5px'}}/>
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
                        <p class="title-text">Precipitation</p>
                        <img src={Rain} width={'30px'} style={{borderRadius:'5px'}}/>
                    </div>

                    <div class="data">
                        <p style={{fontFamily:'arial'}}>1.4 cm</p>
                        <Stack direction={'row'} style={{justifyContent:'space-between',color:'#dcdcdc',fontSize:'0.81em',fontWeight:'bold'}}>
                            <span>0</span>
                            <span>10</span>
                            <span>20</span>
                            <span>30</span>
                            <span>40</span>
                            <span>50</span>
                            <span>60</span>
                            <span>70</span>
                            <span>80</span>
                            <span>90</span>
                        </Stack>
                        <Stack direction={'row'} style={{justifyContent:'space-between',marginLeft:'2px',width:'101%'}}>
                            <div class="range3">
                                <div class="fill3" style={{width:'100%'}}></div>
                            </div>
                            <div class="range3">
                                <div class="fill3" style={{width:'70%',borderRadius:'0.25rem 0rem 0rem 0.25rem'}}></div>
                            </div>
                            <div class="range3">
                                <div class="fill3"></div>
                            </div>
                            <div class="range3">
                                <div class="fill3"></div>
                            </div>
                            <div class="range3">
                                <div class="fill3"></div>
                            </div>
                            <div class="range3">
                                <div class="fill3"></div>
                            </div>
                            <div class="range3">
                                <div class="fill3"></div>
                            </div>
                            <div class="range3">
                                <div class="fill3"></div>
                            </div>
                            <div class="range3">
                                <div class="fill3"></div>
                            </div>
                            <div class="range3">
                                <div class="fill3"></div>
                            </div>
                        </Stack>
                    </div>
                </div>
        </Stack>

        <Stack direction={'row'} style={{justifyContent:'space-between', margin:'20px 25px 20px 55px',width:'90%'}}>
            
            <div className='card'>
                <div class="title">
                    <p class="title-text">
                        UV Index</p>
                    <img src={SunBG} width={'30px'} style={{borderRadius:'5px'}}/>
                </div>

                <div class="data">
                    <p style={{fontFamily:'arial'}}>30°</p>
                    <Stack direction={'row'} style={{marginTop:'0px',textAlign:'center',justifyContent:'space-between',color:'#dcdcdc',fontWeight:'bold'}}>
                        <span>0-2</span>
                        <span>3-5</span>
                        <span>6-7</span>
                        <span>8-10</span>
                        <span>11+</span>
                    </Stack>
                    <Stack direction={'row'} style={{justifyContent:'space-around',marginLeft:'0px',width:'100%'}}>
                            <div class="range4">
                                <div class="fill4" style={{width:'100%'}}></div>
                            </div>
                            <div class="range4">
                                <div class="fill4" style={{width:'70%',borderRadius:'0.25rem 0rem 0rem 0.25rem'}}></div>
                            </div>
                            <div class="range4">
                                <div class="fill4"></div>
                            </div>
                            <div class="range4">
                                <div class="fill4"></div>
                            </div>
                            <div class="range4">
                                <div class="fill4"></div>
                            </div>
                        </Stack>
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
                        <div class="fill"></div>
                    </div>
                </div>
            </div>
        </Stack>
    </Box>
  )
}

export default RightbottomCard