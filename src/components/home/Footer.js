// import { TableFooter } from '@mui/material'
import React from 'react'
import { Box, Button,  styled } from "@mui/material";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const TableFooter = styled(Box)((theme)=>({
    height:"70vh",
    padding:"0 280px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center"
}))

const Box1 = styled(Box)((theme)=>({
    display:"flex",
    justifyContent:"space-between",
    width:"100%",
    margin:"60px"
}))

const Footer = () => {
  return (
    <TableFooter>
        <Box >
            <h1 style={{fontSize:"50px", color:"#463434" ,  textDecoration:"underline"}}>Have any Questions? Contact Us</h1>
        </Box>
        <Box1 >
            <Box>
                <AttachEmailIcon style={{color:"#990147" , fontSize:"45px"}}/>
                <h1 style={{color:"#990147"}}>harsh1713.be21@chitkara.edu.in</h1>
            </Box>
            <Box>
                <PhoneInTalkIcon style={{color:"#990147" , fontSize:"45px"}}/>
                <h1 style={{color:"#990147"}}>+918864833148</h1>
            </Box>
        </Box1>
    </TableFooter>
  )
}

export default Footer   