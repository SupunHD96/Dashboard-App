import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormHelperText, Grid, MenuItem, Select, TextField } from '@mui/material'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { chartAdded } from './chartSlice';

function AddChart(props) {

    const [newChart, setNewChart] = useState({ id: null, title: "", type: "Bar", labels: [], data: [] });
    const [chartType, setChartType] = useState("Bar");

    const dispatch = useDispatch();

    const setTitle = (e) => {
        setNewChart({ ...newChart, title: e.target.value })
    };

    const setType = (e) => {
        setChartType(e.target.value);
        setNewChart({ ...newChart, type: e.target.value })
    };

    const setLabels = (e) => {
        setNewChart({ ...newChart, labels: (e.target.value).split(', ') })
    };

    const setData = (e) => {
        setNewChart({ ...newChart, data: JSON.parse(e.target.value) })
    };

    const createNewChart = () => {
        if (newChart.title !== "") {
            dispatch(
                chartAdded({
                    id: nanoid(),
                    title: newChart.title,
                    type: newChart.type,
                    labels: newChart.labels,
                    data: newChart.data
                })
            )

            console.log("success");
        } else {
            console.log("Please enter data as instructed");
        }
    }



    const chartTypeList = (
        <FormControl>
            <FormHelperText>Chart Type</FormHelperText>
            <Select sx={{}}
                labelId="demo-simple-select-label"
                id="chartType"
                value={chartType}
                onChange={setType}
            >
                <MenuItem value="Bar">Bar</MenuItem>
                <MenuItem value="Pie">Pie</MenuItem>
                <MenuItem value="Line">Line</MenuItem>
            </Select>
        </FormControl>
    );

    return (
        <Dialog open={props.open} onClose={props.close}>
            <Box sx={{ width: "300px" }}>
                <DialogTitle sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>Add Chart</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2} sx={{ display: "flex", flexDirection: 'column', justifyContent: 'left', alignItems: 'left', alignContent: 'center' }}>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                id="chartName"
                                label="Chart Name"
                                type="text"
                                variant="filled"
                                onBlur={setTitle}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {chartTypeList}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="chartLabels"
                                label="Chart Labels"
                                type="text"
                                multiline
                                rows={4}
                                variant="outlined"
                                onBlur={setLabels}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="chartData"
                                label="Chart Data"
                                type="text"
                                multiline
                                rows={4}
                                variant="outlined"
                                onBlur={setData}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.close}>Cancel</Button>
                    <Button variant="contained" onClick={createNewChart}>Add Chart</Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}

export default AddChart;