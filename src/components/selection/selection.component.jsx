import React from 'react';
import './selection.styles.css';


export const Selection = ({value}) => {

	return (
		<div className='selection-box'>
            <div className="title">Selected Parcel: <span>{value}</span></div>
        </div>
	)
}