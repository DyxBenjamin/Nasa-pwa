import { getPhotoToday } from "../Api/getPhotoToday";
import { useContext, useEffect, useState } from "react";
import './Css/PhotoDayCard.css';
import { WeekPhotos } from "./WeekPhotos";
import { PhotoContext } from "../Context/PhotoContext";


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
		<img className='photoPrincipal' src={ photoDay.url } alt={ photoDay.title } />
		<div className='infoContainer'>
			<div className='info'>
				<h1>{ photoDay.title }</h1>
				<hr />
				<h3>{ photoDay.date }</h3><br /><br />
				<p>{ photoDay.explanation }</p><br />
			</div>

		</div>
	</div>;
	
}
