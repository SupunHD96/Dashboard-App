import { Box, Button, Drawer, Grid, List, ListItem } from '@mui/material'
import WidgetChart from './WidgetChart';
import AddChart from './AddChart';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function Widget() {

    let chartArray = [];

    chartArray = useSelector(state => state.charts)
    const [widgetState, setWidgetState] = useState(false);
    const [addChartDialog, setAddChartDialog] = useState(false);

    function toggleWidget() {
        setWidgetState(!widgetState);
    }

    function toggleAddChart() {
        setAddChartDialog(!addChartDialog);
    }


    if (Array.isArray(chartArray)) {

        const widgetContent = (
            <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center', maxWidth: "300px", paddingTop: "20px", px: "20px" }}>
                <List>
                    <ListItem><Button onClick={toggleWidget} sx={{ width: "100%" }}>Hide</Button></ListItem>
                    <ListItem><Button onClick={toggleAddChart} sx={{ width: "100%" }}>Add Chart</Button></ListItem>
                    {chartArray.map(({ id, title, type, labels, data }) =>
                        <ListItem key={id}>
                            <WidgetChart title={title} type={type} labels={labels} data={data} />
                        </ListItem>)}
                </List>
            </Box>
        );

        return (
            <Box sx={{ display: "flex", zIndex: 1 }}>
                <Drawer variant="temporary" anchor="right" open={widgetState} onClose={toggleWidget}>
                    {widgetContent}
                </Drawer>
                <Button onClick={toggleWidget} size="small" sx={{ display: { xs: "flex", md: "flex" } }}>Widget</Button>
                <AddChart open={addChartDialog} close={toggleAddChart} />
            </Box>
        );

    } else {
        return (
            <h1>Please Wait</h1>
        );
    }
}

export default Widget;