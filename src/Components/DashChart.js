import { Box, Button, Typography } from '@mui/material'
import Chart from 'chart.js/auto';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { chartDeleted } from './chartSlice';

function DashChart(props) {

  const [chartState, setChartState] = useState("flex");
  const [selectedChart, setSelectedChart] = useState(props.id);

  const dispatch = useDispatch();

  function showId() {
    setSelectedChart(props.id)
    dispatch(
      chartDeleted({
        id: selectedChart
      })
    )
    setSelectedChart(null)
  }


  const optionsBar = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  const optionsPie = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  const optionsLine = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  const data = {
    labels: props.labels,
    datasets: props.data,
  };

  if (props.type == "Bar") {

    return (
      <Box sx={{ border: 1, height: "400px", display: "flex", flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', alignContent: 'center', overflow: 'auto', whiteSpace: 'none' }}>
        <Box sx={{ display: chartState, padding: "10px" }}>
          <Bar options={optionsBar} data={data} />
        </Box>
        <Button variant="contained" onClick={showId}>Delete</Button>
      </Box>
    );

  } else if (props.type == "Pie") {

    return (
      <Box sx={{ border: 1, height: "400px", display: "flex", flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', alignContent: 'center', overflow: 'auto', whiteSpace: 'nowrap' }}>
        <Box sx={{ display: chartState, padding: "10px" }}>
          <Pie options={optionsPie} data={data} />
        </Box>
        <Button variant="contained" onClick={showId}>Delete</Button>
      </Box>
    );

  } else if (props.type == "Line") {

    return (
      <Box sx={{ border: 1, height: "400px", display: "flex", flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', alignContent: 'center', overflow: 'auto', whiteSpace: 'nowrap' }}>
        <Box sx={{ display: chartState, padding: "10px" }}>
          <Line options={optionsLine} data={data} />
        </Box>
        <Button variant="contained" onClick={showId}>Delete</Button>
      </Box>
    );

  }
}

export default DashChart;