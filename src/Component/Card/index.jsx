// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import {Card as MUICard} from '@mui/material';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

// export default function Card({img,heading,headsub,info,infosub,info1,info1sub}) {
//   const theme = useTheme();

//   return (
    
//     <MUICard sx={{ display: 'flex'}}>

    

//      <CardMedia
//         component="img"
//         sx={{ width: 151 }}
//         image={img}
//         alt="Live from space album cover"
//       />
//       <Box sx={{ display: 'flex', flexDirection: 'column',backgroundColor:'rgb(60, 62, 68)',color:'white' }}>
//         <CardContent sx={{ flex: '' }}>
//           <Typography component="div" variant="" fontWeight='bold'>

//             {heading}
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             component="div"
//             sx={{ color: 'text.secondary',fontSize:'10px',color:'white' }}
//           >
//             {headsub}
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             component="div"
//             sx={{ color: 'text.secondary',fontSize:'10px',paddingTop:'5px',color:'#9E9E9E',fontWeight:'light' }}
//           >
//             {info}Last known Location:
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             component="div"
//             sx={{ color: 'text.secondary',fontSize:'11px',color:'white' }}
//           >
//             {infosub}
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             component="div"
//             sx={{ color: 'text.secondary',fontSize:'10px',paddingTop:'5px',color:'#9E9E9E', }}
//           >
//             {info1}First See In:
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             component="div"
//             sx={{ color: 'text.secondary',fontSize:'11px',color:'white' }}
//           >
//             {info1sub}
//           </Typography>
//         </CardContent>
       
//       </Box>
     
      
//     </MUICard>
//   );
// }
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Card as MUICard } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Card({ img, heading, headsub,category,description }) {
  const theme = useTheme();

  return (
    <MUICard sx={{ display: 'flex', width:'450px',flexWrap:'wrap', backgroundColor: 'rgb(60, 62, 68)', color: 'white' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={img}
        // alt={heading}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <CardContent>
          <Typography component="div" variant="h6" fontWeight="bold"  >
            <a href="" style={{cursor:'pointer',textDecoration:'none' ,color:'white'}}>
            {heading}
            </a>
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontSize: '10px', color: 'white' }}
          >
            {headsub}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontSize: '10px', paddingTop: '5px', color: '#9E9E9E' }}
          >
            {category} 
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontSize: '11px', color: 'white' }}
          >
            {description}
          </Typography>
          
        </CardContent>
      </Box>
    </MUICard>
  );
}
