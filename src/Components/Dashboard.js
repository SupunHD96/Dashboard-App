import { Box, Button, Container, Grid, Typography } from '@mui/material'
import DashChart from './DashChart';
import { useSelector } from 'react-redux';

function Dashboard() {

    let chartArray = [];

    chartArray = useSelector(state => state.charts)

    if (Array.isArray(chartArray)) {


        return (
            <Container sx={{ px: { xs: "5px", md: "20px" }, py: "50px" }}>
                <Typography variant="h4" gutterBottom>Dashboard</Typography>
                <Grid container spacing={2}>
                    {chartArray.map(({ id, title, type, labels, data }) =>
                        <Grid item key={id} xs={11} md={6}>
                            <DashChart id={id} title={title} type={type} labels={labels} data={data} />
                        </Grid>)}
                </Grid>
            </Container>
        );
    }

    else {
        return (
            <h1>Please Wait</h1>
        );
    }
}

export default Dashboard;