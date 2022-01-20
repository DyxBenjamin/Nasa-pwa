import React, { useEffect, useState } from 'react';
import { ItemCard } from "./ItemCard";
import { getRandomPhotos } from "../Api/getRandomPhotos";


export function OtherPhotos() {
	
	const [otherPhotos,setOtherPhotos] = useState([])
	
	useEffect(() => {
			getRandomPhotos(20)
				.then( data => setOtherPhotos(data) )
		},[]
	)
	
	return (<div className='otherPhotos'>
			<h4>Mas fotos</h4>
		{otherPhotos.map(
			photo => (
				<ItemCard
					key ={photo.date}
					item={photo}
				/>
			)
		)}
		</div>);
};

