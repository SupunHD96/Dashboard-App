import { Box, Button, Typography } from '@mui/material'
import { Bar, Line, Pie } from 'react-chartjs-2';

function WidgetChart(props) {

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
  }

  const data = {
    labels: props.labels,
    datasets: props.data,
  };

  if (props.type == "Bar") {

    return (
      <Box sx={{ border: 1, display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', alignContent: 'center', padding: "5px", overflow: 'auto' }}>
        <Box sx={{ display: "flex" }}>
          <Bar options={optionsBar} data={data} />
        </Box>
      </Box>
    );

  } else if (props.type == "Pie") {

    return (
      <Box sx={{ border: 1, display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', alignContent: 'center', padding: "5px", overflow: 'auto', whiteSpace: 'normal' }}>
        <Box sx={{ display: "flex" }}>
          <Pie options={optionsPie} data={data} />
        </Box>
      </Box>
    );

  } else if (props.type == "Line") {

    return (
      <Box sx={{ border: 1, display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', alignContent: 'center', padding: "5px", overflow: 'auto', whiteSpace: 'normal' }}>
        <Box sx={{ display: "flex" }}>
          <Line options={optionsLine} data={data} />
        </Box>
      </Box>
    );

  }
}

export default WidgetChart;