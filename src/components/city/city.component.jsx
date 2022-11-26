import React from 'react';
import { Parcel } from '../parcel/parcel.component';
import './city.styles.css';


export const City = ({city, parcels, handleClick, classname}) => {

    const filteredParcels = parcels.filter( parcel => {
			return parcel.group == city;
		})

	return (
		<div>
			<h1 className={classname}>{city}</h1>
			<div className='parcels-grid'>
				{
						filteredParcels.map(parcel => (
								<Parcel id={parcel.id} name={parcel.name} sequence={parcel.sequence} handleClick={handleClick} classname={classname} />
						))
				}
			</div>
		</div>
	)
}