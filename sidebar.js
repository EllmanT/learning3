import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import FlexBetween from "./FlexBetween";
  import {
    CalendarMonth,
    ChevronLeftOutlined,
    HomeOutlined,
    Menu as MenuIcon,
    Money,
  } from "@mui/icons-material";
  
  const navItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Orders",
      icon: <CalendarMonth />,
    },
    {
      text: "Payments",
      icon: <Money />,
    },
  ];
  
  const Sidebar = ({
    user,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
  }) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const theme = useTheme();
  
    const navigate = useNavigate();
  
    useEffect(() => {
      setActive(pathname.substring(1));
    }, [pathname]);
    return (
      <Box component="nav">
        {isSidebarOpen&& (
     <Drawer
     open={isSidebarOpen}
     onClose={() => setIsSidebarOpen(false)}
     anchor="left"
     variant="persistent"
     sx={{
       width: drawerWidth,
       "& .MuiDrawer-paper": {
         color: theme.palette.secondary[200],
         backgroundColor: theme.palette.background.alt,
         boxSizing: "border-box",
         borderWidth: isNonMobile ? 0 : "1px",
         width: drawerWidth,
       },
     }}
   >
     {/**Part 1 */}
     <Box width={"100%"}>
      
       <Box m="1rem 2rem 1rem 3rem">
         <FlexBetween color={theme.palette.secondary.main}>
           <Box display={"flex"} alignItems={"center"} gap={"0.5rem"}>
             <Typography fontWeight={"bold"} variant="h3">
               myFleet
             </Typography>
           </Box>
           {isNonMobile && (
             <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
               <ChevronLeftOutlined />
             </IconButton>
           )}
         </FlexBetween>
       </Box>
  
       <List>
         {navItems.map(({ text, icon }) => {
           if (!icon) {
             return <Typography key={text}>{text}</Typography>;
           }
           const lcText = text.toLowerCase();
  
           return (
             <ListItem key={text} disablePadding>
               <ListItemButton
                 onClick={() => {
                   navigate(`/${lcText}`);
                   setActive(lcText);
                 }}
                 sx={{
                   backgroundColor:
                     active === lcText
                       ? theme.palette.secondary[300]
                       : "transparent",
                   color:
                     active === lcText
                       ? theme.palette.primary[600]
                       : theme.palette.secondary[100],
                 }}
               >
                 <ListItemIcon
                   sx={{
                     ml: "2rem",
                     color:
                       active === lcText
                         ? theme.palette.primary[600]
                         : theme.palette.secondary[200],
                   }}
                 >
                   {icon}
                 </ListItemIcon>
                 <ListItemText primary={text} />
               </ListItemButton>
             </ListItem>
           );
         })}
       </List>
     </Box>
  
     {/**Part 2 */}
     <Box width={"100%"} bottom={"0rem"}>
       <Divider />
  
       <FlexBetween
         display={"flex"}
         textTransform={"none"}
         gap={"1rem"}
         p="0.1rem 2rem"
       >
         <Box
           component={"img"}
           alt="profile-img"
           height={"32px"}
           width={"32px"}
           borderRadius={"50%"}
           sx={{ objectFit: "cover" }}
         />
         <Box>
           <Typography
             fontWeight={"bold"}
             fontSize={"0.9rem"}
             sx={{ color: theme.palette.secondary[100] }}
           >
             Tapiwa Muranda
           </Typography>
           <Typography
             fontSize={"0.9rem"}
             sx={{ color: theme.palette.secondary[200] }}
           >
             Admin
           </Typography>
         </Box>
       </FlexBetween>
     </Box>
   </Drawer>
        )}
     
      </Box>
    );
  };
  
  export default Sidebar;
  