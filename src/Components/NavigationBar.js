import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';


function NavigationBar() {

    const [mobileMenu, setMobileMenu] = useState(null)

    function ShowMenu(e) {
        setMobileMenu(e.currentTarget);
    }

    function HideMenu() {
        setMobileMenu(null);
    }

    const pages = ["Dashboard", "Play Area", "Widgets", "Templates", "Data Locker"];

    return (
        <AppBar position="sticky" sx={{ minWidth: "400px" }}>
            <Toolbar sx={{ display: { xs: "none", md: "flex" }, justifyContent: "right" }}>
                {pages.map((page) =>
                    <MenuItem key={page} onClick={HideMenu} sx={{ padding: "10px", display: "block" }}>{page}</MenuItem>
                )}
            </Toolbar>
            <Toolbar sx={{ display: { xs: "flex", md: "none" }, justifyContent: "left" }}>
                <MenuItem onClick={ShowMenu}>Menu</MenuItem>
                <Menu anchorEl={mobileMenu} open={Boolean(mobileMenu)} onClose={HideMenu} sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "left" }}>
                    {pages.map((page) =>
                        <MenuItem key={page} onClick={HideMenu} sx={{ display: "flex" }}>{page}</MenuItem>
                    )}
                </Menu>
            </Toolbar>
        </AppBar>
    );

}

export default NavigationBar;