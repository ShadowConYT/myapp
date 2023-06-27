import React from 'react';
import More from '../assests/More.png';
import Akaza from '../assests/Akaza.jpg';
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
        <div id='statistics' style={{backgroundColor:'white'}}>
            <h1 style={{fontSize:'1em',marginBottom:'0px'}}>Upcoming Hours</h1>

            <select name ='Rain Precipitation' id ='Rain Precipitation' class = 'Rain Precipitation' style = {{color: '#006699',fontFamily:'Arial',fontSize: '12px',fontStyle: 'normal',backgroundColor: '#FFFFFF',padding: "2px"}}>
            <option value = "#">Rain Precipitation 1</option>
            <option value = "#">Rain Precipitation 2</option>
            </select>

        </div>
    </div>
  )
}

export default RightComp