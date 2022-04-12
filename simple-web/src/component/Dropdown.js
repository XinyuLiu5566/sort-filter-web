import React, { useEffect } from 'react';
import './Dropdown.css';
import { useState } from 'react';

export function Dropdown(props) {
    let data = props.data
    let setData = props.setData
    let original = props.original
    let setOriginal = props.setOriginal
    const [value, setValue] = useState('')


    useEffect(() => {
        const sort = (value) => {
            value = value.split(',')
            let attribute = value[0]
            let order = value[1]
            // console.log(attribute, order)
            if (order === 'ASC') {
                if (attribute === 'creation_time') {
                    const sorted_data = [...data].sort((a,b) => new Date(a[attribute]) > new Date(b[attribute]) ? 1 : -1)
                    setData(sorted_data)
                    const sorted_original_data = [...original].sort((a,b) => new Date(a[attribute]) > new Date(b[attribute]) ? 1 : -1)
                    setOriginal(sorted_original_data)
                } else {
                    const sorted_data = [...data].sort((a,b) => a[attribute] > b[attribute] ? 1 : -1)
                    setData(sorted_data)
                    const sorted_original_data = [...original].sort((a,b) => a[attribute] > b[attribute] ? 1 : -1)
                    setOriginal(sorted_original_data)
                } 
            } else {
                if (attribute === 'creation_time') {
                    const sorted_data = [...data].sort((a,b) => new Date(a[attribute]) < new Date(b[attribute]) ? 1 : -1)
                    setData(sorted_data)
                    const sorted_original_data = [...original].sort((a,b) => new Date(a[attribute]) < new Date(b[attribute]) ? 1 : -1)
                    setOriginal(sorted_original_data)
                } else {
                    const sorted_data = [...data].sort((a,b) => a[attribute] < b[attribute] ? 1 : -1)
                    setData(sorted_data)
                    const sorted_original_data = [...original].sort((a,b) => a[attribute] < b[attribute] ? 1 : -1)
                    setOriginal(sorted_original_data)
                }
            }
        };
        sort(value);
    }, [value])

    return (
        <div>
        <div>
            <select className="form-select rounded" aria-label="Default select example" onChange={(e) => setValue(e.target.value)}>
                <option selected>Sorted by</option>
                <option value="creation_time,DSC">Created time: Newest</option>
                <option value="creation_time,ASC">Created time: Oldest</option>
                <option value="token_price,DSC">Token Price: High to Low</option>
                <option value="token_price,ASC">Token Price: Low to High</option>
            </select>
        </div>
 
    </div>
      );
};
