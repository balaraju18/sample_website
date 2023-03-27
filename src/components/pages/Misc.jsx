import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import Cards from '../Cards';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "25%",
  borderRadius:'15px',
  boxShadow:'0px 0px 10px -5px '
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (<>
    <AppBar position="sticky">
      <StyledToolbar style={{backgroundColor:'#ffff'}}>
        <Search>
          <InputBase placeholder="search anything" />
        </Search>
        <Icons>
          <Badge  color="error">
            <MarkEmailUnreadOutlinedIcon 
             sx={{ width: 18, height: 18}}
             style={{padding:'7px' ,
             boxShadow:'0px 0px 10px -5px',
             borderRadius:'15px'}}
             />
          </Badge>
          <Badge color="error">
            <NotificationsActiveOutlinedIcon
             sx={{ width: 18, height: 18}}
             style={{padding:'7px',
             boxShadow:'0px 0px 10px -5px',
             borderRadius:'15px'}}
            />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
    <div>
      <Cards />
    </div>
  </>);
};

export default Navbar;