import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        "id": 1,
        "title": "Bar Chart",
        "type": "Bar",
        "labels": ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        "data": [{
            "label": "Dataset 1",
            "data": [10, 20, 30, 40, 50, 20, 15],
            "backgroundColor": "rgba(255, 99, 132, 0.5)"
        },
        {
            "label": "Dataset 2",
            "data": [16, 17, 14, 29, 24, 26, 29],
            "backgroundColor": "rgba(53, 162, 235, 0.5)"
        }
        ]
    },
    {
        "id": 2,
        "title": "Pie Chart",
        "type": "Pie",
        "labels": ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        "data": [{
            "label": 'Dataset 1',
            "data": [10, 20, 30, 40, 50, 20, 15],
            "backgroundColor": [
                'rgba(53, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]
        }
        ]
    },
    {
        "id": 3,
        "title": "Line Chart",
        "type": "Line",
        "labels": ['March', 'April', 'May', 'June', 'July'],
        "data": [{
            "label": 'Dataset 1',
            "data": [10, 30, 40, 15],
            "borderColor": 'rgba(255, 99, 132, 0.5)',
            "backgroundColor": 'rgba(255, 99, 132, 0.5)',
        },
        ]
    },
];

const chartSlice = createSlice({
    name: 'charts',
    initialState,
    reducers: {
        chartAdded(state, action) {
            state.push(action.payload)
        },

        chartDeleted(state, action) {
            return state.filter(chart => chart.id !== action.payload.id);

        },
        chartUpdate(state, action) {
            let updateElement
        }
    }
})

export const { chartAdded, chartDeleted } = chartSlice.actions

export default chartSlice.reducer