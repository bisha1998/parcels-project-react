import React from 'react';
import './parcel-form.styles.css';


export const ParcelForm = ({cities, updateParcelName, updateParcelGroup}) => {

	return (
		<div className='parcel-form'>
			<div className='form-group'>
				<div className='form-title'>Enter Name:</div>
				<div>
					<input 
						className='form-control' 
						placeholder='Parcel Name'
						onChange = {updateParcelName}
					/>
				</div>
			</div>
			<div className='form-group'>
				<div className='form-title'>Select Location Group:</div>
				<div>
					<select 
						className='form-control' 
						name="cities"
						onChange = {updateParcelGroup}
					>
						{
							cities.map(city =>(
								<option value={city.name}>{city.name}</option>
							))
						}
					</select>
				</div>
			</div>
		</div>
	)
}