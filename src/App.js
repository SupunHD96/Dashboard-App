import Dashboard from './Components/Dashboard';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import { Box, Button, Container, Grid } from '@mui/material'
import SideMenu from './Components/SideMenu';
import Widget from './Components/Widget';

function App() {
  return (
    <div className="App">
      <Box sx={{ minWidth: "400px" }}>
        <NavigationBar />
        <Box sx={{ display: "flex", marginLeft: { xs: "0px", md: "150px" }, marginRight: { xs: "0px" } }}>
          <SideMenu />
          <Dashboard />
          <Widget />
        </Box>
      </Box>
    </div>
  );
}

export default App;
