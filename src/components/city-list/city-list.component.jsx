import React from 'react';
import { City } from '../city/city.component';
import './city-list.styles.css';


export const CityList = ({cities, parcels, handleClick}) => {

	return (
		<div className="city-header">
		{
			cities.map(city => (
				<City id={city.id} city={city.name} parcels={parcels} handleClick={handleClick} classname={city.name.toLowerCase()} />
			))
		}
		</div>
	)
}