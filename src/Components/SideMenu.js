import { AppBar, Box, Drawer, List, ListItem, Toolbar } from '@mui/material/';

function SideMenu() {

    const list = ["Dashboard", "Play Area", "Widgets", "Templates", "Data Locker"];

    const DrawerContent = (
        <Box sx={{ width: "150px" }}>
            <AppBar position="static">
                <Toolbar />
            </AppBar>
            <List>
                {list.map((i) =>
                    <ListItem key={i} button>{i}</ListItem>)}
            </List>
        </Box>
    );


    return (
        <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Drawer variant="permanent" anchor="left" open>
                {DrawerContent}
            </Drawer>
        </Box>
    );
}

export default SideMenu;