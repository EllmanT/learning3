import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FlexBetween from './FlexBetween';
import { ArrowDropDownOutlined, DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from '@mui/icons-material';
import { setMode } from 'state';

const Navbar = ({user, isSidebarOpen, setIsSidebarOpen}) => {

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null)
  const isOpen = Boolean(anchorEl)
  const handleClick =(event)=>setAnchorEl(event.currentTarget)
  const handleClose = ()=>setAnchorEl(null)

  const theme = useTheme();
  return (
    <AppBar
    sx={{
      position:"static",
      background:"none",
      boxShadow:"1px 1px 2px 	#696969",
    }}
    >

      <Toolbar sx={{justifyContent:"space-between"}}>
        {/*Part 1 */}
        <FlexBetween gap="1rem">
        <FlexBetween border={"solid 2px"} borderColor={theme.palette.secondary[100]} gap="0.5rem" borderRadius={"12px"} p={"o.1rem 3rem"}>

          <IconButton onClick={()=>setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon/>
          </IconButton>
          </FlexBetween>
          <FlexBetween border={"solid 2px"} borderColor={theme.palette.secondary[100]}  borderRadius={"12px"} p={"0.1rem 1rem"}>
            <InputBase placeholder='Search'/>
            <IconButton>
              <Search/>
            </IconButton>
          </FlexBetween>
        </FlexBetween>

            {/*Part 2 */}

            <FlexBetween gap={"1.5rem"}>
              <IconButton onClick={()=>dispatch(setMode())}>
                {theme.palette.mode ==="dark" ? <DarkModeOutlined sx={{fontSize : "25px"}}/> : <LightModeOutlined sx={{fontSize : "25px"}}/>}
              </IconButton>
              <IconButton>
                <SettingsOutlined sx={{fontSize : "25px"}}/>
              </IconButton>
              <FlexBetween>
              <Button 
              onClick={handleClick}
              sx={{
                justifyContent:"space-between",
                alignItems:"center",
                gap:"0.1rem",
                display:"flex"
              }}
              >
                <Box component="img"
                alt="profile-img"
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{objectFit:"cover"}}
                />
                <Box>
                  <Typography fontWeight={"bold"} fontSize={"0.9rem"} sx={{color : theme.palette.secondary[100]}}>
                    Tapiwa Muranda
                  </Typography>
                  <Typography fontSize={"0.9rem"} sx={{color : theme.palette.secondary[200]}}>
                    Admin
                  </Typography>
                </Box>
                <ArrowDropDownOutlined sx={{color : theme.palette.secondary[300], fontSize:"25px"}}/>
             
              </Button>
                   
              <Menu
              anchorEl={anchorEl}
              open={isOpen}
              anchorOrigin={{vertical:"bottom", horizontal:"center"}}
              onClose={handleClose}
              >
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              </FlexBetween>
            
            
            </FlexBetween>


      </Toolbar>

    </AppBar>
  )
}

export default Navbar