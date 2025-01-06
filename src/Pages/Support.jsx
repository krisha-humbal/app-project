import React from 'react'
import ResponsiveAppBar from '../Component/ResponsiveAppbar';
import Footer from '../Component/Footer';
import {Box} from '@mui/material';

function Support() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
        <Box sx={{width:'500px',fontSize:'12px',paddingTop:'50px',paddingBottom:'50px'}}>
            <h2 style={{fontWeight:'800'}}>Support The Rick and Morty API</h2>
            <p>Help to maintain The Rick and Morty API's infrastructure!</p>
            <p>If you are using the API for your app, your online tutorials or your coding challenges, please consider supporting us to help keep the project alive.</p>
            <p>We are not getting any money from this and we use our free time to keep the API running and the data up to date. Every contribution, however big or small, is super valuable for our future.</p>
            <p>Thanks!</p>
            <Box sx={{width:'200px', display:'flex',gap:'10px'}}>
                <Box sx={{width:'100px'}}>
                    <a href=""><img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="" style={{width:'100%'}}/></a>
                </Box>
                <Box sx={{width:'100px'}}>
                    <a href=""><img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="" style={{width:'100%'}}/></a>
                </Box>
            </Box>
        </Box>
      </Box>
      <Footer/>
    </div>
  )
}

export default Support
