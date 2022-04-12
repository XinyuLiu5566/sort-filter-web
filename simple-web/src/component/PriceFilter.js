import React from 'react';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './PriceFilter.css';

export function PriceFilter(props) {
    let setData = props.setData
    let original = props.original
    const [price, setPrice] = useState([0, 500])
    function valuetext(value) {
        return `${value}°C`;
      }

    const handleChange = (event, newValue) => {
      setPrice(newValue);
      let minValue = price[0]
      let maxValue = price[1]
      const filtered_data = [...original].filter((element) => (
        element['token_price'] >= minValue && element['token_price'] <= maxValue
      ))
      setData(filtered_data)
    }


    return (
        <div>
            <div className = "slider">
                <Box sx={{ width: 300 }}>
                    <h6>Price Range</h6>
                    <Slider className = "slider-bar"
                        getAriaLabel={() => 'Temperature range'}
                        value={price}
                        size="medium"
                        min={0}
                        max={500}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Box>
            </div>
        </div>
      );
};
