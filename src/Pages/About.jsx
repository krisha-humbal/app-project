import React from 'react'
import ResponsiveAppBar from '../Component/ResponsiveAppbar'
import Footer from '../Component/Footer'
import {Box} from '@mui/material';

function About() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Box sx={{width:'100%',display:'flex',justifyContent:'center',paddingTop:'30px',paddingBottom:'40px'}}>
        <Box sx={{width:'600px',display:'flex',flexDirection:'column',backgroundColor:''}}>
            <h1 style={{fontWeight:'800'}}>About</h1>
            <Box>
                <h3 style={{fontWeight:'800'}}>What is this ?</h3>
                <p style={{fontSize:'13px'}}>The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show.</p>
                <a href="" style={{fontSize:'13px',textDecoration:'none', color:'black',borderBottom:'1px solid orange' }}>Check out the documnets to get started</a>
            </Box> 
            <Box>
                <h3 style={{fontWeight:'800'}}>Why did you build this?</h3>
                <p style={{fontSize:'13px'}}>Because we were really interested in the idea of writing an open source project and also because Rick and Morty is our favorite show at that moment, so why not</p>
               
            </Box> 
            <Box>
                <h3 style={{fontWeight:'800'}}>Technical stuff?</h3>
                <p style={{fontSize:'13px'}}>The entire project is hosted on Digital Ocean and Netlify. GraphQL cache is handled through Stellate. We use Node and MongoDB to serve the API.</p>
               
            </Box> 
            <Box>
                <h3 style={{fontWeight:'800'}}>How can I contribute to the project?</h3>
                <p style={{fontSize:'13px'}}>You can help us to keep the project alive and you can also contribute on GitHub.</p>
                
            </Box> 
            <Box>
                <h3 style={{fontWeight:'800'}}>Copyright?</h3>
                <p style={{fontSize:'13px'}}>Rick and Morty is created by Justin Roiland and Dan Harmon for Adult Swim. The data and images are used without claim of ownership and belong to their respective owners.</p>
               <p  style={{fontSize:'13px'}}>This API is open source and uses a BSD license.</p>
            </Box> 
           
        </Box>
      </Box>
      <Footer/>
    </div>
  )
}

export default About
