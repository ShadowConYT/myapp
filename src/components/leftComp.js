import React from 'react'
import Loc from '../assests/Loc.png';
import Tanjore from '../assests/Tanjore.png';
import Sunrise from '../assests/Sunrise.png';
import Sunset from '../assests/Sunset.png';
import Add from '../assests/Add.png';
const LeftComp = () => {
  return (
    <div>
       <div style={{backgroundColor:'#5c9ce5', width:'25%', height:'100vh'}}>

            <div style={{display:'flex',marginBottom:'25px',paddingTop:'25px',marginLeft:'20px'}}>
                <img src={Add} width={'30px'}/>
                <span style={{backgroundColor:'white',color:'white',margin:0,padding:0,fontSize:'5px',width:'15px',height:'5px',marginTop:'10px', borderRadius:'10px',marginLeft:'25%'}}>.</span>
                <span style={{backgroundColor:'gray',opacity:'75%',color:'white',margin:0,padding:0,fontSize:'5px',width:'5px',height:'5px',marginTop:'10px',marginLeft:'2%', borderRadius:'10px'}}>.</span>
                <span style={{backgroundColor:'gray',opacity:'75%',color:'white',margin:0,padding:0,fontSize:'5px',width:'5px',height:'5px',marginTop:'10px',marginLeft:'2%', borderRadius:'10px'}}>.</span>
            </div>

            <div style={{display:'flex'}}>
                <div style={{display:'flex',marginRight:'50px',marginLeft:'35px'}}>
                    <img src={Loc} width={'30px'} height={'30px'} style={{marginTop:'17px'}}/>
                    <p style={{fontWeight:'lighter',fontSize:'20px', fontFamily:'initial', color:'white',marginLeft:'5px'}}>Chennai, India</p>
                </div>
            <div>
                    <img src={Sunrise} width={'25px'} style={{marginTop:'15px'}}/>
                    <span style={{fontWeight:'lighter', fontFamily:'initial',color:'white',marginLeft:'5px'}}>06:09</span>
                </div>
            </div>
            <div style={{display:'flex'}}>
                <div style={{marginRight:'100px',marginLeft:'40px'}}>
                    <p style={{color:'white'}}>Today 27 June</p></div>
                <div>
                    <img src={Sunset} width={'25px'} style={{marginTop:'10px'}}/>
                    <span style={{fontWeight:'lighter', fontFamily:'initial',color:'white',marginLeft:'5px'}}>18:53</span>
                </div>
            </div>
            <img src={Tanjore} style={{position:'relative', }} />
       </div>


    </div>
  )
}

export default LeftComp