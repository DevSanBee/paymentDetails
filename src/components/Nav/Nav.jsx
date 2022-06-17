import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import "./Nav.css";
import Tab from "@mui/material/Tab";
import Avatar from "@mui/material/Avatar";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      style={{
        width: "100%",
        paddingLeft: "50%",
        paddingTop: "2%",
        paddingBottom: "3%",
        borderBottom: "2px solid rgba(110, 110, 110,.2)",
      }}
      className="navBar"
    >
      <Tabs
        value={value}
        
        onChange={handleChange}
        aria-label="nav tabs example"
        className="navList"
      >
        <LinkTab label="Trips" href="/" />
        <LinkTab label="Recently Viewed" href="/recent" />
        <LinkTab label="Bookings" href="/bookings" />
        <Avatar alt="Remy Sharp" src="profile3.jpg" />
      </Tabs>
    </Box>
  );
}
