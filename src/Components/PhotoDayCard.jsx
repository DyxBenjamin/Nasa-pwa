import { getPhotoToday } from "../Api/getPhotoToday";
import React, { useContext, useEffect, useState } from "react";
import './Css/PhotoDayCard.css';
import { PhotoContext } from "../Context/PhotoContext";
import {WeekPhotos} from "./WeekPhotos";
import {OtherPhotos} from "./OtherPhotos";


export function PhotoDayCard( { data } ) {
	const [ photoDay, setPhotoDay ] = useState( {} );
	
	const {photoView} = useContext(PhotoContext)
	
	useEffect( () => {
		getPhotoToday().then( newPhoto => setPhotoDay( newPhoto ) );
	}, [] );
	
	useEffect( () => {
		console.log(photoView.title);
		setPhotoDay(photoView);
	}, [ photoView ] );
	
	return <div className='photoDayCard'>
		
		<div className='main-photo-container'>
			<img className='photoPrincipal' src={ photoDay.url } alt={ photoDay.title } />
		</div>
		
		<div className='info-container'>
				<h1>{ photoDay.title }</h1>
				<hr />
			
			
				<h3>{ photoDay.date }</h3>
				<p>{ photoDay.explanation }</p>
			<div className='morePhotos'>
				<WeekPhotos/>
				<OtherPhotos/>
			</div>
		</div>
	</div>;
	
}
