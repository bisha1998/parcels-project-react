import React from 'react';
import './action-buttons.styles.css';


export const ActionButton = ({title, handleClick}) => {

	return (
		<button 
			className='action-button'
			onClick={handleClick}
		>
				{title}
		</button>
	)
}