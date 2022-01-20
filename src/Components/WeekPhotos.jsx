import React, { useEffect, useState } from 'react';
import { getWeekPhotos } from "../Api/getWeekPhotos";
import { ItemCard } from "./ItemCard";


export function WeekPhotos() {
	
	const [weekPhotos,setWeekPhotos] = useState([])

	useEffect(() => {
		getWeekPhotos()
			.then( data => setWeekPhotos(data.reverse()) )
		},[]
	)
	
	return (<div >
		<h4>Fotos de la semana</h4>
		<div className='weekPhotos'>
			{weekPhotos.map(
				photo => (
					<ItemCard
						key ={photo.date}
						item={photo}
					/>
				)
			)}
		</div>
		</div>);
};

