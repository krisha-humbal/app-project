import React from 'react'
import {Box} from '@mui/material';

function Footer() {
  return (
    <div>
        <Box sx={{width:'100%',backgroundColor:'rgb(32, 35, 41)',display:'flex',justifyContent:'center',paddingBottom:'150px'}}>
            <Box sx={{display:'flex',justifyContent:'center',paddingTop:'50px',gap:'10px',flexWrap:'wrap',width:'450px'}}>
                <a href="" style={{textDecoration:'none',color:'white'}}>CHARACTERS:826</a>
                <a href="" style={{textDecoration:'none',color:'white'}}>LOCATIONS:526</a>
                <a href="" style={{textDecoration:'none',color:'white'}}>EPISODES:126</a>
                <a href="" style={{textDecoration:'none',color:'white'}}>SERVER STATUS</a>

            </Box>
        </Box>
    </div>
  )
}

export default Footer
