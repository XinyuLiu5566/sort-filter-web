import React from 'react';
import Button from '@mui/material/Button';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './TimeFilter.css';




export function TimeFilter(props) {
    let data = props.data
    let setData = props.setData
    let original = props.original
    let setOriginal = props.setOriginal
    const [start, setStart] = React.useState(null);
    const [end, setEnd] = React.useState(null);


    const handleStartDate = (event) => {
        const {value} = event.target
        setStart(value)
    }

    const handleEndDate = (event) => {
        const {value} = event.target
        setEnd(value)
    }

    const handleDate = () => {
        const filtered_data = [...data].filter((element) => (
            new Date(element['creation_time']) >= new Date(start) && new Date(element['creation_time']) <= new Date(end)
          ))
        setData(filtered_data)
        const sorted_original_data = [...original].filter((element) => (
            new Date(element['creation_time']) >= new Date(start) && new Date(element['creation_time']) <= new Date(end)
          ))
        setOriginal(sorted_original_data)
    }

    return (
        <div>
             <div className="col-sm-12 my-2 start-time">
                <label htmlFor="startDate">From</label>
                <input
                type="date"
                className="form-control"
                id="startDate"
                onChange={handleStartDate}
                />
            </div>
            <div className="col-sm-12 my-2 end-time">
                <label htmlFor="endDate">To</label>
                <input
                type="date"
                className="form-control"
                id="endDate"
                onChange={handleEndDate}
                />
            </div>
            <Button className="submit" variant="outlined" onClick={handleDate}>Apply</Button>
        </div>
      );
};
