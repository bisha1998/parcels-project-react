import React from 'react';
import './parcel.styles.css';

export const Parcel = ({id, name, sequence, handleClick, classname}) => {
    return (
			<div className="parcel-box">
				<div className='parcel-name'>{name}</div>
				<button 
					className={`parcel-seq ${classname}`}
					value={name}
					onClick = {handleClick}
				>
					{sequence}
				</button>
			</div>
    )
}